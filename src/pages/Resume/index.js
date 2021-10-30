import React from "react";
import './index.scss';
import resume from './resume.pdf';
import { Stars, Html } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';

/** Components */
import Header from '../../components/Header';
/** Components */

import { Paper } from '@mui/material';
const Contact = () => {

    return (
        <>
            <Header />
            <div id="canvas-container">

                <Canvas dpr={window.devicePixelRatio}>
                    <color attach="background" args={['Black']} />
                    <mesh position={[0, -1, 0]}>
                        <sphereGeometry />
                        <Html center>
                            {resume && <iframe id="resume" src={resume} />}
                        </Html>
                        <meshBasicMaterial />
                    </mesh>
                    <Stars />
                </Canvas>
            </div >
        </>
    )
}

export default Contact;