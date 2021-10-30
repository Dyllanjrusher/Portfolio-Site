import React from "react";
import './index.css';

import { Stars } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';

/** Components */
import Header from '../../components/Header';
/** Components */

import { Paper, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, Box } from '@mui/material';
const InProgress = () => {

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
                                I'm Sorry, This page is not yet available.
                                <br />
                                <br />
                                <br />

                            </Typography>
                            <Typography variant='body1' align='center'>
                                I try to be conscious about balancing my job, life, and my second job, <br />
                                Finding a new job! <br />
                                <br />
                                I plan to add content to this page (and improve the site in general) by March 2022. 

                            </Typography>
                        </Paper>
                    </section>
                </div>
            </div >
        </>
    )
}

export default InProgress;