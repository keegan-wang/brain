import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface BrainRegion {
  id: string;
  name: string;
  position: [number, number, number];
  size: [number, number, number];
  activity: number; // 0-100
  color: string;
  mesh?: THREE.Mesh;
  shape: 'ellipsoid' | 'curved' | 'elongated' | 'small' | 'network';
}

interface Brain3DProps {
  brainData: Record<string, number>;
  className?: string;
}

// Anatomically-positioned brain regions with realistic shapes
const BRAIN_REGIONS_3D: Omit<BrainRegion, 'activity' | 'color' | 'mesh'>[] = [
  // Cerebral Cortex - Main brain sections
  { id: 'frontal_lobe', name: 'Frontal Lobe', position: [0, 0.4, 0.8], size: [1.4, 0.8, 1.2], shape: 'ellipsoid' },
  { id: 'parietal_lobe', name: 'Parietal Lobe', position: [0, 0.6, -0.2], size: [1.2, 0.6, 0.8], shape: 'ellipsoid' },
  { id: 'temporal_lobe', name: 'Temporal Lobe', position: [0.9, 0, 0.3], size: [0.7, 0.5, 0.9], shape: 'curved' },
  { id: 'occipital_lobe', name: 'Occipital Lobe', position: [0, 0.3, -1.1], size: [0.8, 0.5, 0.6], shape: 'ellipsoid' },
  { id: 'insula', name: 'Insula', position: [0.6, 0.1, 0.4], size: [0.3, 0.3, 0.4], shape: 'small' },

  // Subcortical Structures - Deep brain regions
  { id: 'thalamus', name: 'Thalamus', position: [0, -0.1, 0.1], size: [0.3, 0.25, 0.4], shape: 'ellipsoid' },
  { id: 'hippocampus', name: 'Hippocampus', position: [0.5, -0.3, 0.2], size: [0.15, 0.1, 0.6], shape: 'elongated' },
  { id: 'amygdala', name: 'Amygdala', position: [0.4, -0.2, 0.5], size: [0.12, 0.1, 0.15], shape: 'small' },
  { id: 'caudate_nucleus', name: 'Caudate Nucleus', position: [0.3, 0.1, 0.2], size: [0.2, 0.15, 0.3], shape: 'elongated' },
  { id: 'putamen', name: 'Putamen', position: [0.4, 0, 0.1], size: [0.15, 0.2, 0.2], shape: 'small' },
  { id: 'globus_pallidus', name: 'Globus Pallidus', position: [0.25, -0.05, 0.05], size: [0.1, 0.12, 0.15], shape: 'small' },
  { id: 'nucleus_accumbens', name: 'Nucleus Accumbens', position: [0.15, -0.15, 0.3], size: [0.08, 0.08, 0.1], shape: 'small' },

  // Brainstem & Cerebellum
  { id: 'brainstem', name: 'Brainstem', position: [0, -0.8, -0.1], size: [0.2, 0.6, 0.3], shape: 'elongated' },
  { id: 'cerebellum', name: 'Cerebellum', position: [0, -0.9, -0.7], size: [0.8, 0.4, 0.6], shape: 'curved' },

  // Networks (represented as distributed glowing areas)
  { id: 'default_mode_network_DMN', name: 'Default Mode Network', position: [0, 0.2, 0.4], size: [0.3, 0.2, 0.3], shape: 'network' },
  { id: 'dorsal_attention_network_DAN', name: 'Dorsal Attention Network', position: [0, 0.7, 0.2], size: [0.4, 0.2, 0.4], shape: 'network' },
  { id: 'ventral_attention_network_VAN', name: 'Ventral Attention Network', position: [0.6, 0.4, 0.5], size: [0.3, 0.2, 0.3], shape: 'network' },
  { id: 'frontoparietal_control_network_FPCN', name: 'Frontoparietal Control Network', position: [0.4, 0.6, 0.1], size: [0.3, 0.2, 0.3], shape: 'network' },
  { id: 'salience_network', name: 'Salience Network', position: [0.3, 0.3, 0.4], size: [0.2, 0.2, 0.2], shape: 'network' }
];

