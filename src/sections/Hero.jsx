// src/components/Hero.jsx
import { Leva } from 'leva';
import { Suspense, useRef, useEffect } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';
import { Mita } from '../components/DemoMita.jsx';

// Rotates Mita model on the z-axis based on mouse.x
function RotateMita() {
  const { mouse, scene } = useThree();
  const modelRef = useRef();
  const ROTATION_OFFSET = -Math.PI / 6; // -30 degrees offset

  useEffect(() => {
    modelRef.current = scene.getObjectByName('Scene');
  }, [scene]);

  useFrame(() => {
    if (!modelRef.current) return;

    // Lock model's original x,y rotation
    modelRef.current.rotation.x = 0;
    modelRef.current.rotation.y = 0;

    // Scale mouse.x to [-π/4, π/4]
    const maxRotation = Math.PI / 4;
    const dynamicRotation = mouse.x * maxRotation;

    modelRef.current.rotation.z = dynamicRotation + ROTATION_OFFSET;
  });

  return null;
}

const Hero = () => {
  // Media queries for responsive sizing
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  // Custom camera setup
  const CustomCamera = () => {
    const cameraRef = useRef();
    const { camera, scene } = useThree();

    useEffect(() => {
      if (cameraRef.current) {
        cameraRef.current.position.set(3, 4, 10);
        cameraRef.current.fov = 50; 
        cameraRef.current.updateProjectionMatrix();
        cameraRef.current.lookAt(new THREE.Vector3(0, 2.5, 0));
      }
    }, [camera, scene]);

    return <PerspectiveCamera makeDefault ref={cameraRef} />;
  };

  return (
    <section className="min-h-screen w-full flex relative" id="home">
      {/* LEFT COLUMN: "Main Menu" */}
      <div className="w-1/3 flex flex-col justify-center px-4 py-6 z-10">
        {/* New Bigger Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-8 font-oswald">
          Welcome to <span className="text-pink-500 relative sparkle">RobinSide</span>
        </h1>

        {/* Updated "Main Menu" as h2 */}
        <h2 className="text-3xl font-bold text-pink-200 mb-6 font-oswald">
          Main Menu
        </h2>
        
        {/* Navigation Links with Individual Pink Boxes */}
        <div className="flex flex-col space-y-4">
          
          {/* About */}
          <a href="#about" className="block focus:outline-none focus:ring-2 focus:ring-pink-400">
            <div className="bg-pink-500/20 rounded-lg p-4 hover:bg-pink-500/30 transition-colors">
              <span className="text-xl text-white hover:text-pink-400 transition-colors font-oswald">
                About
              </span>
            </div>
          </a>

          {/* Projects */}
          <a href="#projects" className="block focus:outline-none focus:ring-2 focus:ring-pink-400">
            <div className="bg-pink-500/20 rounded-lg p-4 hover:bg-pink-500/30 transition-colors">
              <span className="text-xl text-white hover:text-pink-400 transition-colors font-oswald">
                Projects
              </span>
            </div>
          </a>

          {/* Work */}
          <a href="#work" className="block focus:outline-none focus:ring-2 focus:ring-pink-400">
            <div className="bg-pink-500/20 rounded-lg p-4 hover:bg-pink-500/30 transition-colors">
              <span className="text-xl text-white hover:text-pink-400 transition-colors font-oswald">
                Work
              </span>
            </div>
          </a>

          {/* Exit Link */}
          <a href="https://robinttw.com" className="block focus:outline-none focus:ring-2 focus:ring-pink-400">
            <div className="bg-pink-500/20 rounded-lg p-4 hover:bg-pink-500/30 transition-colors">
              <span className="text-xl text-white hover:text-pink-400 transition-colors font-oswald">
                Exit to RobinTTW
              </span>
            </div>
          </a>
          
        </div>
      </div>

      {/* RIGHT COLUMN: The 3D Canvas with Mita */}
      <div className="w-2/3 relative">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <CustomCamera />
            
            <Mita
              scale={[20, 20, 20]}
              position={[sizes.deskPosition[0] + 0, sizes.deskPosition[1] - 16, sizes.deskPosition[2]]}
              rotation={[-Math.PI / 2, 0, -200]}
            />
            <RotateMita />

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
