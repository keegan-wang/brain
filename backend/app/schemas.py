from datetime import datetime, date
from typing import Literal, Optional
from pydantic import BaseModel, Field


class DeviceMeta(BaseModel):
    platform: Literal["ios", "android", "web"]
    cam: Optional[Literal["rear", "front"]] = None
    fov: Optional[float] = None


class PrivacyInfo(BaseModel):
    faces_count: int = 0
    faces_blurred: bool = True
    pii_redacted: bool = True


class ObjectDetection(BaseModel):
    label: str
    open_vocab: Optional[str] = None
    bbox: list[float] = Field(default_factory=list)
    conf: float
    attrs: list[str] = Field(default_factory=list)


class OCRText(BaseModel):
    content: str
    bbox: list[float] = Field(default_factory=list)
    conf: float


class EgocentricHints(BaseModel):
    is_first_person: Optional[bool] = None
    likely_focus: Optional[str] = None
    near_hand_object: Optional[str] = None
    posture_hint: Optional[str] = None
    movement: Optional[str] = None
    screen_usage: Optional[bool] = None


class EnvironmentInfo(BaseModel):
    location_hint: Optional[str] = None
    lighting: Optional[str] = None
    noise_level_hint: Optional[str] = None


class SceneJSON(BaseModel):
    photo_id: str
    ts: datetime
    device: DeviceMeta
    privacy: PrivacyInfo
    caption: str
    objects: list[ObjectDetection] = Field(default_factory=list)
    text: list[OCRText] = Field(default_factory=list)
    egocentric: EgocentricHints = Field(default_factory=EgocentricHints)
    environment: EnvironmentInfo = Field(default_factory=EnvironmentInfo)


class DomainScores(BaseModel):
    VIS: float = 0
    LAN: float = 0
    SOC: float = 0
    MOT: float = 0
    EXEC: float = 0
    REW: float = 0


class MappingOutput(BaseModel):
    activity_tags: list[str]
    domain_scores: DomainScores
    confidence: float
    rationale: str


class IngestPhotoRequest(BaseModel):
    user_id: str
    image_base64: Optional[str] = None
    device_meta: Optional[DeviceMeta] = None
    local_only: bool = False


class IngestPhotoResponse(BaseModel):
    photo_id: str


class AnalyzeSceneRequest(BaseModel):
    photo_id: Optional[str] = None
    image_base64: Optional[str] = None
    image_mime: Optional[str] = None
    device_meta: Optional[DeviceMeta] = None
    user_id: Optional[str] = None


class AnalyzeSceneResponse(BaseModel):
    scene_json: SceneJSON


class MapDomainsRequest(BaseModel):
    scene_json: SceneJSON


class MapDomainsResponse(MappingOutput):
    pass


class MapBrainRequest(BaseModel):
    scene_json: SceneJSON
    image_base64: Optional[str] = None
    image_mime: Optional[str] = None


class MapBrainResponse(BaseModel):
    brain_scores_100: dict[str, int]


class MapAllRequest(BaseModel):
    scene_json: SceneJSON
    image_base64: Optional[str] = None
    image_mime: Optional[str] = None
    hours: Optional[float] = None


class MapAllResponse(BaseModel):
    mapping: MappingOutput
    domain_scores_100: dict[str, int]
    brain_scores_100: dict[str, int]


class AggregateImageItem(BaseModel):
    scene_json: Optional[SceneJSON] = None
    image_base64: Optional[str] = None
    image_mime: Optional[str] = None
    hours: Optional[float] = None


class AggregateBrainRequest(BaseModel):
    items: list[AggregateImageItem]


class AggregateBrainResponse(BaseModel):
    per_image_brain_scores_100: list[dict[str, int]]
    aggregate_scores_100: dict[str, int]
    underutilized_regions: list[str]
    summary: Optional[str] = None


class DailySummaryResponse(BaseModel):
    date: date
    user_id: str
    means: DomainScores
    rew_peak: float
    photos_count: int


class FeedbackRequest(BaseModel):
    scope: Literal["photo", "day"]
    target_id: str
    adjustments: Optional[dict] = None
    note: Optional[str] = None
    thumbs: Optional[int] = Field(None, ge=-1, le=1)


