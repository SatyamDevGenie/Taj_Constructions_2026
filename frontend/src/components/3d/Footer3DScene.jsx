import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Edges } from '@react-three/drei';
import * as THREE from 'three';

export default function Footer3DScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 5, 5]} intensity={0.8} color="#F59E0B" />
      
      {/* Foundation Base */}
      <FoundationPlatform />
      
      {/* Company Logo Structure */}
      <LogoStructure />
      
      {/* Social Icons Orbs */}
      <SocialOrbs />
    </>
  );
}

function FoundationPlatform() {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={ref} position={[0, -1, 0]}>
      {/* Main Platform */}
      <mesh>
        <cylinderGeometry args={[3, 3.5, 0.3, 32]} />
        <meshStandardMaterial
          color="#0F172A"
          metalness={0.9}
          roughness={0.1}
          emissive="#1E293B"
          emissiveIntensity={0.2}
        />
        <Edges color="#F59E0B" linewidth={1.5} />
      </mesh>

      {/* Ring Markers */}
      {Array.from({ length: 3 }).map((_, i) => {
        const radius = 1 + i * 0.8;
        return (
          <mesh key={i} rotation={[Math.PI / 2, 0, 0]} position={[0, 0.16, 0]}>
            <torusGeometry args={[radius, 0.02, 16, 100]} />
            <meshBasicMaterial color="#F59E0B" transparent opacity={0.4 - i * 0.1} />
          </mesh>
        );
      })}
    </group>
  );
}

function LogoStructure() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.5, 0]}>
      {/* Central Core */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh>
          <octahedronGeometry args={[0.6, 0]} />
          <MeshDistortMaterial
            color="#DAA520"
            transparent
            opacity={0.8}
            distort={0.3}
            speed={2}
            metalness={0.9}
            roughness={0.1}
            emissive="#F59E0B"
            emissiveIntensity={0.3}
          />
          <Edges color="#F59E0B" linewidth={2} />
        </mesh>
      </Float>

      {/* Orbiting Elements */}
      {Array.from({ length: 4 }).map((_, i) => {
        const angle = (i / 4) * Math.PI * 2;
        return (
          <OrbitElement key={i} angle={angle} index={i} />
        );
      })}
    </group>
  );
}

function OrbitElement({ angle, index }) {
  const ref = useRef();

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
      <boxGeometry args={[0.15, 0.15, 0.15]} />
      <meshStandardMaterial
        color="#3B82F6"
        emissive="#3B82F6"
        emissiveIntensity={0.4}
        metalness={0.9}
      />
    </mesh>
  );
}

function SocialOrbs() {
  const orbPositions = [
    [-2, 0, 1],
    [-1, 0.5, 1.5],
    [1, 0.3, 1.5],
    [2, 0, 1],
  ];

  return (
    <group>
      {orbPositions.map((pos, i) => (
        <SocialOrb key={i} position={pos} index={i} />
      ))}
    </group>
  );
}

function SocialOrb({ position, index }) {
  const ref = useRef();
  const glowRef = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * (0.5 + index * 0.2);
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + index) * 0.1;
    }

    if (glowRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 3 + index) * 0.15 + 0.85;
      glowRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group position={position}>
      {/* Glow */}
      <mesh ref={glowRef} scale={1.5}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial color="#F59E0B" transparent opacity={0.2} />
      </mesh>

      {/* Orb */}
      <Float speed={2 + index * 0.3} floatIntensity={0.4}>
        <mesh ref={ref}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshStandardMaterial
            color="#F59E0B"
            emissive="#F59E0B"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>
    </group>
  );
}
