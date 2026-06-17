import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

// Floating Abstract Shapes
function AbstractShapes() {
  return (
    <group>
      {/* Large Background Sphere */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <Sphere args={[3, 32, 32]} position={[5, 0, -5]}>
          <MeshDistortMaterial
            color="#F59E0B"
            transparent
            opacity={0.08}
            distort={0.4}
            speed={1.5}
          />
        </Sphere>
      </Float>

      {/* Medium Decorative Sphere */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
        <Sphere args={[2, 32, 32]} position={[-4, 2, -3]}>
          <MeshDistortMaterial
            color="#06B6D4"
            transparent
            opacity={0.06}
            distort={0.3}
            speed={2}
          />
        </Sphere>
      </Float>

      {/* Small Accent Sphere */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.5}>
        <Sphere args={[1.5, 32, 32]} position={[3, -2, -2]}>
          <MeshDistortMaterial
            color="#F59E0B"
            transparent
            opacity={0.05}
            distort={0.5}
            speed={2.5}
          />
        </Sphere>
      </Float>
    </group>
  );
}

// Animated Grid Lines
function GridLines() {
  const linesRef = useRef();

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <group ref={linesRef}>
      {[...Array(10)].map((_, i) => (
        <group key={i}>
          {/* Horizontal Lines */}
          <mesh position={[0, i - 5, -8]}>
            <boxGeometry args={[20, 0.02, 0.02]} />
            <meshStandardMaterial
              color="#F59E0B"
              transparent
              opacity={0.1}
              emissive="#F59E0B"
              emissiveIntensity={0.2}
            />
          </mesh>

          {/* Vertical Lines */}
          <mesh position={[i - 5, 0, -8]}>
            <boxGeometry args={[0.02, 20, 0.02]} />
            <meshStandardMaterial
              color="#06B6D4"
              transparent
              opacity={0.1}
              emissive="#06B6D4"
              emissiveIntensity={0.2}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function AboutBackground3D() {
  return (
    <Canvas
      className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
      
      {/* Ambient Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />

      <Suspense fallback={null}>
        <AbstractShapes />
        <GridLines />
      </Suspense>
    </Canvas>
  );
}
