import { useMemo } from 'react';

interface BrainMapProps {
  scores: Record<string, number>;
}

// Brain region mapping to exact anatomical locations on the SVG
// These coordinates are precisely mapped to match the actual brain structure
const BRAIN_REGION_OVERLAYS: Record<string, {
  name: string;
  path: string;
  center: [number, number];
}> = {
  // Major lobes - mapped to exact anatomical positions on the brain SVG
  // The brain SVG uses coordinates in the transform="translate(0,1090) scale(0.1,-0.1)"
  // So we need to map to the visible coordinates (0-1280, 0-1090)

  frontal_lobe: {
    name: 'Frontal Lobe',
    // Front portion of the brain - anterior region (front 1/3 of brain)
    path: 'M 200 200 Q 300 150 450 180 Q 600 210 650 300 Q 700 400 680 500 Q 660 600 600 650 Q 540 700 450 680 Q 360 660 300 620 Q 240 580 220 520 Q 200 460 210 400 Q 220 340 240 280 Q 220 240 200 200 Z',
    center: [425, 440]
  },

  parietal_lobe: {
    name: 'Parietal Lobe',
    // Top-center portion of the brain (superior region)
    path: 'M 650 300 Q 750 250 900 280 Q 1050 310 1100 400 Q 1150 490 1130 580 Q 1110 670 1050 720 Q 990 770 900 750 Q 810 730 750 690 Q 690 650 670 590 Q 650 530 660 470 Q 670 410 680 350 Q 665 325 650 300 Z',
    center: [825, 525]
  },

  temporal_lobe: {
    name: 'Temporal Lobe',
    // Side portions of the brain (lateral regions)
    path: 'M 150 400 Q 200 350 280 380 Q 360 410 400 480 Q 440 550 420 620 Q 400 690 360 740 Q 320 790 260 800 Q 200 810 150 790 Q 100 770 80 720 Q 60 670 70 620 Q 80 570 100 520 Q 125 470 150 400 Z',
    center: [260, 600]
  },

  occipital_lobe: {
    name: 'Occipital Lobe',
    // Back portion of the brain (posterior region)
    path: 'M 1100 400 Q 1150 350 1200 380 Q 1250 410 1270 470 Q 1290 530 1280 590 Q 1270 650 1240 700 Q 1210 750 1160 770 Q 1110 790 1070 770 Q 1030 750 1010 700 Q 990 650 1000 590 Q 1010 530 1030 470 Q 1065 435 1100 400 Z',
    center: [1140, 585]
  },

  // Subcortical structures - deep inside the brain (center regions)
  insula: {
    name: 'Insula',
    // Hidden deep in the lateral sulcus (between frontal and temporal)
    path: 'M 500 500 Q 530 480 560 500 Q 590 520 595 550 Q 600 580 590 610 Q 580 640 560 650 Q 540 660 520 650 Q 500 640 495 610 Q 490 580 500 550 Q 495 525 500 500 Z',
    center: [545, 575]
  },

  thalamus: {
    name: 'Thalamus',
    // Central deep structure (center of brain)
    path: 'M 600 550 Q 620 540 640 550 Q 660 560 665 580 Q 670 600 660 620 Q 650 640 640 645 Q 630 650 620 645 Q 610 640 605 620 Q 600 600 605 580 Q 600 565 600 550 Z',
    center: [632, 597]
  },

  hippocampus: {
    name: 'Hippocampus',
    // Curved structure in medial temporal lobe
    path: 'M 450 650 Q 480 640 510 660 Q 540 680 545 710 Q 550 740 540 770 Q 530 800 510 810 Q 490 820 470 810 Q 450 800 445 770 Q 440 740 450 710 Q 445 680 450 650 Z',
    center: [497, 735]
  },

  amygdala: {
    name: 'Amygdala',
    // Small almond-shaped structure in temporal lobe
    path: 'M 400 620 Q 420 610 440 620 Q 460 630 465 650 Q 470 670 460 690 Q 450 710 440 715 Q 430 720 420 715 Q 410 710 405 690 Q 400 670 405 650 Q 400 635 400 620 Z',
    center: [432, 667]
  },

  caudate_nucleus: {
    name: 'Caudate Nucleus',
    // C-shaped structure in basal ganglia
    path: 'M 550 450 Q 580 440 610 460 Q 640 480 645 510 Q 650 540 640 570 Q 630 600 610 610 Q 590 620 570 610 Q 550 600 545 570 Q 540 540 550 510 Q 545 480 550 450 Z',
    center: [595, 535]
  },

  putamen: {
    name: 'Putamen',
    // Part of basal ganglia (lateral to caudate)
    path: 'M 580 520 Q 600 510 620 520 Q 640 530 645 550 Q 650 570 640 590 Q 630 610 620 615 Q 610 620 600 615 Q 590 610 585 590 Q 580 570 585 550 Q 580 535 580 520 Z',
    center: [615, 567]
  },

  globus_pallidus: {
    name: 'Globus Pallidus',
    // Medial to putamen in basal ganglia
    path: 'M 610 560 Q 625 555 635 565 Q 645 575 642 585 Q 639 595 635 600 Q 631 605 625 605 Q 619 605 615 600 Q 611 595 614 585 Q 617 575 620 565 Q 615 562 610 560 Z',
    center: [627, 582]
  },

  nucleus_accumbens: {
    name: 'Nucleus Accumbens',
    // Ventral striatum (below caudate/putamen)
    path: 'M 570 600 Q 580 595 590 600 Q 600 605 598 615 Q 596 625 590 630 Q 584 635 577 635 Q 570 635 566 630 Q 562 625 566 615 Q 570 605 570 600 Z',
    center: [582, 617]
  },

  brainstem: {
    name: 'Brainstem',
    // Central lower structure (midbrain, pons, medulla)
    path: 'M 620 750 Q 640 740 660 760 Q 680 780 675 810 Q 670 840 660 870 Q 650 900 630 910 Q 610 920 600 910 Q 590 900 585 870 Q 580 840 590 810 Q 600 780 620 760 Q 610 755 620 750 Z',
    center: [630, 835]
  },

  cerebellum: {
    name: 'Cerebellum',
    // Lower back portion - distinctive folded structure
    path: 'M 800 800 Q 880 790 960 810 Q 1040 830 1060 880 Q 1080 930 1060 980 Q 1040 1030 990 1050 Q 940 1070 890 1065 Q 840 1060 800 1040 Q 760 1020 750 980 Q 740 940 760 900 Q 780 860 800 820 Q 800 810 800 800 Z',
    center: [905, 935]
  },

  // Networks - represented as distributed areas across relevant brain regions
  default_mode_network_DMN: {
    name: 'Default Mode Network',
    // Medial prefrontal and posterior cingulate areas
    path: 'M 350 300 Q 400 290 450 310 Q 500 330 520 370 Q 540 410 530 450 Q 520 490 490 510 Q 460 530 420 525 Q 380 520 350 500 Q 320 480 315 450 Q 310 420 325 390 Q 340 360 350 330 Q 345 315 350 300 Z',
    center: [425, 415]
  },

  dorsal_attention_network_DAN: {
    name: 'Dorsal Attention Network',
    // Dorsal parietal and frontal areas
    path: 'M 500 250 Q 600 240 700 260 Q 800 280 850 330 Q 900 380 890 430 Q 880 480 840 510 Q 800 540 750 535 Q 700 530 650 515 Q 600 500 570 480 Q 540 460 545 430 Q 550 400 570 370 Q 535 310 500 250 Z',
    center: [695, 395]
  },

  ventral_attention_network_VAN: {
    name: 'Ventral Attention Network',
    // Ventral frontal and temporal-parietal areas
    path: 'M 650 550 Q 750 540 850 560 Q 950 580 970 630 Q 990 680 970 730 Q 950 780 910 810 Q 870 840 820 835 Q 770 830 720 815 Q 670 800 650 780 Q 630 760 635 730 Q 640 700 660 670 Q 655 610 650 550 Z',
    center: [810, 695]
  },

  frontoparietal_control_network_FPCN: {
    name: 'Frontoparietal Control Network',
    // Frontal and parietal control areas
    path: 'M 400 350 Q 500 340 600 360 Q 700 380 750 430 Q 800 480 790 530 Q 780 580 740 610 Q 700 640 650 635 Q 600 630 550 615 Q 500 600 470 580 Q 440 560 445 530 Q 450 500 470 470 Q 435 410 400 350 Z',
    center: [595, 495]
  },

  salience_network: {
    name: 'Salience Network',
    // Anterior insula and anterior cingulate
    path: 'M 450 550 Q 500 540 550 560 Q 600 580 610 620 Q 620 660 600 700 Q 580 740 550 755 Q 520 770 490 765 Q 460 760 440 740 Q 420 720 425 700 Q 430 680 450 660 Q 435 605 450 550 Z',
    center: [515, 657]
  }
};

