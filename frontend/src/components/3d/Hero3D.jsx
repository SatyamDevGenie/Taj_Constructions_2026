import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Animated 3D Structural Blueprint Mesh
function ArchitecturalStructure({ mousePosition }) {
  const meshRef = useRef();
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Smooth rotation animation
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.15;
      groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
    }

    // Mouse parallax effect
    if (meshRef.current && mousePosition) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        mousePosition.y * 0.3,
        0.05
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        mousePosition.x * 0.3,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Building Structure */}
      <group ref={meshRef}>
        {/* Central Tower */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 6, 2]} />
          <meshStandardMaterial
            color="#F59E0B"
            wireframe
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Structural Beams */}
        {[...Array(8)].map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.cos((i / 8) * Math.PI * 2) * 3,
              Math.sin(i * 0.5) * 2,
              Math.sin((i / 8) * Math.PI * 2) * 3
            ]}
            rotation={[0, (i / 8) * Math.PI * 2, 0]}
          >
            <boxGeometry args={[0.2, 4, 0.2]} />
            <meshStandardMaterial
              color="#64748B"
              metalness={0.8}
              roughness={0.2}
              emissive="#F59E0B"
              emissiveIntensity={0.2}
            />
          </mesh>
        ))}

        {/* Floating Geometric Accents */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={[4, 3, 0]}>
            <octahedronGeometry args={[0.8, 0]} />
            <meshStandardMaterial
              color="#F59E0B"
              wireframe
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>

        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
          <mesh position={[-4, -2, 0]}>
            <tetrahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color="#06B6D4"
              wireframe
              transparent
              opacity={0.7}
            />
          </mesh>
        </Float>
      </group>

      {/* Ambient Glow Spheres */}
      <Sphere args={[8, 32, 32]} position={[0, 0, -5]}>
        <MeshDistortMaterial
          color="#F59E0B"
          transparent
          opacity={0.1}
          distort={0.3}
          speed={2}
        />
      </Sphere>
    </group>
  );
}

// Particle System for Construction Dust Effect
function ParticleField() {
  const particlesRef = useRef();
  const particleCount = 100;

  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#F59E0B"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Loading Fallback
function Loader() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#F59E0B" wireframe />
    </mesh>
  );
}

// Main 3D Canvas Component
export default function Hero3D({ mousePosition, scrollProgress }) {
  return (
    <Canvas
      className="absolute inset-0 z-0"
      dpr={[1, 2]}
      performance={{ min: 0.5 }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={75} />
      
      {/* Lighting Setup */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#F59E0B" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#06B6D4" />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#F59E0B" />

      {/* Environment & Controls */}
      <Environment preset="city" />
      
      <Suspense fallback={<Loader />}>
        <ArchitecturalStructure mousePosition={mousePosition} />
        <ParticleField />
      </Suspense>

      {/* Subtle orbit controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2.5}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}
