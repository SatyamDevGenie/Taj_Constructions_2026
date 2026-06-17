import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Edges, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

export default function CTA3DScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#F59E0B" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#3B82F6" />
      
      {/* Call-to-Action Beacon */}
      <CTABeacon />
      
      {/* Energetic Rings */}
      <EnergyRings />
      
      {/* Sparkles Effect */}
      <Sparkles count={100} scale={8} size={2} speed={0.4} color="#F59E0B" />
    </>
  );
}

function CTABeacon() {
  const groupRef = useRef();
  const coreRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }

    if (coreRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
      coreRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Pulsating Core */}
      <Float speed={3} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[0.8, 1]} />
          <MeshDistortMaterial
            color="#F59E0B"
            transparent
            opacity={0.9}
            distort={0.4}
            speed={3}
            metalness={0.9}
            roughness={0.1}
            emissive="#F59E0B"
            emissiveIntensity={0.6}
          />
          <Edges color="#FFD700" linewidth={3} />
        </mesh>
      </Float>

      {/* Orbital Satellites */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        return (
          <Satellite key={i} angle={angle} index={i} />
        );
      })}

      {/* Energy Beams */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = Math.cos(angle) * 0.8;
        const z = Math.sin(angle) * 0.8;
        return (
          <EnergyBeam key={i} position={[x, 0, z]} angle={angle} index={i} />
        );
      })}
    </group>
  );
}

function Satellite({ angle, index }) {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.elapsedTime;
      const radius = 1.8;
      ref.current.position.x = Math.cos(time * 0.6 + angle) * radius;
      ref.current.position.y = Math.sin(time * 0.4 + index) * 0.3;
      ref.current.position.z = Math.sin(time * 0.6 + angle) * radius;
      ref.current.rotation.x = time;
      ref.current.rotation.y = time * 0.7;
    }
  });

  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[0.15, 0]} />
      <meshStandardMaterial
        color="#3B82F6"
        emissive="#3B82F6"
        emissiveIntensity={0.5}
        metalness={1}
        roughness={0}
      />
    </mesh>
  );
}

function EnergyBeam({ position, angle, index }) {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      const intensity = Math.sin(state.clock.elapsedTime * 3 + index) * 0.3 + 0.7;
      ref.current.scale.set(1, intensity * 2, 1);
      ref.current.material.opacity = intensity * 0.4;
    }
  });

  return (
    <mesh
      ref={ref}
      position={position}
      rotation={[0, angle, 0]}
    >
      <boxGeometry args={[0.05, 3, 0.05]} />
      <meshBasicMaterial
        color="#F59E0B"
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

function EnergyRings() {
  return (
    <group>
      {Array.from({ length: 5 }).map((_, i) => (
        <EnergyRing key={i} index={i} />
      ))}
    </group>
  );
}

function EnergyRing({ index }) {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.PI / 2;
      ref.current.rotation.z = state.clock.elapsedTime * (0.3 + index * 0.1);
      
      const scale = 1 + index * 0.3 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.1;
      ref.current.scale.setScalar(scale);
      
      const opacity = 0.3 - index * 0.05;
      ref.current.material.opacity = opacity * (0.5 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.5);
    }
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[1, 0.03, 16, 100]} />
      <meshBasicMaterial
        color={index % 2 === 0 ? "#F59E0B" : "#3B82F6"}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}
