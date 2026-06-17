import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial, Edges } from '@react-three/drei';

export default function FloatingGeometry({ 
  type = 'box', 
  position = [0, 0, 0], 
  scale = 1,
  color = '#DAA520',
  wireframe = false 
}) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
    }
  });

  const geometries = {
    box: <boxGeometry args={[1, 1, 1]} />,
    sphere: <sphereGeometry args={[0.5, 32, 32]} />,
    torus: <torusGeometry args={[0.5, 0.2, 16, 100]} />,
    cone: <coneGeometry args={[0.5, 1, 32]} />,
    cylinder: <cylinderGeometry args={[0.3, 0.3, 1, 32]} />,
    octahedron: <octahedronGeometry args={[0.6]} />,
    dodecahedron: <dodecahedronGeometry args={[0.5]} />,
  };

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometries[type] || geometries.box}
        {wireframe ? (
          <meshBasicMaterial color={color} wireframe transparent opacity={0.4} />
        ) : (
          <MeshWobbleMaterial
            color={color}
            transparent
            opacity={0.7}
            factor={0.5}
            speed={1}
            roughness={0.3}
            metalness={0.8}
          />
        )}
        <Edges color={color} linewidth={1.5} />
      </mesh>
    </Float>
  );
}
