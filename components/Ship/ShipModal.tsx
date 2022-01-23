import { Suspense, useRef, useState } from "react";
// import "../App.css";
import { Html, useProgress, OrbitControls } from "@react-three/drei";
import {
  Canvas,
  useLoader,
  useFrame,
  useThree,
  extend,
} from "@react-three/fiber";
import { CubeTextureLoader } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Dialog } from "@headlessui/react";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

function Ship(props: { shipName: string }) {
  const [url, set] = useState(`/models/${props.shipName}.gltf`);
  const { scene } = useLoader(GLTFLoader, url);

  useThree(({ camera }) => {
    camera.rotation.set(0, deg2rad(30), 0);
    camera.position.set(0, 0, -10);
  });

  return <primitive object={scene} />;
}
const deg2rad = (degrees: number) => degrees * (Math.PI / 180);

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  // const controls = useRef();
  // useFrame((state) => controls?.current.update());
  // enableZoom={false}
  // maxAzimuthAngle={Math.PI / 4}
  // maxPolarAngle={Math.PI}
  // minAzimuthAngle={-Math.PI / 4}
  // minPolarAngle={0}
  return <OrbitControls args={[camera, domElement]} />;
};

// Loads the skybox texture and applies it to the scene.
function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    "/skybox/galacticgreen_left.jpg",
    "/skybox/galacticgreen_right.jpg",
    "/skybox/galacticgreen_up.jpg",
    "/skybox/galacticgreen_down.jpg",
    "/skybox/galacticgreen_front.jpg",
    "/skybox/galacticgreen_back.jpg",
  ]);
  scene.background = texture;
  return null;
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress}%</Html>;
}

interface ShipModalProps {
  shipName: string | null;
  show: boolean;
  onClose: () => void;
}

function ShipModal({ shipName, show, onClose }: ShipModalProps) {
  return (
    <Dialog
      className="fixed inset-0 z-10 overflow-y-auto"
      open={show}
      onClose={() => onClose()}
    >
      <div className="min-h-screen px-4 text-center">
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="inline-block w-full max-w-2xl p-6 my-8 inset-0 overflow-hidden text-left align-middle transition-all transform bg-stone-900 shadow-xl rounded-2xl">
          <Dialog.Title className="text-teal-300 text-2xl">Ship Inspector</Dialog.Title>
          <div className="mt-8 h-[300px]">
          {shipName && (
            <Canvas>
              <CameraControls />
              <ambientLight intensity={2} />
              <pointLight position={[10, 10, 10]} />
              <pointLight position={[0, -10, -10]} />

              <Suspense fallback={<Loader />}>
                <Ship shipName={shipName} />
              </Suspense>

              <SkyBox />
            </Canvas>
          )}
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default ShipModal;
