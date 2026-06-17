import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Edges, Text, Center } from '@react-three/drei';
import * as THREE from 'three';

export default function About3DScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#F59E0B" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#3B82F6" />
      
      {/* Rotating Timeline Structure */}
      <TimelineRing />
      
      {/* Floating Stats Cubes */}
      <StatsCubes />
      
      {/* Achievement Medals */}
      <AchievementDisplay />
    </>
  );
}

function TimelineRing() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Ring */}
      <mesh>
        <torusGeometry args={[2, 0.08, 16, 100]} />
        <meshStandardMaterial
          color="#1E293B"
          metalness={0.9}
          roughness={0.1}
          emissive="#F59E0B"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Timeline Markers */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const x = Math.cos(angle) * 2;
        const z = Math.sin(angle) * 2;
        
        return (
          <Float key={i} speed={1.5} floatIntensity={0.2}>
            <mesh position={[x, 0, z]}>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshStandardMaterial
                color="#F59E0B"
                emissive="#F59E0B"
                emissiveIntensity={0.5}
                metalness={0.8}
              />
            </mesh>
          </Float>
        );
      })}

      {/* Connecting Lines */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const nextAngle = ((i + 1) / 12) * Math.PI * 2;
        const x1 = Math.cos(angle) * 2;
        const z1 = Math.sin(angle) * 2;
        const x2 = Math.cos(nextAngle) * 2;
        const z2 = Math.sin(nextAngle) * 2;
        
        const points = [
          new THREE.Vector3(x1, 0, z1),
          new THREE.Vector3(x2, 0, z2)
        ];
        
        return (
          <line key={`line-${i}`}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([x1, 0, z1, x2, 0, z2])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#DAA520" transparent opacity={0.4} />
          </line>
        );
      })}
    </group>
  );
}

function StatsCubes() {
  const cubes = [
    { pos: [-2.5, 1, 0], label: '50K+', color: '#F59E0B' },
    { pos: [0, 1.5, 0], label: '15Y', color: '#3B82F6' },
    { pos: [2.5, 0.8, 0], label: '98%', color: '#10B981' },
  ];

  return (
    <group>
      {cubes.map((cube, i) => (
        <StatCube key={i} {...cube} index={i} />
      ))}
    </group>
  );
}

function StatCube({ pos, label, color, index }) {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime + index) * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
      ref.current.position.y = pos[1] + Math.sin(state.clock.elapsedTime * 2 + index) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={ref} position={pos}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.8}
          metalness={0.9}
          roughness={0.1}
          emissive={color}
          emissiveIntensity={0.3}
        />
        <Edges color={color} linewidth={2} />
      </mesh>
    </Float>
  );
}

function AchievementDisplay() {
  const medals = [
    { pos: [-1.5, -1, 1], size: 0.3 },
    { pos: [0, -0.8, 1.2], size: 0.4 },
    { pos: [1.5, -1, 1], size: 0.3 },
  ];

  return (
    <group>
      {medals.map((medal, i) => (
        <Medal key={i} {...medal} index={i} />
      ))}
    </group>
  );
}

function Medal({ pos, size, index }) {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime + index * 2;
    }
  });

  return (
    <Float speed={1.5} floatIntensity={0.3}>
      <mesh ref={ref} position={pos}>
        <cylinderGeometry args={[size, size, 0.1, 32]} />
        <meshStandardMaterial
          color="#DAA520"
          metalness={1}
          roughness={0}
          emissive="#F59E0B"
          emissiveIntensity={0.2}
        />
        <Edges color="#F59E0B" linewidth={1.5} />
      </mesh>
    </Float>
  );
}
