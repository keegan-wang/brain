### CortexCam — Product Engineering Write-Up (v0.1)

Purpose: Capture periodic, privacy-respecting photos from a user’s day, translate “what’s happening” into structured JSON using a multi-model vision stack, and map those scene descriptors to cognitive domain estimates (e.g., visual–spatial, language, social, motor, executive/attention, reward/stress). Aggregate over the day/week and give coaching on which domains are getting over/under-engaged.

Important note: This product provides wellness/reflective insights, not medical diagnosis. No claims about neurological disorders or clinical brain “activation.”

#### 1) High-Level Architecture
[Mobile App] ──(photo capture + consent)──► [On-Device Preprocess]
      │                                           │
      │(opt-in blur, EXIF strip, face hash)       ▼
      │                                     [Vision Inference Orchestrator]
      │                                     ├─ BLIP captioning
      │                                     ├─ Open-vocab object detection (OVD)
      │                                     ├─ OCR (text-in-scene)
      │                                     └─ Egocentric priors (1P heuristics, phone sensors)
      ▼
[Edge Cache / Secure Uplink] ──► [Inference API] ──► [Activity JSON]
                                               │
                                               ▼
                                     [Cognitive Mapping Service]
                                     ├─ Activity→Domain rules/weights
                                     ├─ LLM semantic mapping (OpenAI)
                                     └─ Personalization (user feedback)
                                               │
                                               ▼
                                       [Aggregation Engine]
                                               │
                                               ▼
                                       [Storage + Analytics]
                                               │
                                               ▼
                                           [UX Apps]
                               (daily ring charts, trends, nudges)

Deployment modes

Privacy-Max (default): All vision runs on-device with small/quantized models; only derived JSON leaves device.

Hybrid: On-device for redaction + cloud for heavier models (user-toggled).

Air-gap mode: Everything on device, no cloud (reduced features).

#### 2) Core Concepts & Ontology
2.1 Cognitive Domains (non-clinical)

VIS: Visual–spatial / perception

LAN: Language / reading / writing

SOC: Social cognition / faces / joint attention

MOT: Motor / action / manipulation

EXEC: Executive function / planning / working memory / focused attention

REW: Reward/novelty/valence; approximate arousal/stress proxy (from cues like time-pressure objects, signage like “deadline”, caffeine, transport rush)

We score each photo with a 6-vector D ∈ ℝ⁶ (0–1 scaled) plus confidence.

2.2 Scene JSON Schema (normalized)
```json
{
  "photo_id": "uuid",
  "ts": "2025-09-12T13:04:20Z",
  "device": { "platform": "ios", "cam": "rear", "fov": 78 },
  "privacy": { "faces_count": 2, "faces_blurred": true, "pii_redacted": true },
  "caption": "Two students discussing slides on a laptop in a library study room.",
  "objects": [
    { "label": "laptop", "open_vocab": "MacBook", "bbox": [x,y,w,h], "conf": 0.92 },
    { "label": "person", "attrs": ["speaking"], "bbox": [...], "conf": 0.88 },
    { "label": "paper", "attrs": ["handwritten notes"], "bbox": [...], "conf": 0.74 }
  ],
  "text": [
    { "content": "Algorithm Design - Greedy vs DP", "bbox": [...], "conf": 0.86 }
  ],
  "egocentric": {
    "is_first_person": true,
    "likely_focus": "laptop_screen",
    "near_hand_object": "pen",
    "posture_hint": "seated",
    "movement": "low",
    "screen_usage": true
  },
  "environment": {
    "location_hint": "library",
    "lighting": "indoor",
    "noise_level_hint": "quiet"
  }
}
```

#### 3) Vision Stack (Image→JSON)
3.1 Captioning

Model: BLIP-2 / BLIP (ViT-g or ViT-L) cloud; Mobile: BLIP-tiny or Llava-Lite (quantized).

Output: 1-2 sentences, plus noun-phrase expansions for downstream mapping.

3.2 Open-Vocab Detection (OVD)

Model: Grounding-DINO or OWL-ViT with CLIP text prompts.