function createBrainGeometry(region: Omit<BrainRegion, 'activity' | 'color' | 'mesh'>): THREE.BufferGeometry {
  const [width, height, depth] = region.size;

  switch (region.shape) {
    case 'ellipsoid':
      // Create more organic, brain-like ellipsoid
      const ellipsoidGeometry = new THREE.SphereGeometry(1, 16, 12);
      ellipsoidGeometry.scale(width, height, depth);
      return ellipsoidGeometry;

    case 'curved':
      // Create curved, brain lobe-like shape
      const curvedGeometry = new THREE.SphereGeometry(1, 12, 8);
      curvedGeometry.scale(width, height, depth);
      // Add some asymmetry for more organic look
      const vertices = curvedGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < vertices.length; i += 3) {
        vertices[i] *= (1 + Math.sin(vertices[i + 1] * 2) * 0.1); // X variation
        vertices[i + 2] *= (1 + Math.cos(vertices[i] * 3) * 0.15); // Z variation
      }
      curvedGeometry.attributes.position.needsUpdate = true;
      return curvedGeometry;

    case 'elongated':
      // Create elongated structures like hippocampus
      const elongatedGeometry = new THREE.CapsuleGeometry(width * 0.3, depth, 8, 16);
      elongatedGeometry.rotateZ(Math.PI / 6); // Slight curve
      return elongatedGeometry;

    case 'small':
      // Small, rounded structures
      return new THREE.SphereGeometry(Math.max(width, height, depth) * 0.7, 8, 6);

    case 'network':
      // Distributed network - use particles/points
      const networkGeometry = new THREE.SphereGeometry(1, 8, 6);
      networkGeometry.scale(width, height, depth);
      return networkGeometry;

    default:
      return new THREE.SphereGeometry(1, 8, 6);
  }
}

function createBrainSurface(): THREE.Mesh {
  // Create main brain surface with more realistic shape
  const brainGeometry = new THREE.SphereGeometry(1.8, 32, 24);

  // Deform to make it more brain-like
  const vertices = brainGeometry.attributes.position.array as Float32Array;
  for (let i = 0; i < vertices.length; i += 3) {
    const x = vertices[i];
    const y = vertices[i + 1];
    const z = vertices[i + 2];

    // Create brain-like asymmetry and sulci/gyri
    const distortion =
      Math.sin(x * 4) * 0.1 +
      Math.cos(y * 6) * 0.08 +
      Math.sin(z * 5) * 0.12;

    vertices[i] *= (1 + distortion);
    vertices[i + 1] *= (1 + distortion * 0.8);
    vertices[i + 2] *= (1 + distortion * 1.2);
  }

  brainGeometry.attributes.position.needsUpdate = true;
  brainGeometry.computeVertexNormals();

  const brainMaterial = new THREE.MeshPhongMaterial({
    color: 0xC8B99C, // Lighter brain tissue color
    transparent: true,
    opacity: 0.4, // More visible
    side: THREE.DoubleSide,
    shininess: 10
  });

  return new THREE.Mesh(brainGeometry, brainMaterial);
}

function getActivityColor(activity: number): THREE.Color {
  // Color mapping: low activity = blue, medium = yellow/orange, high = red
  if (activity < 20) return new THREE.Color(0x3b82f6); // Blue
  if (activity < 40) return new THREE.Color(0x06b6d4); // Cyan
  if (activity < 60) return new THREE.Color(0x10b981); // Green
  if (activity < 80) return new THREE.Color(0xf59e0b); // Orange
  return new THREE.Color(0xef4444); // Red
}

