import React from "react";
import './index.scss';

import { Stars } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';

/** Components */
import Header from '../../components/Header';
/** Components */

import { Paper, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, Box } from '@mui/material';
const About = () => {
    const skills = ['React.js', 'Node.js', 'Python', 'Vue.js'];

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <>
            <Header />
            <div id="canvas-container">

                <Canvas dpr={window.devicePixelRatio}>
                    <color attach="background" args={['Black']} />

                    <Stars />
                </Canvas>

                <div className='content' id='about-content'>
                    <section id='about-section'>
                        <Paper className="darkText">
                            <Typography variant='h4' align='center'>
                                I'm a Software Developer
                            </Typography>
                            <br />
                            <br />
                            <Typography variant='body1' align='center'>
                                I have experience in:

                                <List sx={{ bgcolor: 'background.paper' }} >
                                    {skills.map((label) => {
                                        const labelId = skills.indexOf(label);

                                        return (
                                            <ListItem
                                                key={label}
                                                disablePadding
                                            >
                                                <ListItemButton role={undefined} onClick={handleToggle(label)} dense>
                                                    <ListItemIcon>
                                                        <Checkbox
                                                            edge="start"
                                                            checked={checked.indexOf(label) !== -1}
                                                            tabIndex={-1}
                                                            disableRipple
                                                            inputProps={{ 'aria-labelledby': labelId }}
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText id={labelId} primary={label} />
                                                </ListItemButton>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </Typography>
                        </Paper>
                    </section>
                    <section id='about-section'>
                        <Paper className="darkText">
                            <Typography variant='h4' align='center'>
                                But I will always be a Student.
                            </Typography>
                            <br /> <br />
                            <Typography variant='body1' align='center'>
                                Having worked in a variety of different environments, I've gained valuable
                                work experience, even from my jobs that had nothing to do with development!
                                <br />
                                <br />
                                Projects that I've designed, managed, and developed have ranged in scope <br />
                                from your everyday React, Node, Mysql website, to attempting to redefining <br />
                                global climate boundaries using unsupervised machine learning techniques. <br />

                                <br />
                                <br />
                                In addition to my technical experience, <br />
                                I enjoy collaborating with other passionate team members, <br />
                                proposing ideas for new product features, <br />
                                and giving presentations of my findings. 
                            </Typography>
                        </Paper>
                    </section>

                </div>

            </div >
        </>
    )
}

export default About;