Flow:

Seed prompts from caption nouns + curated taxonomy (“laptop, whiteboard, textbook, coffee, keyboard, steering wheel, etc.”).

Detect objects; capture open-vocab label and coarse attributes (reading, typing, walking).

3.3 Text in Scene (OCR)

Model: PaddleOCR or tesseract-lstm; on-device small build.

Extractions: titles, document headers, signage (“Emergency Exit”), time/goal words (“deadline”, “midterm”, “due”).

3.4 Egocentric Priors

Heuristics using EXIF & sensors:

Focal distance / central ROI ⇒ “user’s focus”.

Gyro/accel movement ⇒ gait vs seated.

Hand-proximal items (pen/utensils/steering wheel/phone).

Screen-on reflection detection (simple specular cues + detected UI rectangles).

Outputs become binary/ordinal hints in JSON.

3.5 Privacy Filter (runs before uplink)

Face detection (RetinaFace/BlazeFace), blur by default.

Text redaction for potential PII (emails, phone #s, student IDs).

Strip EXIF GPS unless explicitly enabled.

On-device hashing of faces to enable “same person” recognition locally without uploading embeddings.

#### 4) Mapping JSON → Cognitive Domains
4.1 Strategy

Symbolic rules (transparent baselines):

Reading dense text → +LAN

Multiple faces, mutual gaze → +SOC

Hand on steering wheel / utensils / tools → +MOT

Single screen with code/diagrams / lists → +EXEC +VIS

Coffee + time words (“deadline”) + commuting hub → +REW (arousal proxy)

LLM semantic mapping (OpenAI or equivalent):

Convert caption + list of objects + OCR + priors into activity descriptors (e.g., “pair programming,” “studying algorithms,” “eating with friends,” “driving”).

Use a fixed rubric prompt to output (activity_tags, domain_weights) with calibrated 0–1 scores and rationales.

Learned layer (optional, v0.2):

Train a small regression head W ∈ ℝ^(features×6) on weak labels from user feedback to adjust domain weights per user.

4.2 OpenAI Mapping Prompt (sketch)
SYSTEM: You are a cognitive-domain tagger for wellness insights.
USER:
SCENE:
- Caption: "<...>"
- Objects (label:conf:attrs): "<...>"
- OCR snippets: "<...>"
- Egocentric: "<...>"
TASK:
1) List 3-6 activity_tags (short).
2) Return domain_scores VIS, LAN, SOC, MOT, EXEC, REW in [0,1] (sum unconstrained), with confidence.
3) Provide 1-2 sentence rationale.

OUTPUT JSON:
```json
{
 "activity_tags":[...],
 "domain_scores":{"VIS":0.62,"LAN":0.78,"SOC":0.40,"MOT":0.10,"EXEC":0.71,"REW":0.33},
 "confidence":0.72,
 "rationale":"Reading slides and discussing problems; focused computer work."
}
```

Fallback (no cloud): On-device rules + embedding similarity (MiniLM/Instructor) that aligns activity_tags to a curated domain-mapping table.

#### 5) Aggregation & Insights
5.1 Temporal Aggregation

Per-photo D → minute bin using photo timestamp; interpolate between captures using activity persistence heuristics (decay half-life configurable).

Daily summary: average and time-weighted domain scores; variance and peaks.

Weekly trends: moving averages; “streaks”.

5.2 Coaching/Nudges (non-clinical)

If LAN»SOC consistently: suggest “schedule a social break” or “call a friend during a walk”.

If EXEC high with REW high late night: suggest recovery planning next morning.

If MOT low all week: recommend short walk prompts aligned to user calendar gaps (local only).

#### 6) Data Model
6.1 Tables

users

id (uuid), created_at, consent_flags (jsonb), privacy_mode, on_device_only (bool)

photos (if stored; otherwise ephemeral)

id, user_id, ts, hash, blob_ref (nullable), redacted (bool)

scenes

photo_id, scene_json (jsonb), version, vision_conf (float)

domain_scores

photo_id, VIS, LAN, SOC, MOT, EXEC, REW, confidence

