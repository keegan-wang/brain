from __future__ import annotations

from fastapi import APIRouter

from ..schemas import MapAllRequest, MapAllResponse
from ..services.mapping_openai import map_all_with_openai, BRAIN_REGIONS
from ..services.mapping_rules import rules_domain
from ..services.orchestrator import ensure_jpeg_base64


router = APIRouter()


@router.post("", response_model=MapAllResponse)
def map_all(req: MapAllRequest) -> MapAllResponse:
    jpeg_b64 = ensure_jpeg_base64(req.image_base64, req.image_mime)
    result = map_all_with_openai(req.scene_json, jpeg_b64)
    if result is None:
        # Fallback domain mapping; derive simple heuristic brain scores from domains
        mapping = rules_domain(req.scene_json)
        ds100 = {
            "VIS": int(mapping.domain_scores.VIS*100),
            "LAN": int(mapping.domain_scores.LAN*100),
            "SOC": int(mapping.domain_scores.SOC*100),
            "MOT": int(mapping.domain_scores.MOT*100),
            "EXEC": int(mapping.domain_scores.EXEC*100),
            "REW": int(mapping.domain_scores.REW*100),
        }
        brain_scores: dict[str, int] = {}
        for key in BRAIN_REGIONS:
            if "visual" in key or key in {"posterior_parietal_cortex"}:
                brain_scores[key] = max(1, ds100["VIS"])
            elif key in {"prefrontal_dorsolateral","prefrontal_ventromedial","orbitofrontal_cortex","anterior_cingulate_cortex","frontoparietal_control_network_FPCN"}:
                brain_scores[key] = max(1, ds100["EXEC"])
            elif key in {"nucleus_accumbens","amygdala","salience_network"}:
                brain_scores[key] = max(1, ds100["REW"])
            elif key in {"superior_temporal_gyrus","medial_temporal_lobe","hippocampus"}:
                brain_scores[key] = max(1, ds100["LAN"])
            elif key in {"primary_motor_cortex_M1","premotor_cortex","supplementary_motor_area_SMA","cerebellum"}:
                brain_scores[key] = max(1, ds100["MOT"])
            elif key in {"default_mode_network_DMN","posterior_cingulate_cortex"}:
                brain_scores[key] = max(1, int(0.5*ds100["LAN"] + 0.5*ds100["VIS"]))
            elif key in {"dorsal_attention_network_DAN","ventral_attention_network_VAN"}:
                brain_scores[key] = max(1, int(0.7*ds100["VIS"] + 0.3*ds100["EXEC"]))
            else:
                brain_scores[key] = 1
        return MapAllResponse(mapping=mapping, domain_scores_100=ds100, brain_scores_100=brain_scores)
    mapping, brain = result
    return MapAllResponse(mapping=mapping, domain_scores_100={
        "VIS": int(mapping.domain_scores.VIS*100),
        "LAN": int(mapping.domain_scores.LAN*100),
        "SOC": int(mapping.domain_scores.SOC*100),
        "MOT": int(mapping.domain_scores.MOT*100),
        "EXEC": int(mapping.domain_scores.EXEC*100),
        "REW": int(mapping.domain_scores.REW*100),
    }, brain_scores_100=brain)


