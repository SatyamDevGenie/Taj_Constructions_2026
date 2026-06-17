import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Edges } from '@react-three/drei';
import * as THREE from 'three';

export default function ConstructionBuilding({ position = [0, 0, 0], scale = 1 }) {
  const groupRef = useRef();
  const mainBuildingRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
    if (mainBuildingRef.current) {
      mainBuildingRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Main Building Tower */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={mainBuildingRef} position={[0, 0, 0]}>
          <boxGeometry args={[1, 3, 1]} />
          <MeshDistortMaterial
            color="#DAA520"
            transparent
            opacity={0.8}
            distort={0.2}
            speed={1}
            roughness={0.4}
            metalness={0.8}
          />
          <Edges color="#F59E0B" linewidth={2} />
        </mesh>
      </Float>

      {/* Foundation */}
      <mesh position={[0, -1.6, 0]}>
        <boxGeometry args={[1.5, 0.2, 1.5]} />
        <meshStandardMaterial color="#1E293B" metalness={0.9} roughness={0.1} />
        <Edges color="#DAA520" linewidth={1.5} />
      </mesh>

      {/* Side Structures */}
      {[-1.2, 1.2].map((x, idx) => (
        <Float key={idx} speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
          <mesh position={[x, -0.5, 0]}>
            <boxGeometry args={[0.4, 2, 0.4]} />
            <meshStandardMaterial
              color="#64748B"
              transparent
              opacity={0.7}
              metalness={0.7}
              roughness={0.3}
            />
            <Edges color="#94A3B8" linewidth={1} />
          </mesh>
        </Float>
      ))}

      {/* Wireframe Grid Floors */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[0, -1.3 + i * 0.4, 0]} rotation={[0, 0, 0]}>
          <planeGeometry args={[1.1, 0.02]} />
          <meshBasicMaterial color="#F59E0B" transparent opacity={0.6} />
        </mesh>
      ))}

      {/* Rotating Construction Crane */}
      <group position={[0, 1.8, 0]} rotation={[0, 0, 0]}>
        <mesh position={[0.8, 0, 0]}>
          <boxGeometry args={[1.5, 0.05, 0.05]} />
          <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.6, 8]} />
          <meshStandardMaterial color="#94A3B8" />
        </mesh>
      </group>

      {/* Particles/Dust Effect */}
      <ParticleSystem count={50} />
    </group>
  );
}

function ParticleSystem({ count }) {
  const particlesRef = useRef();

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] = Math.sin(state.clock.elapsedTime + i) * 0.1;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  const particles = [];
  for (let i = 0; i < count; i++) {
    const x = (Math.random() - 0.5) * 4;
    const y = (Math.random() - 0.5) * 4;
    const z = (Math.random() - 0.5) * 4;
    particles.push(x, y, z);
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={new Float32Array(particles)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#F59E0B" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}