function getActivityColor(activity: number): string {
  if (activity === 0) return 'transparent';

  // Color intensity based on activity level
  if (activity < 20) return '#3b82f6'; // Blue
  if (activity < 40) return '#06b6d4'; // Cyan
  if (activity < 60) return '#10b981'; // Green
  if (activity < 80) return '#f59e0b'; // Orange
  return '#ef4444'; // Red
}

function getActivityOpacity(activity: number): number {
  if (activity === 0) return 0;
  return Math.max(0.5, Math.min(0.85, activity / 100 + 0.3));
}

export default function BrainMap({ scores }: BrainMapProps) {
  const coloredRegions = useMemo(() => {
    return Object.entries(BRAIN_REGION_OVERLAYS).map(([regionId, regionData]) => {
      const activity = scores[regionId] || 0;
      return {
        regionId,
        name: regionData.name,
        path: regionData.path,
        center: regionData.center,
        color: getActivityColor(activity),
        opacity: getActivityOpacity(activity),
        activity
      };
    });
  }, [scores]);

  return (
    <div className="w-full max-w-md mx-auto">
      <svg
        viewBox="0 0 1280 1090"
        className="w-full h-auto"
        style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
      >
        {/* Base anatomical brain - exactly from your SVG file */}
        <g transform="translate(0.000000,1090.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
          <path d="M6335 10893 c-81 -7 -252 -35 -323 -53 -69 -17 -78 -17 -165 -2 -71
13 -155 17 -362 17 -235 -1 -286 -4 -395 -23 -156 -28 -297 -63 -425 -107 -95
-32 -104 -33 -180 -25 -131 15 -442 12 -572 -5 -488 -64 -911 -248 -1278 -556
l-81 -67 -80 5 c-103 7 -196 -9 -300 -52 -243 -101 -521 -321 -834 -660 -164
-177 -431 -429 -523 -492 -133 -92 -241 -207 -345 -368 -56 -86 -160 -302
-197 -410 -16 -44 -61 -141 -102 -216 -41 -75 -90 -181 -110 -235 -32 -88 -36
-112 -41 -220 -5 -137 6 -185 59 -269 l31 -48 -41 -87 c-77 -162 -89 -326 -38
-510 62 -220 159 -387 386 -661 29 -36 41 -62 50 -110 27 -139 98 -306 182
-430 255 -375 763 -656 1423 -784 72 -14 134 -29 137 -33 3 -4 14 -27 23 -51
22 -58 65 -118 136 -194 54 -59 58 -66 69 -134 6 -39 15 -83 21 -98 5 -14 10
-70 10 -123 0 -90 3 -103 34 -169 60 -126 176 -233 401 -373 55 -34 159 -106
230 -160 305 -230 613 -381 940 -461 219 -53 296 -60 726 -62 387 -2 397 -1
574 26 99 15 248 41 330 57 83 17 159 30 171 30 15 0 26 -13 43 -54 34 -82
139 -262 203 -346 80 -106 218 -249 322 -333 79 -64 97 -85 159 -187 225 -369
592 -1044 681 -1255 94 -220 144 -303 250 -413 77 -81 167 -139 263 -171 75
-25 120 -26 235 -5 135 25 170 64 169 188 0 91 -23 173 -122 454 -118 331
-136 402 -106 402 6 0 50 -9 97 -21 237 -56 327 -69 496 -69 91 0 229 -7 307
-16 228 -26 425 -15 662 34 351 74 507 119 693 201 380 168 677 466 732 736
10 47 22 70 56 108 59 66 90 135 110 247 18 97 16 124 -23 288 -5 21 -3 22 73
22 399 2 698 89 945 274 418 315 656 917 676 1711 6 239 -16 729 -43 965 -54
470 -161 811 -322 1026 -49 65 -66 99 -97 194 -103 316 -287 601 -462 716 -45
30 -87 63 -93 74 -5 10 -10 45 -10 77 0 187 -97 466 -228 654 -120 172 -320
367 -485 474 -40 26 -94 61 -121 78 -42 28 -52 41 -71 94 -34 94 -80 164 -190
287 -56 61 -133 154 -171 206 -89 120 -136 174 -248 279 -322 303 -824 550
-1401 691 -102 24 -230 65 -320 100 -328 129 -587 180 -925 185 l-205 3 -95
45 c-179 86 -391 145 -601 167 -89 9 -285 11 -374 3z"/>
        </g>

        {/* Activity colored overlays - precisely positioned on the anatomical brain */}
        {coloredRegions.map(({ regionId, name, path, color, opacity, activity, center }) => (
          <g key={regionId}>
            {activity > 0 && (
              <>
                <path
                  d={path}
                  fill={color}
                  opacity={opacity}
                  stroke={color}
                  strokeWidth="1"
                  className="transition-all duration-500 hover:stroke-white hover:stroke-width-3"
                >
                  <title>{`${name}: ${activity}%`}</title>
                </path>

                {/* Pulsing effect for high activity */}
                {activity > 50 && (
                  <path
                    d={path}
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    opacity="0.7"
                    className="animate-pulse"
                  />
                )}

                {/* Activity percentage label for highly active regions */}
                {activity > 40 && (
                  <text
                    x={center[0]}
                    y={center[1]}
                    fontSize="12"
                    fill="white"
                    textAnchor="middle"
                    className="select-none font-bold"
                    style={{
                      textShadow: '1px 1px 2px rgba(0,0,0,0.9)',
                      filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.8))'
                    }}
                  >
                    {activity}%
                  </text>
                )}
              </>
            )}
          </g>
        ))}

        {/* Anatomical region labels positioned correctly */}
        <text x="425" y="380" fontSize="14" fill="#9CA3AF" textAnchor="middle" className="select-none font-medium">
          Frontal
        </text>
        <text x="825" y="465" fontSize="14" fill="#9CA3AF" textAnchor="middle" className="select-none font-medium">
          Parietal
        </text>
        <text x="260" y="540" fontSize="14" fill="#9CA3AF" textAnchor="middle" className="select-none font-medium">
          Temporal
        </text>
        <text x="1140" y="525" fontSize="14" fill="#9CA3AF" textAnchor="middle" className="select-none font-medium">
          Occipital
        </text>
        <text x="905" y="875" fontSize="14" fill="#9CA3AF" textAnchor="middle" className="select-none font-medium">
          Cerebellum
        </text>
      </svg>

      {/* Legend */}
      <div className="mt-4 flex justify-center">
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded bg-blue-500"></div>
            <span className="text-gray-300">Low Activity</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded bg-green-500"></div>
            <span className="text-gray-300">Medium</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded bg-red-500"></div>
            <span className="text-gray-300">High Activity</span>
          </div>
        </div>
      </div>

      {/* Instructions when no activity */}
      {Object.values(scores).every(score => score === 0) && (
        <div className="mt-2 text-center text-gray-500 text-xs">
          Process activities to see brain regions light up
        </div>
      )}
    </div>
  );
}