daily_summaries

user_id, date, VIS_mean, …, REW_peak, photos_count

feedback

photo_id or date, adjustments (jsonb), thumbs_up/down, notes

model_versions

vision_stack, mapping_prompt_id, weights_checksum

#### 7) API Surfaces (internal)

POST /ingest/photo

Body: byte stream (optional) or local-only flag + precomputed features.

Returns: photo_id.

POST /analyze/scene

Body: { photo_id | image_base64, device_meta }

Returns: scene_json.

POST /map/domains

Body: { scene_json }

Returns: { domain_scores, activity_tags, confidence }.

GET /summary/daily?date=YYYY-MM-DD

Returns: daily aggregates + explanations.

POST /feedback

Body: { scope: "photo|day", target_id, adjustments, note }.

#### 8) Mobile App (iOS/Android)

Capture cadence: configurable (default every 20–45 min during waking hours) with context gating (avoid sensitive contexts by heuristics and user schedule).

Permissions UX: camera, motion, notifications. Education screens on privacy.

Battery budget: target <3–5%/day. Use WorkManager/BackgroundTasks, batch uploads on Wi-Fi + power.

On-device inference: CoreML/NNAPI delegates for small BLIP & OCR; quantized 8-bit models.

Privacy controls:

“Blur all faces”, “Blur screens”, “No storage—derive only”, “Air-gap mode”.

Quick-disable tile, and retroactive delete for last N captures.

#### 9) Security & Privacy

Default no raw images in cloud. Store only derived JSON unless user opts into “quality mode”.

End-to-end encryption in transit; at rest: per-user keys / hardware-backed keystore on device.

Data retention: photos (if enabled) 24h rolling; derived JSON 90d by default; user controls.

Sensitive contexts filter: bathrooms, hospitals, classrooms—blocked by on-device classifier; user override only with re-consent.

3rd-party LLM calls: send derived text only; never raw images unless user enables.

Compliance: Not a medical device; avoid clinical language. Document DPIA/TRA.

#### 10) Quality, Evaluation, and Metrics
10.1 Vision QA

Caption quality: BERTScore vs human references on curated daily-life set.

OVD mAP@0.5 on taxonomy subset.

OCR WER on natural scenes.

10.2 Mapping QA

Human raters assign domain distributions for 1k scenes; compute MAE per domain.

User agreement rate with thumbs up/down; drift monitoring.

10.3 System Metrics

Median end-to-end latency (device→insight): target < 3s (hybrid) / < 500ms (on-device only).

Battery usage per hour of active window.

Crash-free sessions, memory footprint.

#### 11) Personalization Loop

User sees daily wheel. Can relabel activity (“this was social lunch, not study”).

Feedback fine-tunes a small linear head on device (per-user W_user).

Periodic secure-aggregation of gradients (optional) for population model improvements (federated averaging with DP noise).

#### 12) Failure Modes & Mitigations

Privacy breach risk: Default blocks, redactions, and local-only mode.

Hallucinated mapping: Keep rules baseline; show rationale; allow edits.

Domain overconfidence: Calibrate with temperature scaling; show bands not single numbers.

Bias: Audit diverse daily-life datasets; disallow inferences about sensitive attributes.

Low light / motion blur: fallback to sensors + last-known context; flag low confidence.

#### 13) Implementation Plan (MVP → v0.2)

Sprint 1–2 (MVP)

On-device capture + privacy filter + derived JSON pipeline.

Cloud BLIP-2 (caption), OWL-VI T (OVD), PaddleOCR.

Rules-based mapping + OpenAI mapping (toggle).

Daily wheel UI and simple trend cards.

Feedback UI (thumbs + note).

Sprint 3–4

Egocentric priors module (sensors + focus ROI).

Personalization linear head.

Battery + latency optimization; job scheduling.

Federated feedback (behind flag).

Sprint 5+ (v0.2)

On-device quantized caption & OVD for full offline.

Activity persistence model (HMM-lite) for interpolation.

Social features (anonymous comparative norms; opt-in).

