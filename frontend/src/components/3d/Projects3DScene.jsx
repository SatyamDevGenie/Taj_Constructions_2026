import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Edges } from '@react-three/drei';
import * as THREE from 'three';

export default function Projects3DScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#F59E0B" />
      <spotLight position={[0, 8, 0]} angle={0.4} penumbra={1} intensity={1.5} color="#DAA520" />
      
      {/* Gallery Wall Structure */}
      <GalleryWall />
      
      {/* Floating Image Frames */}
      <FloatingFrames />
      
      {/* Light Beams */}
      <LightBeams />
    </>
  );
}

function GalleryWall() {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={ref} position={[0, 0, -2]}>
      {/* Main Wall */}
      <mesh>
        <boxGeometry args={[8, 4, 0.2]} />
        <meshStandardMaterial
          color="#1E293B"
          metalness={0.7}
          roughness={0.3}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Grid Pattern */}
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={`h-${i}`} position={[0, -1.8 + i * 0.9, 0.15]}>
          <boxGeometry args={[8, 0.02, 0.02]} />
          <meshBasicMaterial color="#F59E0B" transparent opacity={0.4} />
        </mesh>
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <mesh key={`v-${i}`} position={[-3.6 + i * 0.9, 0, 0.15]}>
          <boxGeometry args={[0.02, 4, 0.02]} />
          <meshBasicMaterial color="#F59E0B" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
}

function FloatingFrames() {
  const frames = [
    { pos: [-2, 0.8, 0], size: [1.2, 0.8] },
    { pos: [0, 1, 0], size: [1.5, 1] },
    { pos: [2, 0.6, 0], size: [1, 1] },
    { pos: [-1.5, -0.8, 0.5], size: [1, 0.8] },
    { pos: [1.5, -0.6, 0.5], size: [1.2, 0.9] },
  ];

  return (
    <group>
      {frames.map((frame, i) => (
        <ProjectFrame key={i} {...frame} index={i} />
      ))}
    </group>
  );
}

function ProjectFrame({ pos, size, index }) {
  const ref = useRef();
  const glowRef = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime + index) * 0.15;
      ref.current.position.y = pos[1] + Math.sin(state.clock.elapsedTime * 2 + index) * 0.1;
    }

    if (glowRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 2 + index) * 0.1 + 0.9;
      glowRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <group position={pos}>
      {/* Glow */}
      <mesh ref={glowRef} scale={1.2}>
        <planeGeometry args={[size[0], size[1]]} />
        <meshBasicMaterial color="#F59E0B" transparent opacity={0.1} />
      </mesh>

      {/* Frame */}
      <Float speed={1.5 + index * 0.2} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh ref={ref}>
          <boxGeometry args={[...size, 0.08]} />
          <MeshDistortMaterial
            color="#64748B"
            transparent
            opacity={0.6}
            distort={0.2}
            speed={1.5}
            metalness={0.9}
            roughness={0.1}
          />
          <Edges color="#F59E0B" linewidth={2} />
        </mesh>
      </Float>

      {/* Corner Pins */}
      {[
        [-size[0] / 2, size[1] / 2, 0.06],
        [size[0] / 2, size[1] / 2, 0.06],
        [-size[0] / 2, -size[1] / 2, 0.06],
        [size[0] / 2, -size[1] / 2, 0.06],
      ].map((pinPos, i) => (
        <mesh key={i} position={pinPos}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial
            color="#DAA520"
            emissive="#F59E0B"
            emissiveIntensity={0.5}
            metalness={1}
          />
        </mesh>
      ))}
    </group>
  );
}

function LightBeams() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, i) => {
        const x = -2 + i * 2;
        return (
          <LightBeam key={i} position={[x, 3, 0]} index={i} />
        );
      })}
    </>
  );
}

function LightBeam({ position, index }) {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      const intensity = Math.sin(state.clock.elapsedTime * 2 + index) * 0.2 + 0.8;
      ref.current.scale.set(intensity, 1, intensity);
    }
  });

  return (
    <mesh ref={ref} position={position} rotation={[Math.PI, 0, 0]}>
      <coneGeometry args={[0.3, 4, 32, 1, true]} />
      <meshBasicMaterial
        color="#F59E0B"
        transparent
        opacity={0.15}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
