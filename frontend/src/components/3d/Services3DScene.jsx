import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Edges, Html } from '@react-three/drei';
import * as THREE from 'three';

export default function Services3DScene({ activeService = 0 }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={1} color="#F59E0B" />
      <spotLight position={[0, 5, 0]} angle={0.3} penumbra={1} intensity={1} color="#DAA520" />
      
      {/* Service Cards 3D Grid */}
      <ServiceGrid activeService={activeService} />
      
      {/* Tool Icons Floating */}
      <FloatingTools />
      
      {/* Connection Network */}
      <NetworkLines />
    </>
  );
}

function ServiceGrid({ activeService }) {
  const services = [
    { pos: [-2.5, 0.5, 0], icon: '🏗️', color: '#F59E0B' },
    { pos: [0, 0.5, 0], icon: '🏠', color: '#3B82F6' },
    { pos: [2.5, 0.5, 0], icon: '🔧', color: '#10B981' },
  ];

  return (
    <group>
      {services.map((service, i) => (
        <ServiceCard
          key={i}
          {...service}
          index={i}
          isActive={activeService === i}
        />
      ))}
    </group>
  );
}

function ServiceCard({ pos, icon, color, index, isActive }) {
  const ref = useRef();
  const glowRef = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime + index) * 0.2;
      ref.current.position.y = pos[1] + Math.sin(state.clock.elapsedTime * 2 + index) * 0.15;
      
      // Scale based on active state
      const targetScale = isActive ? 1.3 : 1;
      ref.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }

    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3) * 0.1);
    }
  });

  return (
    <group position={pos}>
      {/* Glow Effect */}
      <mesh ref={glowRef} scale={1.5}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial color={color} transparent opacity={isActive ? 0.2 : 0.1} />
      </mesh>

      {/* Main Card */}
      <Float speed={1.5 + index * 0.2} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={ref}>
          <boxGeometry args={[1, 1.2, 0.2]} />
          <MeshDistortMaterial
            color={color}
            transparent
            opacity={isActive ? 0.9 : 0.7}
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.9}
          />
          <Edges color={color} linewidth={isActive ? 3 : 2} />
        </mesh>
      </Float>

      {/* Corner Decorations */}
      {[
        [-0.5, 0.6, 0.15],
        [0.5, 0.6, 0.15],
        [-0.5, -0.6, 0.15],
        [0.5, -0.6, 0.15],
      ].map((cornerPos, i) => (
        <mesh key={i} position={cornerPos}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={isActive ? 0.8 : 0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

function FloatingTools() {
  const tools = [
    { pos: [-1.5, 2, -1], type: 'hammer', scale: 0.3 },
    { pos: [1.5, -1.5, -1], type: 'wrench', scale: 0.3 },
    { pos: [0, 1.8, -1.5], type: 'ruler', scale: 0.25 },
    { pos: [-2, -0.5, -0.8], type: 'gear', scale: 0.25 },
    { pos: [2, 0.5, -0.8], type: 'blueprint', scale: 0.25 },
  ];

  return (
    <group>
      {tools.map((tool, i) => (
        <Tool key={i} {...tool} index={i} />
      ))}
    </group>
  );
}

function Tool({ pos, type, scale, index }) {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * (0.5 + index * 0.1);
      ref.current.rotation.y = state.clock.elapsedTime * (0.3 + index * 0.1);
    }
  });

  const geometries = {
    hammer: <boxGeometry args={[0.2, 0.8, 0.2]} />,
    wrench: <torusGeometry args={[0.3, 0.1, 16, 100]} />,
    ruler: <boxGeometry args={[0.8, 0.1, 0.1]} />,
    gear: <cylinderGeometry args={[0.3, 0.3, 0.1, 8]} />,
    blueprint: <planeGeometry args={[0.6, 0.6]} />,
  };

  return (
    <Float speed={1.5 + index * 0.3} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={ref} position={pos} scale={scale}>
        {geometries[type]}
        <meshStandardMaterial
          color="#94A3B8"
          transparent
          opacity={0.6}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function NetworkLines() {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const connections = [
    { from: [-2.5, 0.5, 0], to: [0, 0.5, 0] },
    { from: [0, 0.5, 0], to: [2.5, 0.5, 0] },
    { from: [-2.5, 0.5, 0], to: [2.5, 0.5, 0] },
  ];

  return (
    <group ref={ref}>
      {connections.map((conn, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([...conn.from, ...conn.to])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#F59E0B" transparent opacity={0.3} linewidth={2} />
        </line>
      ))}
    </group>
  );
}
