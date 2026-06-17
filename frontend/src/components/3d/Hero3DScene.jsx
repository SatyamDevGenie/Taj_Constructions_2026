import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Edges, Environment, PerspectiveCamera, useScroll } from '@react-three/drei';
import * as THREE from 'three';

export default function Hero3DScene({ mousePosition, scrollProgress }) {
  const { viewport } = useThree();
  
  return (
    <>
      <Environment preset="city" />
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={75} />
      
      {/* Main Hero Structure */}
      <MainBuilding mousePosition={mousePosition} scrollProgress={scrollProgress} />
      
      {/* Floating Geometric Elements */}
      <FloatingElements />
      
      {/* Particle System */}
      <ConstructionParticles count={200} />
      
      {/* Ambient Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#F59E0B" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3B82F6" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
        color="#DAA520"
      />
    </>
  );
}

function MainBuilding({ mousePosition, scrollProgress }) {
  const groupRef = useRef();
  const buildingRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      // Parallax effect with mouse
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePosition.x * 0.3,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mousePosition.y * 0.2,
        0.05
      );

      // Scroll-based transform
      groupRef.current.position.y = scrollProgress * -5;
      groupRef.current.scale.setScalar(1 + scrollProgress * 0.5);
    }

    if (buildingRef.current) {
      buildingRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Tower */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={buildingRef} castShadow receiveShadow>
          <boxGeometry args={[1.5, 4, 1.5]} />
          <MeshDistortMaterial
            color="#1E293B"
            transparent
            opacity={0.85}
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.9}
            envMapIntensity={1}
          />
          <Edges color="#F59E0B" linewidth={2} />
        </mesh>
      </Float>

      {/* Foundation Platform */}
      <mesh position={[0, -2.2, 0]} receiveShadow>
        <cylinderGeometry args={[2, 2.5, 0.3, 32]} />
        <meshStandardMaterial
          color="#0F172A"
          metalness={0.95}
          roughness={0.05}
          emissive="#F59E0B"
          emissiveIntensity={0.1}
        />
        <Edges color="#DAA520" linewidth={1.5} />
      </mesh>

      {/* Support Pillars */}
      {[...Array(4)].map((_, i) => {
        const angle = (i / 4) * Math.PI * 2;
        const radius = 1.8;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <Float key={i} speed={1.5 + i * 0.2} rotationIntensity={0.2} floatIntensity={0.3}>
            <mesh position={[x, -1, z]} castShadow>
              <cylinderGeometry args={[0.1, 0.15, 2.5, 16]} />
              <meshStandardMaterial
                color="#64748B"
                metalness={0.8}
                roughness={0.2}
                emissive="#3B82F6"
                emissiveIntensity={0.2}
              />
            </mesh>
          </Float>
        );
      })}

      {/* Floor Grid Lines */}
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh key={i} position={[0, -1.8 + i * 0.35, 0]}>
          <boxGeometry args={[1.6, 0.02, 1.6]} />
          <meshBasicMaterial
            color="#F59E0B"
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}

      {/* Rotating Crane Arm */}
      <ConstructionCrane position={[0, 2.3, 0]} />

      {/* Wireframe Architectural Blueprint */}
      <WireframeBlueprint />
    </group>
  );
}

function ConstructionCrane({ position }) {
  const craneRef = useRef();

  useFrame((state) => {
    if (craneRef.current) {
      craneRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={craneRef} position={position}>
      {/* Main Arm */}
      <mesh position={[1.2, 0, 0]}>
        <boxGeometry args={[2.5, 0.08, 0.08]} />
        <meshStandardMaterial
          color="#EF4444"
          emissive="#EF4444"
          emissiveIntensity={0.5}
          metalness={0.7}
        />
      </mesh>

      {/* Counter Weight */}
      <mesh position={[-0.8, 0, 0]}>
        <boxGeometry args={[0.6, 0.08, 0.08]} />
        <meshStandardMaterial color="#DC2626" metalness={0.8} />
      </mesh>

      {/* Support Tower */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.8, 8]} />
        <meshStandardMaterial color="#94A3B8" metalness={0.9} />
      </mesh>

      {/* Hook Cable */}
      <mesh position={[1.8, -0.6, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 1.2, 8]} />
        <meshStandardMaterial color="#64748B" />
      </mesh>

      {/* Hook */}
      <Float speed={3} floatIntensity={0.2}>
        <mesh position={[1.8, -1.3, 0]}>
          <torusGeometry args={[0.08, 0.02, 8, 16]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.3} />
        </mesh>
      </Float>
    </group>
  );
}

function WireframeBlueprint() {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={ref} position={[0, 0, -2]}>
      <mesh>
        <torusKnotGeometry args={[0.8, 0.15, 100, 16]} />
        <meshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

function FloatingElements() {
  const geometries = [
    { type: 'dodecahedron', args: [0.3], pos: [-3, 1, -2] },
    { type: 'octahedron', args: [0.4], pos: [3, -1, -1] },
    { type: 'icosahedron', args: [0.35], pos: [-2.5, -2, 1] },
    { type: 'tetrahedron', args: [0.4], pos: [2.8, 2, 0] },
  ];

  return (
    <>
      {geometries.map((geo, i) => (
        <FloatingGeo key={i} {...geo} index={i} />
      ))}
    </>
  );
}

function FloatingGeo({ type, args, pos, index }) {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * (0.5 + index * 0.1);
      ref.current.rotation.y = state.clock.elapsedTime * (0.3 + index * 0.1);
      ref.current.position.y = pos[1] + Math.sin(state.clock.elapsedTime + index) * 0.3;
    }
  });

  const GeometryComponent = {
    dodecahedron: <dodecahedronGeometry args={args} />,
    octahedron: <octahedronGeometry args={args} />,
    icosahedron: <icosahedronGeometry args={args} />,
    tetrahedron: <tetrahedronGeometry args={args} />,
  }[type];

  return (
    <Float speed={2 + index * 0.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref} position={pos}>
        {GeometryComponent}
        <meshStandardMaterial
          color="#DAA520"
          transparent
          opacity={0.6}
          metalness={0.9}
          roughness={0.1}
          emissive="#F59E0B"
          emissiveIntensity={0.2}
        />
        <Edges color="#F59E0B" linewidth={1.5} />
      </mesh>
    </Float>
  );
}

function ConstructionParticles({ count }) {
  const particlesRef = useRef();

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const i3 = i / 3;
        positions[i + 1] += Math.sin(state.clock.elapsedTime + i3) * 0.002;
        
        // Reset particles that go too high
        if (positions[i + 1] > 5) {
          positions[i + 1] = -5;
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  const particles = [];
  for (let i = 0; i < count; i++) {
    const x = (Math.random() - 0.5) * 10;
    const y = (Math.random() - 0.5) * 10;
    const z = (Math.random() - 0.5) * 10;
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
      <pointsMaterial
        size={0.03}
        color="#F59E0B"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