#### 14) Pseudocode & Contracts
14.1 Orchestrator (Python-like)
```python
def analyze_image(img, sensors, policy):
    img = redact(img, policy)  # faces/screens blur, EXIF strip
    caption = blip_caption(img)                        # str
    nouns = extract_noun_phrases(caption)              # [str]
    prompts = nouns + TAXONOMY_OVD
    objects = ovd_detect(img, prompts)                 # [{label, bbox, conf, attrs}]
    text = ocr_extract(img)                            # [{content, bbox, conf}]
    ego = ego_priors(img, sensors)                     # dict of hints
    scene = build_scene_json(img.id, caption, objects, text, ego)
    mapping = map_to_domains(scene)                    # uses rules + LLM
    return scene, mapping  # mapping.domain_scores, mapping.tags, mapping.conf
```

14.2 Rules Baseline (fragment)
```python
def rules_domain(scene):
    scores = dict(VIS=0, LAN=0, SOC=0, MOT=0, EXEC=0, REW=0)
    if any(o['label'] in {'book','document','whiteboard','screen'} for o in scene['objects']):
        scores['LAN'] += 0.4; scores['EXEC'] += 0.2
    if scene['egocentric'].get('screen_usage'):
        scores['EXEC'] += 0.2; scores['VIS'] += 0.1
    if scene['privacy']['faces_count'] >= 2 and likely_mutual_gaze(scene):
        scores['SOC'] += 0.5
    if has_attr(scene, label='steering_wheel') or near_hand(scene,'utensil','tool'):
        scores['MOT'] += 0.4
    if any('deadline' in t['content'].lower() for t in scene['text']):
        scores['REW'] += 0.3; scores['EXEC'] += 0.1
    return clamp_and_conf(scores)
```

14.3 LLM Mapping (OpenAI) Contract

Input: scene_json (sanitized)

Output: activity_tags[], domain_scores{}, confidence, rationale

Guardrails: system prompt forbids clinical claims; max tokens; JSON only.

#### 15) UX: Key Screens

Capture Settings: cadence, quiet hours, privacy toggles, storage mode.

Daily Wheel: ring chart of domain shares with tooltips + top 3 activities.

Moments Feed: scrollable cards with rationale & edit button.

Trends: weekly comparisons, small goals (“+10 min SOC by Friday”).

Privacy Center: what’s stored, where; one-tap purge.

#### 16) Team & Ownership

Mobile (iOS/Android): capture, on-device inference, privacy filters.

ML/Vision: BLIP/OVD/OCR integration, egocentric priors, quantization.

Cognitive Mapping: rules/rubric, LLM prompt engineering, calibration.

Platform/Backend: inference API, aggregation, storage, auth, analytics.

Safety & Privacy: DPIA, redaction, policy engines, abuse handling.

Design/UX: onboarding, daily wheel, feedback interactions.

Ops/SRE: observability, model/feature flags, rollout.

#### 17) Open Questions / Next Decisions

On-device model choices: BLIP-tiny vs LLaVA-light, and acceptable accuracy trade-off.

Cadence vs battery: dynamic cadence based on movement/context?

Personalization data policy: federated learning vs local only by default.

Face handling: default blur always on; should we allow opt-out for strictly private use?

Ground-truth program: how do we collect consensual labeled data for calibration without images leaving device?

#### 18) Risks & Mitigation Summary

Ethical/Privacy: Strict defaults, local processing, PII redaction, sensitive-context blocking.

Misinterpretation: Show rationales, confidence bands, editable labels.

Model Drift: Version pinning, offline eval suite, feature flags/rollbacks.

Regulatory: Avoid medical framing; consumer wellness positioning with clear disclaimers.

#### TL;DR Build Order

Capture + Redact + Cloud Vision (BLIP/OVD/OCR) → Scene JSON

Rules + OpenAI mapping → Domain scores + tags (+ rationale)

Daily/weekly aggregates + feedback loop + UI

Egocentric priors + personalization; later: fully on-device inference

If you want, I can turn this into a sprint backlog with tickets, acceptance criteria, and a minimal seed dataset spec for internal dogfooding.


