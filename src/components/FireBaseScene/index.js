import React, { Suspense, useState, useRef } from 'react';

import resume from './resume.pdf';
// import './index.scss';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Stars, Html, Plane } from "@react-three/drei";
import Header from '../../components/Header';
import { Paper, Typography } from '@mui/material';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
/** Components */
import Torus from '../Torus';
import BackgroundLines from '../BackgroundLines';
// import Sphere from '../Sphere';
/** Components */


const Sphere = React.forwardRef((props, ref) => {
    const [colorMap, normalMap] = useLoader(TextureLoader, [
        'material_1_baseColor.jpeg',
        'material_1_normal.jpeg'
    ]);

    return (
        <mesh ref={ref ? ref : undefined} position={props.position}>

            <sphereGeometry args={[3, 32, 32]} />
            <Html center>
                {props.children}
            </Html>
            <meshStandardMaterial
                map={colorMap} normalMap={normalMap}
            />
        </mesh>
    )
});

const FireBaseScene = (props) => {

    const { children } = props;
    const cameraRef = useRef();
    const sphereRef = useRef();
    const contentRef = useRef();
    const torusRef = useRef();

    const [prevTop, setPrevTop] = useState(0);

    const cameraOpts = {
        fov: 75,
        aspect: window.innerWidth / window.innerHeight,
        position: [0, 0, 15],
    };
    const torusArgs = [5, .75, 178, 8, 5, 3];

    const onMouseWheel = (e) => {
        const wheelDirection = Math.sign(e.deltaY);
        // const distFromTop = window.pageYOffset + contentRef.current.getBoundingClientRect();
        const distFromTop = contentRef.current.getBoundingClientRect().top;

        if (sphereRef.current !== undefined) {
            sphereRef.current.rotation.z += .3 * wheelDirection;
            sphereRef.current.rotation.y += .15 * wheelDirection;
        }
        //     sphereRef.current.rotation.z += .8 * -wheelDirection;
        cameraRef.current.position.y += 1.3 * -wheelDirection;
        // torusRef.current.rotation.z += .05 * wheelDirection;
        // }
    }

    return (
        <div className="root">

            <Header />
            <div onWheel={onMouseWheel} ref={contentRef}>
                <div id="canvas-container">
                    <Canvas
                        dpr={window.devicePixelRatio}
                        colorManagement
                    >
                        <Stars />
                        <PerspectiveCamera ref={cameraRef} makeDefault {...cameraOpts} />
                        <mesh ref={torusRef}>
                            <torusKnotGeometry
                                args={torusArgs}
                            />
                            <Html center>
                                <div className="container">
                                    <h1 className="title">Hey There!</h1>
                                    <p className="text">Please scroll down to learn a little bit about me.</p>
                                    <br />
                                    <p className="tiny-text">*Made with love in React</p>
                                </div>
                            </Html>
                            <meshStandardMaterial color='#1E5128' />
                        </mesh>

                        <Suspense fallback=
                            {
                                <Html>
                                    <div> Loading ...</div>
                                </Html>
                            }
                        >
                            <Sphere ref={sphereRef} position={[0, -17, 7]}>
                                <div className="container">
                                    <h3 className="body-header">I'm a Self Starter,</h3>
                                    <h3 className="body-header">Software Developer,</h3>
                                    <h3 className="body-header">and Lifelong Student.</h3>
                                </div>
                            </Sphere>
                            <Sphere position={[0, -30, 7]} >
                                <h3 className="body-header">For Web Development</h3>
                                <h3 className="body-header">I've Been Using</h3>
                                <p className="tiny-text">‣ React.js</p>
                                <p className="tiny-text">‣ Vue.js</p>
                                <p className="tiny-text">‣ Node.js</p>

                            </Sphere>
                            <Sphere position={[0, -43, 7]} >
                                <h3 className="body-header">With Python, I Enjoy</h3>
                                <p className="tiny-text">‣ Data Cleaning</p>
                                <p className="tiny-text">‣ Visualizing Data</p>
                                <p className="tiny-text">‣ Hypothesis Testing </p>
                                <p className="tiny-text">‣ Supervised Learning</p>
                                <p className="tiny-text">‣ Unsupervised Learning</p>
                                <p className="tiny-text">‣ Language Processing</p>
                                <p className="tiny-text">‣ Web Scraping</p>
                                <p className="tiny-text">‣ Topological Data Analysis</p>
                            </Sphere>

                            <Sphere position={[0, -56, 7]} >
                                <h3 className="body-header">I'm Also</h3>
                                <h3 className="body-header">Interested In</h3>
                                <p className="tiny-text">‣ Rock Climbing </p>
                                <p className="tiny-text">‣ Music </p>
                                <p className="tiny-text">‣ Math </p>
                                <p className="tiny-text">‣ Gardening </p>
                            </Sphere>

                            <Sphere position={[0, -69, 7]} >
                                <h3 className="body-header">I'm Learning</h3>
                                <h3 className="body-header">More About</h3>
                                <p className="tiny-text">‣ Reinforcement Learning </p>
                                <p className="tiny-text">‣ UI Design </p>
                                <p className="tiny-text">‣ Rust </p>
                                <p className="tiny-text">‣ Systems Design </p>
                            </Sphere>
                            <mesh position={[0, -95, 0]}>
                                <sphereGeometry />
                                <Html center>
                                    {resume && <iframe id="resume" src={resume} />}
                                </Html>
                                <meshBasicMaterial />
                            </mesh>
                        </Suspense>
                        <color attach="background" args={['Black']} />
                        <pointLight color={0xf9d71c} position={[20, 20, 20]} />
                        <ambientLight color={0xfffff} intensity={0.3} />

                    </Canvas>
                </div>
                {children}
            </div>
        </div>
    )
};


export default FireBaseScene;