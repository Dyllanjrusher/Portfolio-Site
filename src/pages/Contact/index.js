import React from "react";
import './index.scss';

import { Stars } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';

/** Components */
import Header from '../../components/Header';
/** Components */

import { Paper, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, Box } from '@mui/material';
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
                            <Typography variant='h4' align='center'>
                                Contact Information
                                <br />
                                <br />
                                <br />
                                
                            </Typography>
                            <Typography variant='h6' align='center'>
                                Dyllanjrusher00@gmail.com
                                <br/>
                                910-358-6447
                                <br />
                                Or if you'd prefer linkedin:
                                <br />
                                <a href="https://www.linkedin.com/in/dyllan-usher/">https://www.linkedin.com/in/dyllan-usher/</a>
                            </Typography>
                        </Paper>
                    </section>
                </div>
            </div >
        </>
    )
}

export default Contact;