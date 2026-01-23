import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Scene() {
  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[8, 12, 6]} intensity={1.1} />

      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[60, 60]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>

      {/* Fallback demo campus */}
      <group>
        <mesh name="Engineering Building" position={[-6, 2, -4]}>
          <boxGeometry args={[6, 4, 5]} />
          <meshStandardMaterial color="#4c6fff" />
        </mesh>

        <mesh name="Library" position={[6, 1.5, -3]}>
          <boxGeometry args={[5, 3, 4]} />
          <meshStandardMaterial color="#f4b41a" />
        </mesh>

        <mesh name="Student Centre" position={[-2, 1.2, 5]}>
          <boxGeometry args={[4.5, 2.4, 4]} />
          <meshStandardMaterial color="#43aa8b" />
        </mesh>

        <mesh name="Gym" position={[7, 2.4, 6]}>
          <boxGeometry args={[4, 4.8, 3.5]} />
          <meshStandardMaterial color="#f25f5c" />
        </mesh>

        <mesh name="Admin" position={[-8, 1.6, 6]}>
          <boxGeometry args={[3.5, 3.2, 3]} />
          <meshStandardMaterial color="#9b5de5" />
        </mesh>
      </group>

      {/* Controls (ONE instance only) */}
      <OrbitControls
        enableDamping
        dampingFactor={0.1}
        minDistance={5}
        maxDistance={80}
        maxPolarAngle={Math.PI / 2.2}
        target={[0, 0, 0]}
      />
    </>
  );
}

export default function App() {
  return (
    <div className="app-root">
      <div className="overlay-root">
        <div className="overlay-panel">
          <div className="overlay-title">Campus Viewer</div>

          <div className="overlay-section">
            <div className="overlay-label">Selected</div>
            <div className="overlay-value">None</div>
          </div>

          <div className="overlay-actions">
            <button className="overlay-button" disabled>
              Focus
            </button>
            <button className="overlay-button secondary" disabled>
              Clear
            </button>
          </div>
        </div>
      </div>

      <Canvas
        camera={{ position: [15, 12, 15], fov: 50 }}
        onCreated={({ camera }) => {
          camera.lookAt(0, 0, 0);
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}