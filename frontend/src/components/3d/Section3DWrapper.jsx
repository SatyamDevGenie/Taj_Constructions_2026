import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

export default function Section3DWrapper({ 
  children, 
  className = "absolute inset-0 -z-10 opacity-40",
  cameraPosition = [0, 0, 6],
  enableControls = false
}) {
  return (
    <div className={className}>
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={cameraPosition} />
          {children}
          {enableControls && <OrbitControls enableZoom={false} enablePan={false} />}
        </Suspense>
      </Canvas>
    </div>
  );
}
