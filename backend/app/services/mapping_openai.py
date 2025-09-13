from __future__ import annotations

import json
from typing import Optional, List

from ..schemas import SceneJSON, MappingOutput, DomainScores
from ..config import settings
import logging

try:
    from openai import OpenAI  # type: ignore
except Exception:  # pragma: no cover - env without openai
    OpenAI = None  # type: ignore


logger = logging.getLogger("cortexcam.openai")


def _client() -> Optional["OpenAI"]:
    if not settings.OPENAI_API_KEY:
        logger.warning("OPENAI_API_KEY not found in settings.")
        return None
    if OpenAI is None:
        logger.warning("OpenAI library not imported.")
        return None
    try:
        # The API key MUST be passed during initialization.
        return OpenAI(api_key=settings.OPENAI_API_KEY)
    except Exception as e:
        logger.error(f"Failed to initialize OpenAI client: {e}", exc_info=True)
        return None


def _build_prompt(scene: SceneJSON) -> tuple[list[dict], dict]:
    system = (
        "You are a cognitive-domain tagger for wellness insights. "
        "You never produce clinical claims. Output strict JSON only."
    )
    # Compact object list
    obj_lines = [
        f"{o.label}:{o.conf:.2f}:{','.join(o.attrs) if o.attrs else '-'}"
        for o in scene.objects
    ]
    text_snippets = [t.content for t in scene.text][:10]
    ego = scene.egocentric.model_dump()
    env = scene.environment.model_dump()
    user = (
        "SCENE:\n"
        f"- Caption: {scene.caption}\n"
        f"- Objects: {', '.join(obj_lines) if obj_lines else 'none'}\n"
        f"- OCR snippets: {text_snippets if text_snippets else 'none'}\n"
        f"- Egocentric: {ego}\n"
        f"- Environment: {env}\n\n"
        "TASK:\n"
        "1) List 3-6 short activity_tags.\n"
        "2) Return domain_scores for VIS, LAN, SOC, MOT, EXEC, REW as integers 1-100 reflecting usage intensity (sum unconstrained).\n"
        "3) Provide 1-2 sentence rationale and an overall confidence in [0,1].\n\n"
        "OUTPUT JSON schema:\n"
        "{\n"
        " \"activity_tags\": [string,...],\n"
        " \"domain_scores_100\": {\"VIS\": int, \"LAN\": int, \"SOC\": int, \"MOT\": int, \"EXEC\": int, \"REW\": int},\n"
        " \"confidence\": float,\n"
        " \"rationale\": string\n"
        "}\n"
    )
    messages = [
        {"role": "system", "content": system},
        {"role": "user", "content": user},
    ]
    response_format = {"type": "json_object"}
    return messages, response_format


