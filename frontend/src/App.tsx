import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.0} />
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#4cc9f0" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#1b263b" />
      </mesh>
      <OrbitControls makeDefault />
    </>
  );
}

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          zIndex: 10,
          padding: "8px 12px",
          borderRadius: 8,
          background: "rgba(11, 15, 26, 0.7)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "white",
          fontFamily: '"Segoe UI", system-ui, sans-serif',
          fontSize: 14,
          letterSpacing: 0.3,
        }}
      >
        Campus Viewer Prototype (R3F)
      </div>

      <Canvas camera={{ position: [8, 6, 8], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
