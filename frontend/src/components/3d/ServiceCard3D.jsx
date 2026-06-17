import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Float, MeshDistortMaterial } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

// Animated 3D Icon for Service Cards
function ServiceIcon({ type, isHovered }) {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.5;
      meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
      
      // Scale on hover
      const targetScale = isHovered ? 1.3 : 1;
      meshRef.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.1);
    }
  });

  // Different geometries for different service types
  const getGeometry = () => {
    switch (type) {
      case 'residential':
        return <boxGeometry args={[1.5, 1.5, 1.5]} />;
      case 'commercial':
        return <cylinderGeometry args={[0.8, 0.8, 1.8, 6]} />;
      case 'renovation':
        return <octahedronGeometry args={[1, 0]} />;
      default:
        return <sphereGeometry args={[1, 16, 16]} />;
    }
  };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        {getGeometry()}
        <MeshDistortMaterial
          color="#F59E0B"
          metalness={0.9}
          roughness={0.1}
          distort={0.3}
          speed={2}
          emissive="#F59E0B"
          emissiveIntensity={isHovered ? 0.5 : 0.2}
        />
      </mesh>

      {/* Wireframe Overlay */}
      <mesh ref={meshRef} scale={1.05}>
        {getGeometry()}
        <meshStandardMaterial
          color="#06B6D4"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

// Particle Ring Effect
function ParticleRing({ isHovered }) {
  const particlesRef = useRef();
  const particleCount = 30;

  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const angle = (i / particleCount) * Math.PI * 2;
    const radius = 2;
    positions[i * 3] = Math.cos(angle) * radius;
    positions[i * 3 + 1] = Math.sin(angle) * radius;
    positions[i * 3 + 2] = 0;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.z = state.clock.getElapsedTime() * 0.5;
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
        size={isHovered ? 0.15 : 0.1}
        color="#F59E0B"
        transparent
        opacity={isHovered ? 0.8 : 0.4}
        sizeAttenuation
      />
    </points>
  );
}

export default function ServiceCard3D({ type, isHovered = false }) {
  return (
    <Canvas
      className="absolute inset-0 w-full h-full pointer-events-none"
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
      
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#F59E0B" />
      <pointLight position={[-5, 5, 0]} intensity={0.5} color="#06B6D4" />

      <Suspense fallback={null}>
        <ServiceIcon type={type} isHovered={isHovered} />
        <ParticleRing isHovered={isHovered} />
      </Suspense>
    </Canvas>
  );
}
