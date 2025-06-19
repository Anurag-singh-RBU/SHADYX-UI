"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Mesh, Object3D } from "three";

const Earth: React.FC = () => {
  const earth = useGLTF("/planet/scene.gltf");

  earth.scene.traverse((node: Object3D) => {
    if ((node as Mesh).isMesh) {
      (node as Mesh).castShadow = true;
      (node as Mesh).receiveShadow = true;
    }
  });

  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position={[0, 0, 0]}
      rotation-y={0}
    />
  );
};

const EarthCanvas: React.FC = () => {
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
      }}
    >
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
        shadow-camera-bottom={-10}
      />

      <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2.5, 0]}
      >
        <planeGeometry args={[50, 50]} />
        <shadowMaterial opacity={0.3} />
      </mesh>

      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.8}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
