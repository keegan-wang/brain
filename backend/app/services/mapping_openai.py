from __future__ import annotations

import json
import os
from typing import Optional, List

from ..schemas import SceneJSON, MappingOutput, DomainScores
import logging

try:
    from openai import OpenAI  # type: ignore
except Exception:  # pragma: no cover - env without openai
    OpenAI = None  # type: ignore


logger = logging.getLogger("cortexcam.openai")


def _client() -> Optional["OpenAI"]:
    if not os.getenv("OPENAI_API_KEY"):
        return None
    if OpenAI is None:
        return None
    try:
        return OpenAI()
    except Exception:
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


def map_with_openai(scene: SceneJSON) -> Optional[MappingOutput]:
    client = _client()
    force = os.getenv("CORTEXCAM_OPENAI_FORCE", "0") in {"1", "true", "True"}
    if client is None:
        if force:
            raise RuntimeError("OpenAI client unavailable but CORTEXCAM_OPENAI_FORCE is set")
        return None
    model = os.getenv("CORTEXCAM_OPENAI_MODEL", "gpt-4o-mini")
    try:
        messages, response_format = _build_prompt(scene)
        resp = client.chat.completions.create(
            model=model,
            messages=messages,
            temperature=0.2,
            response_format=response_format,  # request JSON output
            max_tokens=400,
        )
        content = resp.choices[0].message.content or "{}"
        data = json.loads(content)
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
        if force:
            raise
        logger.warning("OpenAI mapping failed, falling back to rules: %s", e)
        return None


# Curated list of brain regions and networks for non-clinical scoring (1-100)
BRAIN_REGIONS: list[str] = [
    # Cortex
    "prefrontal_dorsolateral",
    "prefrontal_ventromedial",
    "orbitofrontal_cortex",
    "anterior_cingulate_cortex",
    "posterior_cingulate_cortex",
    "insula",
    "primary_motor_cortex_M1",
    "premotor_cortex",
    "supplementary_motor_area_SMA",
    "primary_somatosensory_S1",
    "posterior_parietal_cortex",
    "superior_temporal_gyrus",
    "medial_temporal_lobe",
    "hippocampus",
    "amygdala",
    "primary_visual_cortex_V1",
    "visual_association_cortex_V2_V5",
    # Subcortex / basal ganglia / thalamus / cerebellum
    "caudate_nucleus",
    "putamen",
    "globus_pallidus",
    "nucleus_accumbens",
    "thalamus",
    "hypothalamus",
    "cerebellum",
    # Networks (high-level)
    "default_mode_network_DMN",
    "dorsal_attention_network_DAN",
    "ventral_attention_network_VAN",
    "frontoparietal_control_network_FPCN",
    "salience_network",
]


def map_brain_regions_with_openai(scene: SceneJSON, image_b64: Optional[str]) -> Optional[dict[str, int]]:
    """Return JSON mapping of curated brain regions to 1-100 usage scores.

    Non-clinical, heuristic mapping leveraging image + scene context. Strict JSON output.
    """
    client = _client()
    force = os.getenv("CORTEXCAM_OPENAI_FORCE", "0") in {"1", "true", "True"}
    if client is None:
        if force:
            raise RuntimeError("OpenAI client unavailable but CORTEXCAM_OPENAI_FORCE is set")
        return None
    model = os.getenv("CORTEXCAM_OPENAI_MODEL", "gpt-4o-mini")
    try:
        system = (
            "You are a wellness-oriented assistant. You never make clinical claims. "
            "You return strict JSON only, no prose."
        )
        text_context = (
            "TASK: Score each brain region (1-100) reflecting likely engagement based on the photo and context.\n"
            "- Do not exceed the 1-100 range.\n"
            "- It is acceptable for many regions to be low.\n"
            "- Use the provided SCENE context (caption, egocentric, environment).\n"
            "- Return an object whose keys exactly match the provided region list.\n\n"
            f"SCENE caption: {scene.caption}\n"
            f"Egocentric: {scene.egocentric.model_dump()}\n"
            f"Environment: {scene.environment.model_dump()}\n\n"
            f"REGION_KEYS: {BRAIN_REGIONS}\n\n"
            "OUTPUT: JSON object mapping region key -> integer (1..100)."
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
        # Normalize to ensure only expected keys with integer 1..100
        out: dict[str, int] = {}
        for key in BRAIN_REGIONS:
            try:
                v = int(data.get(key, 0))
                v = max(1, min(100, v))
            except Exception:
                v = 1
            out[key] = v
        return out
    except Exception as e:
        if force:
            raise
        logger.warning("OpenAI brain mapping failed: %s", e)
        return None


def map_all_with_openai(scene: SceneJSON, image_b64: Optional[str]) -> Optional[tuple[MappingOutput, dict[str, int]]]:
    """Return both domain mapping and brain-region scores via OpenAI.

    Falls back to separate calls if unified prompt fails.
    """
    client = _client()
    force = os.getenv("CORTEXCAM_OPENAI_FORCE", "0") in {"1", "true", "True"}
    if client is None:
        if force:
            raise RuntimeError("OpenAI client unavailable but CORTEXCAM_OPENAI_FORCE is set")
        return None
    model = os.getenv("CORTEXCAM_OPENAI_MODEL", "gpt-4o-mini")
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
            f"REGION_KEYS: {BRAIN_REGIONS}\n\n"
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
        for key in BRAIN_REGIONS:
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
        b = map_brain_regions_with_openai(scene, image_b64)
        if m and b:
            return m, b
        return None


def aggregate_brain_with_openai(per_image_scores: List[dict[str, int]], hours: Optional[List[float]] = None) -> Optional[tuple[dict[str,int], list[str], str]]:
    """Aggregate per-image brain scores with GPT to produce a daily summary.

    Returns (aggregate_scores_100, underutilized_regions, summary_text).
    """
    client = _client()
    force = os.getenv("CORTEXCAM_OPENAI_FORCE", "0") in {"1", "true", "True"}
    if client is None:
        if force:
            raise RuntimeError("OpenAI client unavailable but CORTEXCAM_OPENAI_FORCE is set")
        return None
    model = os.getenv("CORTEXCAM_OPENAI_MODEL", "gpt-4o-mini")
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
            f"REGION_KEYS: {BRAIN_REGIONS}\n\n"
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
        for key in BRAIN_REGIONS:
            try:
                v = int(agg_in.get(key, 1))
                v = max(1, min(100, v))
            except Exception:
                v = 1
            aggregate[key] = v
        under = [r for r in data.get("underutilized_regions", []) if isinstance(r, str) and r in BRAIN_REGIONS][:5]
        summary = str(data.get("summary", "Daily aggregation."))
        return aggregate, under, summary
    except Exception as e:
        if force:
            raise
        logger.warning("OpenAI aggregate failed: %s", e)
        return None