def map_with_openai(scene: SceneJSON, image_b64: Optional[str] = None) -> Optional[MappingOutput]:
    client = _client()
    force = settings.CORTEXCAM_OPENAI_FORCE in {"1", "true", "True"}
    if client is None:
        if force:
            raise RuntimeError("OpenAI client unavailable but CORTEXCAM_OPENAI_FORCE is set")
        return None
    model = settings.CORTEXCAM_OPENAI_MODEL
    try:
        # Build base prompt
        base_messages, response_format = _build_prompt(scene)

        def _run(messages_payload):
            resp_local = client.chat.completions.create(
                model=model,
                messages=messages_payload,
                temperature=0.2,
                response_format=response_format,
                max_tokens=600,
            )
            content_local = resp_local.choices[0].message.content or "{}"
            return json.loads(content_local)

        data = None
        if image_b64:
            # Try multimodal first (text + image)
            try:
                system_text = base_messages[0]["content"] if isinstance(base_messages[0], dict) else base_messages[0]
                user_text = base_messages[1]["content"] if isinstance(base_messages[1], dict) else base_messages[1]
                user_content = [
                    {"type": "text", "text": user_text},
                    {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{image_b64}"}},
                ]
                mm_messages = [
                    {"role": "system", "content": system_text},
                    {"role": "user", "content": user_content},
                ]
                data = _run(mm_messages)
            except Exception as em:
                logger.warning("OpenAI domain mapping (multimodal) failed, retrying text-only: %s", em)

        if data is None:
            # Fallback to text-only domain mapping
            data = _run(base_messages)

        tags = data.get("activity_tags", [])
        ds100 = data.get("domain_scores_100", {})
        # Normalize to 0..1 for internal DomainScores
        def norm(key: str) -> float:
            try:
                v = float(ds100.get(key, 0))
                return max(0.0, min(1.0, v / 100.0))
            except Exception:
                return 0.0

        scores = DomainScores(
            VIS=norm("VIS"),
            LAN=norm("LAN"),
            SOC=norm("SOC"),
            MOT=norm("MOT"),
            EXEC=norm("EXEC"),
            REW=norm("REW"),
        )
        conf = float(data.get("confidence", 0.6))
        rationale = data.get("rationale", "OpenAI mapping")
        logger.info("OpenAI mapping used (model=%s)", model)
        return MappingOutput(
            activity_tags=tags or ["unspecified"],
            domain_scores=scores,
            confidence=max(0.0, min(1.0, conf)),
            rationale=rationale,
        )
    except Exception as e:
        logger.error(f"Error calling OpenAI API: {e}", exc_info=True)
        if force:
            raise
        logger.warning("OpenAI mapping failed: %s", e)
        return None


# Curated list based on anatomical and functional relevance for everyday activities.
# Renaming to BRAIN_REGIONS_LIST for clarity and consistency.
BRAIN_REGIONS_LIST = [
    # LOBES
    "frontal_lobe",
    "parietal_lobe",
    "temporal_lobe",
    "occipital_lobe",
    "insula",
    # SUBCORTICAL STRUCTURES
    "thalamus",
    "cerebellum",
    "brainstem",
    "hippocampus",
    "amygdala",
    "caudate_nucleus",
    "putamen",
    "globus_pallidus",
    "nucleus_accumbens",
    # NETWORKS
    "default_mode_network_DMN",
    "dorsal_attention_network_DAN",
    "ventral_attention_network_VAN",
    "frontoparietal_control_network_FPCN",
    "salience_network",
]


def map_brain_regions_with_openai(scene: SceneJSON, image_b64: Optional[str], hours: Optional[float] = None) -> Optional[dict[str, int]]:
    """Return JSON mapping of curated brain regions to 1-100 usage scores.

    Non-clinical, heuristic mapping leveraging image + scene context. Strict JSON output.
    """
    client = _client()
    force = settings.CORTEXCAM_OPENAI_FORCE in {"1", "true", "True"}
    if client is None:
        if force:
            raise RuntimeError("OpenAI client unavailable but CORTEXCAM_OPENAI_FORCE is set")
        return None

    model = settings.CORTEXCAM_OPENAI_MODEL
    try:
        system = (
            "You are a wellness-oriented assistant. You never make clinical claims. "
            "You return strict JSON only, with a single key 'brain_scores_100'."
        )
        ego_dict = scene.egocentric.model_dump()
        env_dict = scene.environment.model_dump()
        is_outdoor = env_dict.get('is_outdoor', False)
        is_indoor = not is_outdoor
        is_first_person = ego_dict.get('is_first_person', True)

        text_context = (
            f"TASK: Score brain region engagement (1-100) for this first-person activity.\n\n"
            f"SCENE: {scene.caption}\n"
            f"ENVIRONMENT: {'Outdoor' if is_outdoor else 'Indoor'}\n"
            f"DURATION: {hours or 1.0} hours\n"
            f"PERSPECTIVE: First-person view\n\n"
            "Score each brain region 1-100 based on how engaged it would be during this activity:\n"
            "• Visual areas (occipital_lobe): Always active when seeing (50-90)\n"
            "• Motor areas (frontal_lobe, cerebellum): High for physical activities (20-90)\n"
            "• Attention networks (DAN, VAN): High for focused tasks (30-80)\n"
            "• Executive areas (frontal_lobe): High for planning/decision making (20-80)\n"
            "• Memory areas (hippocampus): Moderate for most activities (30-70)\n"
            "• Emotional areas (amygdala, insula): Variable based on content (10-70)\n"
            "• Reward areas (nucleus_accumbens): High for enjoyable activities (20-80)\n\n"
            "Be specific to this activity. Different activities should have different patterns.\n"
            "Most regions: 20-50 (moderate), Active regions: 50-80, Highly engaged: 80-100\n\n"
            f"Score these {len(BRAIN_REGIONS_LIST)} regions: {BRAIN_REGIONS_LIST}\n\n"
            "OUTPUT: A single JSON object with the key 'brain_scores_100'. The value should be an object containing the region names as keys and integer scores (1-100) as values."
        )
        user_content: list = [{"type": "text", "text": text_context}]
        if image_b64:
            user_content.append({
                "type": "image_url",
                "image_url": {"url": f"data:image/jpeg;base64,{image_b64}"},
            })
        messages = [
            {"role": "system", "content": system},
            {"role": "user", "content": user_content},
        ]
        response_format = {"type": "json_object"}
        resp = client.chat.completions.create(
            model=model,
            messages=messages,
            temperature=0.2,
            response_format=response_format,
            max_tokens=2048,
        )
        content = resp.choices[0].message.content or "{}"
        logger.info(f"OpenAI brain mapping response for scene '{scene.caption}': {content[:800]}...")
        data = json.loads(content)

        brain_data = data.get("brain_scores_100", {})
        if not brain_data:
             brain_data = data

        out: dict[str, int] = {}
        for key in BRAIN_REGIONS_LIST:
            try:
                v = int(brain_data.get(key, 0))
                v = max(1, min(100, v))
            except (ValueError, TypeError):
                v = 1
            out[key] = v

        return out
    except Exception as e:
        if force:
            raise
        logger.warning("OpenAI brain mapping failed: %s", e)
        return None


def map_all_with_openai(scene: SceneJSON, image_b64: Optional[str], hours: Optional[float] = None) -> Optional[tuple[MappingOutput, dict[str, int]]]:
    """Return both domain mapping and brain-region scores via OpenAI.

    Falls back to separate calls if unified prompt fails.
    """
    client = _client()
    force = settings.CORTEXCAM_OPENAI_FORCE in {"1", "true", "True"}
    if client is None:
        if force:
            raise RuntimeError("OpenAI client unavailable but CORTEXCAM_OPENAI_FORCE is set")
        return None
    model = settings.CORTEXCAM_OPENAI_MODEL
    try:
        system = (
            "You are a wellness-oriented assistant. Return strict JSON only. "
            "No clinical claims."
        )
        obj_lines = []  # objects are empty in BLIP-only; keep for future
        text_context = (
            "TASK:\n"
            "1) activity_tags: 3-6 short tags.\n"
            "2) domain_scores_100: VIS, LAN, SOC, MOT, EXEC, REW as 1-100.\n"
            "3) brain_scores_100: keys exactly as REGION_KEYS; values 1-100.\n\n"
            f"SCENE caption: {scene.caption}\n"
            f"Egocentric: {scene.egocentric.model_dump()}\n"
            f"Environment: {scene.environment.model_dump()}\n"
            f"Objects: {', '.join(obj_lines) if obj_lines else 'none'}\n\n"
            f"REGION_KEYS: {BRAIN_REGIONS_LIST}\n\n"
            "OUTPUT JSON schema strictly as:\n"
            "{\n"
            "  \"activity_tags\": [string,...],\n"
            "  \"domain_scores_100\": {\"VIS\": int, \"LAN\": int, \"SOC\": int, \"MOT\": int, \"EXEC\": int, \"REW\": int},\n"
            "  \"brain_scores_100\": {<REGION_KEYS...>: int}\n"
            "}"
        )
        user_content: list = [{"type": "text", "text": text_context}]
        if image_b64:
            user_content.append({
                "type": "image_url",
                "image_url": {"url": f"data:image/jpeg;base64,{image_b64}"},
            })
        messages = [
            {"role": "system", "content": system},
            {"role": "user", "content": user_content},
        ]
        response_format = {"type": "json_object"}
        resp = client.chat.completions.create(
            model=model,
            messages=messages,
            temperature=0.2,
            response_format=response_format,
            max_tokens=800,
        )
        content = resp.choices[0].message.content or "{}"
        data = json.loads(content)
        # Domain mapping
        tags = data.get("activity_tags", [])
        ds100 = data.get("domain_scores_100", {})
        def norm(key: str) -> float:
            try:
                v = float(ds100.get(key, 0))
                return max(0.0, min(1.0, v / 100.0))
            except Exception:
                return 0.0
        scores = DomainScores(
            VIS=norm("VIS"), LAN=norm("LAN"), SOC=norm("SOC"),
            MOT=norm("MOT"), EXEC=norm("EXEC"), REW=norm("REW"),
        )
        conf = float(data.get("confidence", 0.6))
        rationale = data.get("rationale", "OpenAI mapping")
        mapping = MappingOutput(
            activity_tags=tags or ["unspecified"],
            domain_scores=scores,
            confidence=max(0.0, min(1.0, conf)),
            rationale=rationale,
        )
        # Brain regions
        brain_in = data.get("brain_scores_100", {})
        brain_scores: dict[str, int] = {}
        for key in BRAIN_REGIONS_LIST:
            try:
                v = int(brain_in.get(key, 1))
                v = max(1, min(100, v))
            except Exception:
                v = 1
            brain_scores[key] = v
        return mapping, brain_scores
    except Exception as e:
        if force:
            raise
        logger.warning("OpenAI unified mapping failed: %s", e)
        # Fallback to two calls
        m = map_with_openai(scene)
        b = map_brain_regions_with_openai(scene, image_b64, hours)
        if m and b:
            return m, b
        return None


def aggregate_brain_with_openai(per_image_scores: List[dict[str, int]], hours: Optional[List[float]] = None) -> Optional[tuple[dict[str,int], list[str], str]]:
    """Aggregate per-image brain scores with GPT to produce a daily summary.

    Returns (aggregate_scores_100, underutilized_regions, summary_text).
    """
    client = _client()
    force = settings.CORTEXCAM_OPENAI_FORCE in {"1", "true", "True"}
    if client is None:
        if force:
            raise RuntimeError("OpenAI client unavailable but CORTEXCAM_OPENAI_FORCE is set")
        return None
    model = settings.CORTEXCAM_OPENAI_MODEL
    try:
        system = (
            "You summarize brain-region usage over a day for wellness reflection. "
            "Return strict JSON. No clinical claims."
        )
        text = (
            "Given PER_IMAGE brain_scores_100 (one JSON object per image visit),\n"
            "Optionally we provide HOURS (same length) with hours spent for each image.\n"
            "1) Compute AGGREGATE as hours-weighted mean per region when HOURS provided, else simple mean. Round to integers.\n"
            "2) Return UNDERUTILIZED as a list of up to 5 region keys that are notably low (<30) compared to others.\n"
            "3) Provide a short SUMMARY (1-2 sentences) highlighting patterns.\n\n"
            f"REGION_KEYS: {BRAIN_REGIONS_LIST}\n\n"
            f"PER_IMAGE: {per_image_scores}\n"
            f"HOURS: {hours}\n\n"
            "OUTPUT strictly as JSON: {\n"
            "  \"aggregate_scores_100\": {<REGION_KEYS...>: int},\n"
            "  \"underutilized_regions\": [string,...],\n"
            "  \"summary\": string\n"
            "}"
        )
        messages = [
            {"role": "system", "content": system},
            {"role": "user", "content": text},
        ]
        response_format = {"type": "json_object"}
        resp = client.chat.completions.create(
            model=model,
            messages=messages,
            temperature=0.2,
            response_format=response_format,
            max_tokens=600,
        )
        content = resp.choices[0].message.content or "{}"
        data = json.loads(content)
        agg_in = data.get("aggregate_scores_100", {})
        aggregate: dict[str,int] = {}
        for key in BRAIN_REGIONS_LIST:
            try:
                v = int(agg_in.get(key, 1))
                v = max(1, min(100, v))
            except Exception:
                v = 1
            aggregate[key] = v
        under = [r for r in data.get("underutilized_regions", []) if isinstance(r, str) and r in BRAIN_REGIONS_LIST][:5]
        summary = str(data.get("summary", "Daily aggregation."))
        return aggregate, under, summary
    except Exception as e:
        if force:
            raise
        logger.warning("OpenAI aggregate failed: %s", e)
        return None


