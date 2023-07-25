import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";

// This is a simple component of a 3D model of Earth where the continents are orange.
export const OrangeEarth = () => {
  const Earth = (props) => {
    const mesh = useRef();
    // The earth will continually rotate.
    useFrame(() => {
      mesh.current.rotation.y += 0.003;
    });

    const texture = useMemo(
      () =>
        new THREE.TextureLoader().load("/earth3JS/orange-earth-vector-map.png"),
      []
    );

    return (
      <mesh {...props} ref={mesh} scale={[2, 2, 2]}>
        <sphereBufferGeometry args={[1, 26, 26]} />

        <meshStandardMaterial
          attach="material"
          roughness={0.55}
          metalness={0.1}
          dithering={true}
        >
          <primitive attach="map" object={texture} />
        </meshStandardMaterial>
      </mesh>
    );
  };

  return (
    <>
      <Canvas camera={{ position: [0, 0, 8.5], fov: 40 }} style={{width: 50, height: 50}}>
        <Earth position={[0, -0.1, 0]} />
        <pointLight
          position={[0, 8, 15]}
          intensity={2}
          angle={0}
          penumbra={0}
          color="#fff9f0"
        />
      </Canvas>
    </>
  );
};

export default OrangeEarth;
