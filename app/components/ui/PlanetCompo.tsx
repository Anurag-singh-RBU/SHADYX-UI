
'use client';
import React, { useState } from 'react';
import { Monitor, FileCode } from 'lucide-react';
import CodeBlock from './CodeBlock';
// import { Copy, Check } from 'lucide-react';
import { ScriptCopyBtn } from './ScriptCopyBtn';
import { ScriptImport } from './ScriptImport';
import EarthCanvas from './EarthCanvas';

const Spotlight: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  const codeString = `import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Earth = () => {
const earth = useGLTF("./planet/scene.gltf");

earth.scene.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
});

return (
  <primitive
    object={earth.scene}
    scale={2.5}
    position={[0, 0, 0]}
    rotation-y={0}/>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}>
      
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        intensity={1.2}
        position={[5, 10, 5]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}/>

      <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2.5, 0]}>
        <planeGeometry args={[50, 50]} />
        <shadowMaterial opacity={0.3} />
      </mesh>

      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.8}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}/>
        <Earth />
      </Suspense>

      <Preload all/>
    </Canvas>
  );
};

export default EarthCanvas;
`;

  return (
    <div className="w-auto sm:mt-35 mt-33 sm:ml-32 ml-8 sm:mr-25 mr-8 relative">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-3 font-JB">Parallax</h1>

      {/* Subheading */}
      <p className="sm:text-md text-sm text-gray-600 mb-4 mono-text text-justify">
        A parallax effect with Tailwind CSS which is good for drawing attention to a particular element on the page.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap sm:gap-2 gap-3 -ml-2 mb-6 font-JB">
  {['Planet', 'Cool', 'Special'].map((tag, index) => (
    <div key={tag} className={`relative rounded-full sm:ml-0 ml-1 p-[2px] tag-wrapper tag-${index}`}>
      <div className="relative z-10 bg-black text-white text-sm sm:px-4 px-2 py-1 rounded-full font-medium">
        {tag}
      </div>
    </div>
  ))}
</div>


      {/* Toggle Buttons */}
      <div className="flex gap-4 sm:mt-20 mt-15">
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex items-center gap-2 px-5 py-2 rounded-md shadow-sm ${
            activeTab === 'preview'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Monitor className="w-4 h-4" />
          <span className="font-medium">Preview</span>
        </button>

        <button
          onClick={() => setActiveTab('code')}
          className={`flex items-center gap-2 px-5 py-2 rounded-md ${
            activeTab === 'code'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <FileCode className="w-4 h-4" />
          <span className="font-medium">Code</span>
        </button>
      </div>

      {/* Content Switcher */}
      <div className="sm:mt-10 mt-5 min-h-[400px] -mb-25 sm:mb-0 relative">
        {activeTab === 'preview' ? (
          <div className="relative rounded-md sm:h-[500px] h-[300px] bg-gradient-to-b from-black via-gray-900 to-black">
            <EarthCanvas/>
            <h1 className="text-center text-white sm:text-4xl text-xl font-JB sm:pt-54 pt-29 sm:pl-3 px-3">
              Give your screen some life with motion
            </h1>
          </div>
        ) : (
          <div className="sm:h-[500px] h-[300px] overflow-y-auto font-JB rounded-md border border-gray-300">
            <CodeBlock
              language="javascript"
              fileName="EarthCanvas.jsx"
              code={codeString}
            />
          </div>
        )}
      </div>

 <div className="sm:px-32 sm:pt-10 pb-10 font-JB">
      <h2 className="text-3xl font-bold mb-6 sm:ml-1 mt-25">Installation</h2>

      {/* Tabs */}
      <div className="flex items-center border-b border-gray-300 mb-6 text-sm">
        <h3 className="text-base sm:font-semibold font-bold mb-2 sm:ml-2">Install Dependencies</h3>
      </div>

      {/* Install Dependencies */}
      <div className="mb-10 relative">
        <ScriptCopyBtn
                commandMap={{
                  npm: "npm install three @react-three/fiber @react-three/drei",
                  yarn: "yarn add three @react-three/fiber @react-three/drei",
                  pnpm: "pnpm add three @react-three/fiber @react-three/drei",
                  bun: "bun add three @react-three/fiber @react-three/drei",
                }}
              />
      </div>

      {/* Add util file */}
            <div className="relative -mb-15">
              <h3 className="text-base sm:font-semibold font-bold mb-2 ml-2">Update App file</h3>
              <p className="text-sm text-muted-foreground mb-2 ml-2">App.jsx</p>
               <ScriptImport command="<EarthCanvas>"/>
            </div>
    </div>
    </div>
  );
};

export default Spotlight;