export default function Brain3D({ brainData, className = '' }: Brain3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animationRef = useRef<number>();
  const regionsRef = useRef<BrainRegion[]>([]);
  const [tooltip, setTooltip] = useState<{ visible: boolean; x: number; y: number; content: string }>({
    visible: false,
    x: 0,
    y: 0,
    content: ''
  });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000814); // Deep brain scan background
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    camera.position.set(3, 1.5, 3);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(400, 400);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Lighting setup for brain visualization
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 0.7);
    mainLight.position.set(5, 5, 5);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0x4080ff, 0.3);
    fillLight.position.set(-5, 2, -5);
    scene.add(fillLight);

    // Add brain surface
    const brainSurface = createBrainSurface();
    scene.add(brainSurface);

    // Create brain regions with realistic geometry
    const regions: BrainRegion[] = BRAIN_REGIONS_3D.map(regionTemplate => {
      const activity = brainData[regionTemplate.id] || 0;
      const color = getActivityColor(activity);

      const geometry = createBrainGeometry(regionTemplate);

      // Different materials for different region types
      let material: THREE.Material;

      if (regionTemplate.shape === 'network') {
        // Networks get a more ethereal, glowing appearance
        const baseColor = activity === 0 ? new THREE.Color(0x666666) : color.clone().multiplyScalar(1.2);
        material = new THREE.MeshBasicMaterial({
          color: baseColor,
          transparent: true,
          opacity: activity === 0 ? 0.2 : (0.5 + (activity / 100) * 0.3) // Always visible
        });
      } else {
        // Anatomical regions get more solid appearance
        const baseColor = activity === 0 ? new THREE.Color(0x888888) : color;
        material = new THREE.MeshPhongMaterial({
          color: baseColor,
          emissive: activity === 0 ? new THREE.Color(0x000000) : color.clone().multiplyScalar(activity / 100 * 0.2),
          opacity: activity === 0 ? 0.3 : (0.7 + (activity / 100) * 0.2), // Always visible
          transparent: true,
          shininess: 15,
          specular: new THREE.Color(0x222222)
        });
      }

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(...regionTemplate.position);
      mesh.userData = { regionId: regionTemplate.id, regionName: regionTemplate.name, activity };
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);

      return {
        ...regionTemplate,
        activity,
        color: `#${color.getHexString()}`,
        mesh
      };
    });

    regionsRef.current = regions;

    // Mouse controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationY = 0;
    let rotationX = 0;

    const handleMouseDown = (event: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (isDragging) {
        const deltaMove = {
          x: event.clientX - previousMousePosition.x,
          y: event.clientY - previousMousePosition.y
        };

        rotationY += deltaMove.x * 0.01;
        rotationX += deltaMove.y * 0.01;
        rotationX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rotationX));

        const radius = camera.position.length();
        camera.position.x = radius * Math.cos(rotationX) * Math.sin(rotationY);
        camera.position.y = radius * Math.sin(rotationX);
        camera.position.z = radius * Math.cos(rotationX) * Math.cos(rotationY);
        camera.lookAt(0, 0, 0);

        previousMousePosition = { x: event.clientX, y: event.clientY };
      }
    };

    const handleWheel = (event: WheelEvent) => {
      const distance = camera.position.length();
      const newDistance = Math.max(2, Math.min(8, distance + event.deltaY * 0.01));
      camera.position.normalize().multiplyScalar(newDistance);
    };

    // Raycaster for hover effects
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseHover = (event: MouseEvent) => {
      if (isDragging) return;

      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(
        regions.map(r => r.mesh!).filter(mesh => mesh)
      );

      if (intersects.length > 0) {
        const intersected = intersects[0].object;
        const { regionName, activity } = intersected.userData;

        setTooltip({
          visible: true,
          x: event.clientX,
          y: event.clientY,
          content: `${regionName}: ${activity}%`
        });
      } else {
        setTooltip(prev => ({ ...prev, visible: false }));
      }
    };

    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('wheel', handleWheel);
    renderer.domElement.addEventListener('mousemove', handleMouseHover);

    // Animation loop
    const animate = () => {
      // Gentle auto-rotation
      scene.rotation.y += 0.003;

      // Static scaling based on activity (no pulsing)
      regions.forEach(region => {
        if (region.mesh && region.activity > 0) {
          const activityScale = 1 + (region.activity / 100) * 0.15; // Reduced scale effect
          region.mesh.scale.setScalar(activityScale);
        }
      });

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (mountRef.current) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      renderer.domElement.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.domElement.removeEventListener('wheel', handleWheel);
      renderer.domElement.removeEventListener('mousemove', handleMouseHover);
      window.removeEventListener('resize', handleResize);

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, []);

  // Update brain data when it changes
  useEffect(() => {
    if (regionsRef.current.length > 0) {
      regionsRef.current.forEach(region => {
        const activity = brainData[region.id] || 0;
        const color = getActivityColor(activity);

        if (region.mesh && region.mesh.material instanceof THREE.MeshPhongMaterial) {
          region.mesh.material.color = color;
          region.mesh.material.emissive = color.clone().multiplyScalar(activity / 100 * 0.2);
          region.mesh.material.opacity = 0.7 + (activity / 100) * 0.2;
          region.mesh.userData.activity = activity;
        } else if (region.mesh && region.mesh.material instanceof THREE.MeshBasicMaterial) {
          // Network regions
          region.mesh.material.color = color.clone().multiplyScalar(1.2);
          region.mesh.material.opacity = 0.5 + (activity / 100) * 0.3;
          region.mesh.userData.activity = activity;
        }

        region.activity = activity;
      });
    }
  }, [brainData]);

  return (
    <div className={`relative w-full h-96 bg-gray-900 rounded-lg overflow-hidden ${className}`}>
      <div ref={mountRef} className="w-full h-full" />

      {/* Activity Legend */}
      <div className="absolute bottom-4 left-4 bg-gray-800/90 p-3 rounded-lg text-white text-xs">
        <div className="font-semibold mb-2">Brain Activity</div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded bg-blue-500"></div>
            <span>Low</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded bg-green-500"></div>
            <span>Med</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded bg-red-500"></div>
            <span>High</span>
          </div>
        </div>
      </div>

      {/* Controls Info */}
      <div className="absolute top-4 right-4 bg-gray-800/90 p-2 rounded-lg text-white text-xs">
        <div>🖱️ Drag to rotate</div>
        <div>🔍 Scroll to zoom</div>
        <div>🧠 Hover for details</div>
      </div>

      {/* Tooltip */}
      {tooltip.visible && (
        <div
          className="absolute pointer-events-none bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10"
          style={{
            left: tooltip.x + 10,
            top: tooltip.y - 30,
          }}
        >
          {tooltip.content}
        </div>
      )}
    </div>
  );
}