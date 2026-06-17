import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Text, Float } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Construction Crane Timeline
function ConstructionCrane({ scrollProgress = 0 }) {
  const craneRef = useRef();
  const armRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Rotate crane based on scroll
    if (craneRef.current) {
      craneRef.current.rotation.y = scrollProgress * Math.PI * 2;
    }

    // Animate crane arm
    if (armRef.current) {
      armRef.current.rotation.z = Math.sin(time * 0.5) * 0.2;
    }
  });

  return (
    <group ref={craneRef} position={[0, -2, 0]}>
      {/* Base Platform */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[2, 2.5, 0.5, 8]} />
        <meshStandardMaterial
          color="#1E293B"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Crane Tower */}
      <mesh position={[0, 2.5, 0]}>
        <boxGeometry args={[0.5, 5, 0.5]} />
        <meshStandardMaterial
          color="#F59E0B"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Crane Arm */}
      <group ref={armRef} position={[0, 5, 0]}>
        <mesh position={[3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.3, 6, 0.3]} />
          <meshStandardMaterial
            color="#64748B"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>

        {/* Counterweight */}
        <mesh position={[-2, 0, 0]}>
          <boxGeometry args={[1, 0.8, 0.8]} />
          <meshStandardMaterial
            color="#F59E0B"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Hook */}
        <Float speed={1} floatIntensity={0.5}>
          <mesh position={[5, -2, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 2, 8]} />
            <meshStandardMaterial
              color="#F59E0B"
              metalness={0.9}
              roughness={0.1}
              emissive="#F59E0B"
              emissiveIntensity={0.3}
            />
          </mesh>
        </Float>
      </group>

      {/* Grid Lines (Construction Blueprint Style) */}
      {[...Array(8)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 8) * Math.PI * 2) * 3,
            0,
            Math.sin((i / 8) * Math.PI * 2) * 3
          ]}
          rotation={[0, (i / 8) * Math.PI * 2, 0]}
        >
          <boxGeometry args={[0.05, 0.1, 3]} />
          <meshStandardMaterial
            color="#06B6D4"
            transparent
            opacity={0.3}
            emissive="#06B6D4"
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

// Timeline Milestones as 3D Elements
function TimelineMilestones() {
  const milestones = [
    { year: '2019', position: [-4, 2, 0], color: '#F59E0B' },
    { year: '2020', position: [-2, 3, 1], color: '#06B6D4' },
    { year: '2021', position: [0, 4, -1], color: '#F59E0B' },
    { year: '2022', position: [2, 3, 1], color: '#06B6D4' },
    { year: '2023', position: [4, 2, 0], color: '#F59E0B' },
  ];

  return (
    <group>
      {milestones.map((milestone, i) => (
        <Float key={i} speed={1 + i * 0.2} floatIntensity={0.5}>
          <group position={milestone.position}>
            {/* Milestone Marker */}
            <mesh>
              <sphereGeometry args={[0.3, 16, 16]} />
              <meshStandardMaterial
                color={milestone.color}
                metalness={0.9}
                roughness={0.1}
                emissive={milestone.color}
                emissiveIntensity={0.5}
              />
            </mesh>

            {/* Year Text */}
            <Text
              position={[0, -0.8, 0]}
              fontSize={0.3}
              color="#FFFFFF"
              anchorX="center"
              anchorY="middle"
            >
              {milestone.year}
            </Text>

            {/* Connecting Line */}
            {i < milestones.length - 1 && (
              <mesh
                position={[1, 0, 0]}
                rotation={[0, 0, Math.atan2(
                  milestones[i + 1].position[1] - milestone.position[1],
                  milestones[i + 1].position[0] - milestone.position[0]
                )]}
              >
                <boxGeometry args={[2, 0.05, 0.05]} />
                <meshStandardMaterial
                  color={milestone.color}
                  transparent
                  opacity={0.5}
                />
              </mesh>
            )}
          </group>
        </Float>
      ))}
    </group>
  );
}

export default function ProjectTimeline3D({ scrollProgress }) {
  return (
    <Canvas
      className="w-full h-full"
      dpr={[1, 2]}
      performance={{ min: 0.5 }}
    >
      <PerspectiveCamera makeDefault position={[0, 3, 10]} fov={60} />
      
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#F59E0B" />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#06B6D4" />

      <Suspense fallback={null}>
        <ConstructionCrane scrollProgress={scrollProgress} />
        <TimelineMilestones />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
      />
    </Canvas>
  );
}
