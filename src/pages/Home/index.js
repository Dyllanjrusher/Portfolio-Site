import React, { useEffect } from 'react';
import './index.scss';
import me from './me.jpg';
import '@fontsource/roboto/700.scss';

/** Components */
import Header from '../../components/Header';
import FireBaseScene from '../../components/FireBaseScene';
/** Components */

import { Paper, Typography, Grid } from '@mui/material';
import HTML from '@react-three/drei';

const Home = () => {
    return (
        <div className='root'>

            <Header />
            <FireBaseScene className='scene' >

                <div className='content' id='home-content'>
                    <section id='home-section'>
                        <Paper className="darkText">
                            <Typography variant='h3' align='center'>
                                Hello Future Employer!
                                <img src={me} alt="Logo" />
                            </Typography>
                            <Typography variant='body1' align='center'>
                                Scroll down for more information
                            </Typography>
                        </Paper>
                    </section>
                    <section id='home-section'>
                        <Paper className="darkText">
                            <Typography variant='h4' align='center'>
                                Made with Love in React.
                            </Typography>
                            <br /> <br /> <br /> <br /> 
                            <Typography variant='body1' align='center'>
                                The site is currently a work in progress.
                                <br />
                                Please feel free to visit the About Me, Contact, and Resume pages. 

                                <br /> <br />
                                I wanted to challenge myself, so I learned Three.js to render these 3d models. 
                                
                            </Typography>
                        </Paper>
                    </section>
                </div>
            </FireBaseScene>

        </div>
    )
}

export default Home;