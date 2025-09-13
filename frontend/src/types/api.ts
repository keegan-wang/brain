export interface DeviceMeta {
  platform: 'ios' | 'android' | 'web';
  cam?: 'rear' | 'front';
  fov?: number;
}

export interface SceneJSON {
  photo_id: string;
  ts: string;
  device: DeviceMeta;
  privacy: {
    faces_count: number;
    faces_blurred: boolean;
    pii_redacted: boolean;
  };
  caption: string;
  objects: Array<{
    label: string;
    open_vocab?: string;
    bbox: number[];
    conf: number;
    attrs: string[];
  }>;
  text: Array<{
    content: string;
    bbox: number[];
    conf: number;
  }>;
  egocentric: {
    is_first_person?: boolean;
    likely_focus?: string;
    near_hand_object?: string;
    posture_hint?: string;
    movement?: string;
    screen_usage?: boolean;
  };
  environment: {
    location_hint?: string;
    lighting?: string;
    noise_level_hint?: string;
  };
}

export interface DomainScores {
  VIS: number;
  LAN: number;
  SOC: number;
  MOT: number;
  EXEC: number;
  REW: number;
}

export interface MappingOutput {
  activity_tags: string[];
  domain_scores: DomainScores;
  confidence: number;
  rationale: string;
}

export interface CacheInfo {
  cached: boolean;
  cache_created_at?: string;
  newly_cached?: boolean;
  image_hash?: string;
}

export interface MapAllResponse {
  mapping: MappingOutput;
  domain_scores_100: Record<string, number>;
  brain_scores_100: Record<string, number>;
  cache_info?: CacheInfo;
}

export interface AggregateBrainResponse {
  per_image_brain_scores_100: Array<Record<string, number>>;
  aggregate_scores_100: Record<string, number>;
  underutilized_regions: string[];
  summary?: string;
}

export interface WSMessage {
  type: 'status' | 'result' | 'error';
  stage?: string;
  detail?: any;
  scene_json?: SceneJSON;
  mapping?: MappingOutput;
  brain_scores_100?: Record<string, number>;
  message?: string;
}
