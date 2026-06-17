import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center, Float } from '@react-three/drei';
import * as THREE from 'three';

export default function InteractiveModel({ position = [0, 0, 0] }) {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.scale.setScalar(hovered ? 1.2 : 1);
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Structural Grid */}
      <GridStructure />
      
      {/* Central Core */}
      <Float speed={2} floatIntensity={0.5}>
        <mesh>
          <torusKnotGeometry args={[0.4, 0.1, 100, 16]} />
          <meshStandardMaterial
            color={hovered ? '#F59E0B' : '#DAA520'}
            emissive={hovered ? '#F59E0B' : '#000000'}
            emissiveIntensity={hovered ? 0.5 : 0}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>

      {/* Orbiting Elements */}
      {Array.from({ length: 3 }).map((_, i) => (
        <OrbitingElement key={i} index={i} />
      ))}
    </group>
  );
}

function GridStructure() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => {
        const offset = (i - 4.5) * 0.3;
        return (
          <group key={i}>
            <mesh position={[offset, 0, 0]}>
              <boxGeometry args={[0.02, 3, 0.02]} />
              <meshBasicMaterial color="#64748B" transparent opacity={0.3} />
            </mesh>
            <mesh position={[0, offset, 0]} rotation={[0, 0, Math.PI / 2]}>
              <boxGeometry args={[0.02, 3, 0.02]} />
              <meshBasicMaterial color="#64748B" transparent opacity={0.3} />
            </mesh>
          </group>
        );
      })}
    </>
  );
}

function OrbitingElement({ index }) {
  const ref = useRef();
  const angle = (index / 3) * Math.PI * 2;

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.elapsedTime;
      const radius = 1.2;
      ref.current.position.x = Math.cos(time * 0.5 + angle) * radius;
      ref.current.position.z = Math.sin(time * 0.5 + angle) * radius;
      ref.current.rotation.y = time;
    }
  });

  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[0.15]} />
      <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.3} />
    </mesh>
  );
}
