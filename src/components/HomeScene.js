import React, { useRef, Suspense, useState } from 'react';

import { Canvas, useFrame } from '@react-three/fiber';
import { Html, PerspectiveCamera, Stars } from '@react-three/drei';
import Sphere from './Sphere';
import Torus from './Torus';

const HomeScene = () => {

    const torusRef = useRef();
    const sphereRef = useRef();

    const [coordIx, setCoordIx] = useState(0);
    const [isOrbiting, setIsOrbiting] = useState(false);

    const numCoords = 35;

    const generateCirclePoints = (r, n) => {
        const thetas = Array(n).fill().map((_, ix) => {
            return Math.PI * 2 * ix / n;
        })

        const coords = thetas.map((theta) => {
            const x = r * Math.cos(theta);
            const z = r * Math.sin(theta);
            return [x, z]
        })

        return coords;
    };

    const coords = generateCirclePoints(-15, numCoords);

    const moveStuff = (wheelDirection, isAnimated) => {
        const stepBy = isAnimated ? .01 : .6;
        if (torusRef.current !== undefined) {
            torusRef.current.rotation.z += stepBy * -wheelDirection;
            torusRef.current.rotation.y += stepBy * -wheelDirection;
        }

        if (sphereRef.current !== undefined) {
            // to prevent negative indexing
            if ((coordIx === 0) && (wheelDirection === -1)) {
                setCoordIx(numCoords - 1);
            } else {
                setCoordIx((coordIx + wheelDirection) % numCoords);
            }
            sphereRef.current.position.x = coords[coordIx][0]
            sphereRef.current.position.z = coords[coordIx][1]
            sphereRef.current.rotation.y += stepBy * wheelDirection;

        }
    };

    const onMouseWheel = (e) => {
        setIsOrbiting(false);
        const wheelDirection = Math.sign(e.deltaY);
        moveStuff(wheelDirection, false);

    };



    const cameraOpts = {
        fov: 75,
        aspect: window.innerWidth / window.innerHeight,
        position: [0, 0, 15],
    };


    return (
        <div className="canvas-container" onWheel={onMouseWheel}>
            <Suspense fallback={<div>Loading...</div>}>
                <Canvas
                    dpr={window.devicePixelRatio}
                    colorManagement
                >
                    <pointLight color={0xf9d71c} position={[20, 20, 20]} />
                    <ambientLight color={0xfffff} intensity={0.3} />
                    <PerspectiveCamera makeDefault {...cameraOpts} />
                    <color attach="background" args={['Black']} />
                    <Stars />


                    <Torus
                        ref={torusRef}
                        moveStuff={moveStuff}
                        setIsOrbiting={setIsOrbiting}
                        isOrbiting={isOrbiting}
                    />
                    <Sphere ref={sphereRef} position={[-15, 0, 0]} />
                </Canvas>
            </Suspense>
        </div>
    )
};

export default HomeScene;


