import React, { Suspense, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Stars } from "@react-three/drei";

/** Components */
import RotatingTorus from '../RotatingTorus';
import BackgroundLines from '../BackgroundLines';
import Sphere from '../Sphere';
/** Components */

import './index.css';

const FireBaseScene = (props) => {

    const { children } = props;
    const cameraRef = useRef();
    const sphereRef = useRef();
    const contentRef = useRef();

    const [prevTop, setPrevTop] = useState(0);

    const cameraOpts = {
        fov: 75,
        aspect: window.innerWidth / window.innerHeight,
        position: [12, 2.4, 18],
    };

    const onMouseWheel = (e) => {
        const wheelDirection = Math.sign(e.deltaY);
        // const distFromTop = window.pageYOffset + contentRef.current.getBoundingClientRect();
        const distFromTop = contentRef.current.getBoundingClientRect().top;

        console.log(distFromTop);
        if (prevTop !== distFromTop) {

            setPrevTop(distFromTop);
            if (typeof sphereRef != "undefined" && sphereRef.current.rotation) {

                sphereRef.current.rotation.x += .03 * wheelDirection;
                sphereRef.current.rotation.y += .04 * wheelDirection;
                sphereRef.current.rotation.z += .8 * -wheelDirection;

                sphereRef.current.position.x += .1 * wheelDirection;
                sphereRef.current.position.z += 1.4 * wheelDirection;
            }

            cameraRef.current.position.x += .5 * -wheelDirection;
            cameraRef.current.position.y += .1 * -wheelDirection;
            cameraRef.current.position.z += 1.5 * wheelDirection;
        }

    }




    return (
        <div onWheel={onMouseWheel} ref={contentRef}>
            <div id="canvas-container">
                <Canvas dpr={window.devicePixelRatio}>
                    <PerspectiveCamera ref={cameraRef} makeDefault {...cameraOpts} />
                    <Suspense fallback={null}>
                        <color attach="background" args={['Black']} />
                        <pointLight color={0xf9d71c} position={[20, 20, 20]} />
                        <ambientLight color={0xfffff} intensity={0.3} />
                        <RotatingTorus />
                        <Sphere ref={sphereRef} />
                        <Stars />
                    </Suspense>
                </Canvas>
            </div>
            {children}
        </div>
    )
}

export default FireBaseScene;