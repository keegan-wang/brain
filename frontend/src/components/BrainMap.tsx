import { useMemo } from 'react';

interface BrainMapProps {
  scores: Record<string, number>;
}

// Brain region mapping to actual anatomical locations on the SVG
// These coordinates are mapped to the real brain structure from your SVG
const BRAIN_REGION_OVERLAYS: Record<string, { 
  name: string; 
  path: string;
  center: [number, number];
}> = {
  // Major lobes - mapped to actual anatomical positions on the brain SVG
  frontal_lobe: {
    name: 'Frontal Lobe',
    // Front portion of the brain - anterior region
    path: 'M 150 250 Q 200 200 300 220 Q 400 240 480 280 Q 520 320 510 380 Q 500 440 460 480 Q 420 520 360 540 Q 300 560 240 550 Q 180 540 140 500 Q 100 460 110 420 Q 120 380 150 320 Q 135 285 150 250 Z',
    center: [350, 390]
  },
  
  parietal_lobe: {
    name: 'Parietal Lobe',
    // Top-back portion of the brain
    path: 'M 480 280 Q 580 260 680 280 Q 780 300 820 360 Q 860 420 850 480 Q 840 540 800 580 Q 760 620 700 630 Q 640 640 580 630 Q 520 620 500 580 Q 480 540 490 500 Q 500 460 520 420 Q 500 350 480 280 Z',
    center: [670, 455]
  },
  
  temporal_lobe: {
    name: 'Temporal Lobe',
    // Side portions - lateral areas
    path: 'M 120 400 Q 160 380 200 400 Q 240 420 260 460 Q 280 500 270 540 Q 260 580 240 620 Q 220 660 180 680 Q 140 700 100 690 Q 60 680 40 640 Q 20 600 30 560 Q 40 520 60 480 Q 90 440 120 400 Z',
    center: [150, 540]
  },
  
  occipital_lobe: {
    name: 'Occipital Lobe',
    // Back portion of the brain - posterior region
    path: 'M 820 360 Q 880 340 940 360 Q 1000 380 1020 420 Q 1040 460 1030 500 Q 1020 540 1000 580 Q 980 620 940 640 Q 900 660 860 650 Q 820 640 800 600 Q 780 560 790 520 Q 800 480 820 440 Q 820 400 820 360 Z',
    center: [900, 500]
  },
  
  // Subcortical structures - deep inside the brain
  insula: {
    name: 'Insula',
    // Hidden deep in the lateral sulcus
    path: 'M 380 420 Q 410 410 430 430 Q 450 450 445 470 Q 440 490 430 500 Q 420 510 400 510 Q 380 510 370 500 Q 360 490 365 470 Q 370 450 380 430 Q 375 425 380 420 Z',
    center: [407, 465]
  },
  
  thalamus: {
    name: 'Thalamus',
    // Central deep structure
    path: 'M 420 460 Q 440 450 460 460 Q 480 470 485 490 Q 490 510 480 530 Q 470 550 450 555 Q 430 560 420 555 Q 410 550 405 530 Q 400 510 410 490 Q 415 470 420 460 Z',
    center: [445, 507]
  },
  
  hippocampus: {
    name: 'Hippocampus',
    // Curved structure in temporal lobe
    path: 'M 320 520 Q 360 510 390 530 Q 420 550 425 580 Q 430 610 420 640 Q 410 670 390 680 Q 370 690 340 685 Q 310 680 295 660 Q 280 640 285 620 Q 290 600 305 580 Q 312 550 320 520 Z',
    center: [362, 602]
  },
  
  amygdala: {
    name: 'Amygdala',
    // Small almond-shaped structure in temporal lobe
    path: 'M 280 500 Q 300 490 320 500 Q 340 510 345 530 Q 350 550 340 570 Q 330 590 310 595 Q 290 600 280 595 Q 270 590 265 570 Q 260 550 270 530 Q 275 510 280 500 Z',
    center: [305, 547]
  },
  
  caudate_nucleus: {
    name: 'Caudate Nucleus',
    // C-shaped structure in basal ganglia
    path: 'M 360 380 Q 400 370 430 390 Q 460 410 465 440 Q 470 470 460 500 Q 450 530 430 540 Q 410 550 380 545 Q 350 540 335 520 Q 320 500 325 480 Q 330 460 345 440 Q 352 410 360 380 Z',
    center: [397, 465]
  },
  
  putamen: {
    name: 'Putamen',
    // Part of basal ganglia
    path: 'M 400 440 Q 420 430 440 440 Q 460 450 465 470 Q 470 490 460 510 Q 450 530 440 535 Q 430 540 410 540 Q 390 540 385 530 Q 380 520 385 500 Q 390 480 400 460 Q 395 450 400 440 Z',
    center: [425, 490]
  },
  
  globus_pallidus: {
    name: 'Globus Pallidus',
    // Medial to putamen
    path: 'M 420 470 Q 435 465 445 475 Q 455 485 450 495 Q 445 505 440 510 Q 435 515 425 515 Q 415 515 410 510 Q 405 505 410 495 Q 415 485 420 475 Q 417 472 420 470 Z',
    center: [432, 492]
  },
  
  nucleus_accumbens: {
    name: 'Nucleus Accumbens',
    // Ventral striatum
    path: 'M 380 500 Q 390 495 400 500 Q 410 505 408 515 Q 406 525 400 530 Q 394 535 385 535 Q 376 535 372 530 Q 368 525 372 515 Q 376 505 380 500 Z',
    center: [390, 517]
  },
  
  brainstem: {
    name: 'Brainstem',
    // Central lower structure
    path: 'M 460 620 Q 480 610 500 630 Q 520 650 515 680 Q 510 710 500 740 Q 490 770 470 780 Q 450 790 440 780 Q 430 770 425 740 Q 420 710 430 680 Q 440 650 460 630 Q 450 625 460 620 Z',
    center: [467, 700]
  },
  
  cerebellum: {
    name: 'Cerebellum',
    // Lower back portion - distinctive folded structure
    path: 'M 600 680 Q 680 670 760 690 Q 840 710 860 760 Q 880 810 860 860 Q 840 910 790 930 Q 740 950 690 945 Q 640 940 600 920 Q 560 900 550 860 Q 540 820 560 780 Q 580 740 600 700 Q 600 690 600 680 Z',
    center: [700, 815]
  },
  
  // Networks - represented as distributed areas
  default_mode_network_DMN: {
    name: 'Default Mode Network',
    // Midline structures
    path: 'M 250 300 Q 300 290 350 310 Q 400 330 420 370 Q 440 410 430 450 Q 420 490 390 510 Q 360 530 320 525 Q 280 520 250 500 Q 220 480 225 450 Q 230 420 250 390 Q 240 345 250 300 Z',
    center: [335, 415]
  },
  
  dorsal_attention_network_DAN: {
    name: 'Dorsal Attention Network',
    // Dorsal parietal and frontal areas
    path: 'M 350 220 Q 450 210 550 230 Q 650 250 700 300 Q 750 350 740 400 Q 730 450 690 480 Q 650 510 600 505 Q 550 500 500 485 Q 450 470 420 450 Q 390 430 395 400 Q 400 370 420 340 Q 385 280 350 220 Z',
    center: [545, 365]
  },
  
  ventral_attention_network_VAN: {
    name: 'Ventral Attention Network',
    // Ventral frontal and parietal areas
    path: 'M 480 450 Q 550 440 620 460 Q 690 480 710 520 Q 730 560 720 600 Q 710 640 680 670 Q 650 700 600 705 Q 550 710 500 700 Q 450 690 430 660 Q 410 630 420 600 Q 430 570 460 540 Q 470 495 480 450 Z',
    center: [570, 577]
  },
  
  frontoparietal_control_network_FPCN: {
    name: 'Frontoparietal Control Network',
    // Frontal and parietal control areas
    path: 'M 200 320 Q 280 310 360 330 Q 440 350 480 390 Q 520 430 510 470 Q 500 510 470 540 Q 440 570 400 575 Q 360 580 320 570 Q 280 560 250 540 Q 220 520 215 490 Q 210 460 230 430 Q 215 375 200 320 Z',
    center: [360, 447]
  },
  
  salience_network: {
    name: 'Salience Network',
    // Anterior insula and anterior cingulate
    path: 'M 300 420 Q 340 410 380 430 Q 420 450 430 490 Q 440 530 420 570 Q 400 610 370 625 Q 340 640 310 635 Q 280 630 260 610 Q 240 590 245 570 Q 250 550 270 530 Q 285 475 300 420 Z',
    center: [340, 527]
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
        
        {/* Anatomical region labels */}
        <text x="350" y="320" fontSize="14" fill="#9CA3AF" textAnchor="middle" className="select-none font-medium">
          Frontal
        </text>
        <text x="670" y="385" fontSize="14" fill="#9CA3AF" textAnchor="middle" className="select-none font-medium">
          Parietal
        </text>
        <text x="150" y="480" fontSize="14" fill="#9CA3AF" textAnchor="middle" className="select-none font-medium">
          Temporal
        </text>
        <text x="900" y="440" fontSize="14" fill="#9CA3AF" textAnchor="middle" className="select-none font-medium">
          Occipital
        </text>
        <text x="700" y="750" fontSize="14" fill="#9CA3AF" textAnchor="middle" className="select-none font-medium">
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