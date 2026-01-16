import "./style.css";
import { ArcRotateCamera, Color3, Engine, HemisphericLight, MeshBuilder, Scene, Vector3 } from "@babylonjs/core";

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
const engine = new Engine(canvas, true);

const createScene = () => {
  const scene = new Scene(engine);
  scene.clearColor = new Color3(0.05, 0.08, 0.15);

  const camera = new ArcRotateCamera("camera", Math.PI / 2, Math.PI / 3, 12, Vector3.Zero(), scene);
  camera.attachControl(canvas, true);

  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
  light.intensity = 0.9;

  const ground = MeshBuilder.CreateGround("ground", { width: 20, height: 20 }, scene);
  const box = MeshBuilder.CreateBox("marker", { size: 2 }, scene);
  box.position.y = 1;

  ground.receiveShadows = true;

  return scene;
};

const scene = createScene();

engine.runRenderLoop(() => {
  scene.render();
});

window.addEventListener("resize", () => {
  engine.resize();
});
