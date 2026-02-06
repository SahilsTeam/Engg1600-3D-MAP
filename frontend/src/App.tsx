import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import LoginPage from "./LoginPage";
import { clearSession, getSession, setSession, type AuthSession } from "./auth";

type BuildingDef = {
  name: string;
  position: [number, number, number];
  size: [number, number, number];
  color: string;
};

const BUILDINGS: BuildingDef[] = [
  {
    name: "Engineering Building",
    position: [-6, 2, -4],
    size: [6, 4, 5],
    color: "#4c6fff",
  },
  {
    name: "Library",
    position: [6, 1.5, -3],
    size: [5, 3, 4],
    color: "#f4b41a",
  },
  {
    name: "Student Centre",
    position: [-2, 1.2, 5],
    size: [4.5, 2.4, 4],
    color: "#43aa8b",
  },
  {
    name: "Gym",
    position: [7, 2.4, 6],
    size: [4, 4.8, 3.5],
    color: "#f25f5c",
  },
  {
    name: "Admin",
    position: [-8, 1.6, 6],
    size: [3.5, 3.2, 3],
    color: "#9b5de5",
  },
];

type SceneProps = {
  selectedName: string | null;
  onSelect: (name: string) => void;
};

function Scene({ selectedName, onSelect }: SceneProps) {
  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[8, 12, 6]} intensity={1.1} />

      {/* Ground (NOT selectable: no pointer handler attached) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[60, 60]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>

      {/* Fallback demo campus (buildings ARE selectable) */}
      <group>
        {BUILDINGS.map((b) => {
          const isSelected = b.name === selectedName;

          return (
            <mesh
              key={b.name}
              name={b.name}
              position={b.position}
              onPointerDown={(e) => {
                e.stopPropagation();
                onSelect(e.object.name);
              }}
            >
              <boxGeometry args={b.size} />
              <meshStandardMaterial
                color={b.color}
                emissive={isSelected ? "#ffffff" : "#000000"}
                emissiveIntensity={isSelected ? 0.35 : 0}
              />
            </mesh>
          );
        })}
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
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [session, setSessionState] = useState<AuthSession | null>(null);

  // Load session from localStorage on first mount
  useEffect(() => {
    setSessionState(getSession());
  }, []);

  // Login gate
  if (!session) {
    return (
      <LoginPage
        onLogin={(username) => {
          const next: AuthSession = {
            username,
            loginAt: new Date().toISOString(),
          };
          setSession(next);
          setSessionState(next);
        }}
      />
    );
  }

  return (
    <div className="app-root">
      <div className="overlay-root">
        <div className="overlay-panel">
          <div className="overlay-title">Campus Viewer</div>

          <div className="overlay-section">
            <div className="overlay-label">User</div>
            <div className="overlay-value">{session.username}</div>
          </div>

          <div className="overlay-section">
            <div className="overlay-label">Selected</div>
            <div className="overlay-value">{selectedName ?? "None"}</div>
          </div>

          <div className="overlay-actions">
            <button className="overlay-button" disabled>
              Focus
            </button>

            <button
              className="overlay-button secondary"
              disabled={!selectedName}
              onClick={() => setSelectedName(null)}
            >
              Clear
            </button>

            <button
              className="overlay-button secondary"
              onClick={() => {
                clearSession();
                setSessionState(null);
                setSelectedName(null);
              }}
            >
              Logout
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
        <Scene selectedName={selectedName} onSelect={(name) => setSelectedName(name)} />
      </Canvas>
    </div>
  );
}
