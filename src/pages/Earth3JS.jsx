import React, { useRef, useMemo, useState, useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "@/utils/MUITheme";
import NavBar from "@/components/navbar";
import { Canvas, useFrame } from "react-three-fiber";
import { Text, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
// import "./App.css";

const Earth3JS = () => {
  const clouds3k = "/Earth3JS/3k_earth_clouds.webp";
  const clouds1080p = "/Earth3JS/1080p_earth_clouds.webp";
  // https://www.solarsystemscope.com/textures/
  // https://www.pngkey.com/detail/u2w7w7t4r5e6q8y3_earth-clouds-2048-earth-clouds-texture-png/
  const TwoKEarth = "/Earth3JS/2k_earth_daymap.webp";
  const FourKEarth = "/Earth3JS/4k_earth_daymap.webp";
  const moon720p = "/Earth3JS/720p_moon.webp";
  const moon360p = "/Earth3JS/360p_moon.webp";
  const [textSaysLow, setTextSaysLow] = React.useState(true);
  const [earthTextureToUse, setEarthTextureToUse] = React.useState(FourKEarth);
  const [moonTextureToUse, setMoonTextureToUse] = React.useState(moon720p);
  const [cloudsTextureToUse, setCloudsTextureToUse] = React.useState(clouds3k);
  const [earthTrisAmount, setEarthTrisAmount] = React.useState(128);
  const [moonTrisAmount, setMoonTrisAmount] = React.useState(32);

  /**
   * Function to toggle the graphics settings of various elements from highest
   * to lowest. It affects tri counts and texture sizes. The tri count of the
   * Earth sphere does not lower since it would clip through the clouds sphere.
   */
  const toggleGraphics = () => {
    if (earthTextureToUse === TwoKEarth) {
      setEarthTextureToUse(FourKEarth);
    } else {
      setEarthTextureToUse(TwoKEarth);
    }

    if (cloudsTextureToUse === clouds3k) {
      setCloudsTextureToUse(clouds1080p);
    } else {
      setCloudsTextureToUse(clouds3k);
    }

    if (earthTextureToUse === moon360p) {
      setMoonTextureToUse(moon720p);
    } else {
      setMoonTextureToUse(moon360p);
    }

    if (earthTrisAmount === 128) {
      setEarthTrisAmount(32);
    } else {
      setEarthTrisAmount(128);
    }

    if (moonTrisAmount === 32) {
      setMoonTrisAmount(16);
    } else {
      setMoonTrisAmount(32);
    }

    if (textSaysLow) {
      setTextSaysLow(false);
    } else {
      setTextSaysLow(true);
    }
  };

  const Earth = (props) => {
    const mesh = useRef();
    useFrame(() => {
      mesh.current.rotation.y += 0.0008;
    });

    const texture = useMemo(
      () => new THREE.TextureLoader().load(earthTextureToUse),
      []
    );

    return (
      <mesh {...props} ref={mesh} scale={[2, 2, 2]}>
        <sphereBufferGeometry args={[1, earthTrisAmount, earthTrisAmount]} />
        {textSaysLow && (
          <meshStandardMaterial
            attach="material"
            roughness={0.7}
            metalness={0.05}
            dithering={true}
          >
            <primitive attach="map" object={texture} />
          </meshStandardMaterial>
        )}
        {!textSaysLow && (
          <meshBasicMaterial attach="material">
            <primitive attach="map" object={texture} />
          </meshBasicMaterial>
        )}
      </mesh>
    );
  };

  /**
   * The clouds sphere is slightly larger than the Earth sphere. The Earth sphere
   * goes inside the clouds sphere.
   */
  const Clouds = (props) => {
    const mesh = useRef();
    useFrame(() => {
      mesh.current.rotation.y += 0.001;
    });

    const texture = useMemo(
      () => new THREE.TextureLoader().load(cloudsTextureToUse),
      []
    );

    return (
      <mesh {...props} ref={mesh} scale={[2.005, 2.005, 2.005]}>
        <sphereBufferGeometry transparent={true} args={[1, 64, 64]} />
        {textSaysLow && (
          <meshStandardMaterial attach="material" transparent={true}>
            <primitive attach="map" object={texture} />
          </meshStandardMaterial>
        )}
        {!textSaysLow && (
          <meshBasicMaterial attach="material" transparent={true}>
            <primitive attach="map" object={texture} />
          </meshBasicMaterial>
        )}
      </mesh>
    );
  };

  // The moon orbits and rotates slightly.
  const Moon = (props) => {
    let angle = 0;
    let radius = 5;
    const mesh = useRef();
    useFrame(() => {
      mesh.current.rotation.y -= 0.001;
      angle += Math.acos(1 - Math.pow(0.01 / radius, 2) / 2);
      mesh.current.position.z = radius * Math.cos(angle);
      mesh.current.position.x = radius * Math.sin(angle);
    });

    const texture = useMemo(
      () => new THREE.TextureLoader().load(moonTextureToUse),
      []
    );

    return (
      <mesh {...props} ref={mesh} scale={[0.4, 0.4, 0.4]}>
        <sphereBufferGeometry
          transparent={true}
          args={[1, moonTrisAmount, moonTrisAmount]}
        />

        {textSaysLow && (
          <meshStandardMaterial attach="material" roughness={1}>
            <primitive attach="map" object={texture} />
          </meshStandardMaterial>
        )}
        {!textSaysLow && (
          <meshBasicMaterial attach="material">
            <primitive attach="map" object={texture} />
          </meshBasicMaterial>
        )}
      </mesh>
    );
  };

  const SettingsButton = (props) => {
    /**
     * This tracks wether mouse cursor is on the button so that the cursor can
     * change to a pointer.
     */
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
      document.body.style.cursor = hovered ? "pointer" : "auto";
    }, [hovered]);
    const mesh = useRef();

    useFrame(() => {
      if (textSaysLow) {
        mesh.current.rotation.x = Math.sin(Date.now() * 0.001) * Math.PI * 0.01;
        mesh.current.rotation.y =
          Math.sin(Date.now() * 0.001) * Math.PI * 0.004;
        mesh.current.rotation.z =
          Math.sin(Date.now() * 0.001) * Math.PI * 0.015;
      }
    });

    return (
      <mesh
        {...props}
        ref={mesh}
        scale={[0.15, 0.15, 0.15]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <Text depthTest={true} fillOpacity={0.5}>
          Toggle {textSaysLow ? "Low" : "High"} Settings
        </Text>
      </mesh>
    );
  };

  return (
    <>
      <Head>
        <title>Earth 3JS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ maxHeight: "100vh", overflow: "hidden" }}>
        <ThemeProvider theme={MainTheme}>
          <NavBar/>
          <Canvas
            camera={{ position: [0, 0, 8.5], fov: 40 }}
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
              backgroundImage: "url('/src/images/8k_stars.webp')",
              backgroundSize: "cover",
              backgroundColor: "black",
              boxShadow:
                "0 0 200px rgba(0,0,0,0.4) inset, 0 0 300px rgba(0,0,0,1) inset",
            }}
          >
            <Earth position={[0, -0.1, 0]} />
            <Clouds position={[0, -0.1, 0]} />
            <Moon position={[3, 0, 2]} />
            <SettingsButton
              position={[-1.75, 2.9, 0]}
              onClick={toggleGraphics}
            />
            {textSaysLow && (
              <>
                <ambientLight intensity={0.1} color="#ffffff" />
                <spotLight
                  position={[10, 10, 10]}
                  angle={0.15}
                  penumbra={1}
                  castShadow
                  color="#fffff5"
                />
                <pointLight
                  position={[-5, 5, 1]}
                  intensity={0.2}
                  angle={0}
                  penumbra={0}
                  castShadow
                  color="#fffff5"
                />
              </>
            )}
            <OrbitControls />
          </Canvas>
        </ThemeProvider>
      </main>
    </>
  );
};

export default Earth3JS;
