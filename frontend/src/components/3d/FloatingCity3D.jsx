import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, MeshDistortMaterial } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

// Miniature City Skyline
function CitySkyline() {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }
  });

  const buildings = [
    { width: 1, height: 3, depth: 1, x: -3, z: 0, color: '#F59E0B' },
    { width: 0.8, height: 5, depth: 0.8, x: -1, z: -0.5, color: '#64748B' },
    { width: 1.2, height: 4, depth: 1.2, x: 1, z: 0.5, color: '#F59E0B' },
    { width: 0.7, height: 2.5, depth: 0.7, x: 2.5, z: -0.3, color: '#06B6D4' },
    { width: 0.9, height: 3.5, depth: 0.9, x: -2, z: 1, color: '#64748B' },
    { width: 1.1, height: 2, depth: 1.1, x: 0, z: -1, color: '#F59E0B' },
  ];

  return (
    <group ref={groupRef}>
      {buildings.map((building, i) => (
        <Float
          key={i}
          speed={1 + Math.random() * 0.5}
          rotationIntensity={0.2}
          floatIntensity={0.3}
        >
          <mesh
            position={[building.x, building.height / 2, building.z]}
            castShadow
          >
            <boxGeometry args={[building.width, building.height, building.depth]} />
            <meshStandardMaterial
              color={building.color}
              metalness={0.8}
              roughness={0.2}
              emissive={building.color}
              emissiveIntensity={0.3}
            />
          </mesh>

          {/* Window Details */}
          {[...Array(Math.floor(building.height / 0.5))].map((_, j) => (
            <mesh
              key={j}
              position={[
                building.x,
                (j * 0.5) + 0.3,
                building.z + (building.depth / 2) + 0.01
              ]}
            >
              <planeGeometry args={[building.width * 0.8, 0.3]} />
              <meshStandardMaterial
                color="#06B6D4"
                emissive="#06B6D4"
                emissiveIntensity={0.5}
                transparent
                opacity={0.6}
              />
            </mesh>
          ))}
        </Float>
      ))}

      {/* Ground Plate */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial
          color="#1E293B"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Grid Lines on Ground */}
      {[...Array(11)].map((_, i) => (
        <group key={i}>
          <mesh position={[i - 5, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[0.02, 10]} />
            <meshStandardMaterial
              color="#F59E0B"
              transparent
              opacity={0.2}
              emissive="#F59E0B"
              emissiveIntensity={0.3}
            />
          </mesh>
          <mesh position={[0, 0.01, i - 5]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[10, 0.02]} />
            <meshStandardMaterial
              color="#F59E0B"
              transparent
              opacity={0.2}
              emissive="#F59E0B"
              emissiveIntensity={0.3}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// Animated Construction Crane in Scene
function ConstructionElements() {
  const craneRef = useRef();

  useFrame((state) => {
    if (craneRef.current) {
      craneRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  return (
    <group ref={craneRef} position={[4, 3, -2]}>
      {/* Crane Tower */}
      <mesh>
        <cylinderGeometry args={[0.15, 0.15, 3, 8]} />
        <meshStandardMaterial
          color="#F59E0B"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Crane Arm */}
      <mesh position={[1, 1.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.1, 2, 0.1]} />
        <meshStandardMaterial
          color="#64748B"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

export default function FloatingCity3D() {
  return (
    <Canvas
      className="w-full h-full"
      dpr={[1, 2]}
      performance={{ min: 0.5 }}
      shadows
    >
      <PerspectiveCamera makeDefault position={[8, 6, 8]} fov={50} />
      
      {/* Lighting Setup */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        color="#F59E0B"
        castShadow
      />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#06B6D4" />
      <pointLight position={[5, 2, 5]} intensity={0.3} color="#F59E0B" />

      <Suspense fallback={null}>
        <CitySkyline />
        <ConstructionElements />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2.2}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
}
