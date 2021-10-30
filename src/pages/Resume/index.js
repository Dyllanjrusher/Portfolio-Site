import React from "react";
import './index.css';
import resume from './resume.pdf';
import { Stars } from "@react-three/drei";
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

                    <Stars />
                </Canvas>

                <div className='content' id='contact-content'>
                    <section id='contact-section'>
                        <Paper className="darkText">
                            {resume && <iframe id="resume" src={resume} />}   
                        </Paper>
                    </section>
                </div>
            </div >
        </>
    )
}

export default Contact;