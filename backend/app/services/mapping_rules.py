from __future__ import annotations

from ..schemas import SceneJSON, DomainScores, MappingOutput


def likely_mutual_gaze(scene: SceneJSON) -> bool:
    return sum(1 for o in scene.objects if o.label == "person") >= 2


def has_label(scene: SceneJSON, label: str) -> bool:
    return any(o.label == label for o in scene.objects)


def rules_domain(scene: SceneJSON) -> MappingOutput:
    scores = DomainScores()
    if any(o.label in {"book", "document", "whiteboard", "screen"} for o in scene.objects):
        scores.LAN += 0.4
        scores.EXEC += 0.2
    if scene.egocentric.screen_usage:
        scores.EXEC += 0.2
        scores.VIS += 0.1
    if scene.privacy.faces_count >= 2 and likely_mutual_gaze(scene):
        scores.SOC += 0.5
    if has_label(scene, "steering_wheel") or any(o.label in {"utensil", "tool"} for o in scene.objects):
        scores.MOT += 0.4
    if any("deadline" in t.content.lower() for t in scene.text):
        scores.REW += 0.3
        scores.EXEC += 0.1

    # clamp and confidence heuristic
    for k in scores.model_fields:
        v = getattr(scores, k)
        setattr(scores, k, max(0.0, min(1.0, v)))
    nonzero = sum(1 for v in scores.model_dump().values() if v > 0)
    confidence = 0.4 + 0.1 * nonzero
    tags = []
    if has_label(scene, "laptop"):
        tags.append("computer_work")
    if scores.LAN > 0.3:
        tags.append("reading")
    if scores.SOC > 0.3:
        tags.append("socializing")
    rationale = "Rules-based mapping from detected objects, text, and egocentric hints."
    return MappingOutput(activity_tags=tags or ["unspecified"], domain_scores=scores, confidence=min(confidence, 0.95), rationale=rationale)


