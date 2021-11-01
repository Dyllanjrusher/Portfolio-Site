import React from 'react';
import '../../Sass/Home.scss';

/** Components */
import Header from '../../components/Header';
import HomeScene from '../../components/HomeScene';
import Card from '../../components/Card';
import ContactForm from '../../components/ContactForm';
import FireBaseScene from '../../components/FireBaseScene';
/** Components */


import { Paper, Typography, Grid } from '@mui/material';

const Home = () => {


    return (
        <>
            <div className="background">

                <div className="home-grid">
                    <div className="header">

                        <Header />
                    </div>
                    <div className="scene">
                        <HomeScene />
                    </div>
                    <div className="about">
                        <Card
                            backHeader="About Me"
                            header="About Me"
                            subHeader="A Little Bit"
                            details={
                                <div className='card-body'>
                                    <h3 className='card-header'>
                                        I'm a Software Developer<span />,
                                    </h3>
                                    <h3 className='card-subheader'>
                                        But I will always be a student.
                                    </h3>
                                    <p className='card-content'>
                                        I am a self starter who likes to dip their toes in a little bit of everything. Having gone to school for Mathematics,
                                        my transition into the world of the discrete was only natural.
                                    </p>
                                    <p className='card-content'>
                                        When faced with an overwhelming task, I'm not afraid to roll my sleeves up and get the job done. Besides,
                                        that usually involves learning a new thing or two along the way. I value working in an opinionated
                                        development environment with colleagues who care about getting the job done correctly from the start.
                                    </p>
                                    <p className='card-content'>
                                        In my freetime you'll find me at the rock wall, playing guitar, petting my cat, learning Rust, or
                                        managing my half of a 3/8 acre vegtable farm just outside Lincoln, NE.
                                    </p>
                                </div>
                            }
                        />
                    </div>
                    <div className="work">
                        <Card
                            backHeader="Experience"
                            header="Experience"
                            subHeader="Current Relevant"
                            details={
                                <div className='card-body'>
                                    <h3 className='card-header'>
                                        Please Checkout my Resume For Details
                                    </h3>
                                    <p className='card-content'>
                                        Right now, I'm owning a refactoring effort for ClearedTalent.com, 
                                        a React, Node, Mysql website hosted on Azure. Unfortunately, some of the
                                        components are upwards of 1500 lines long! The project is enjoyable
                                        because I get to rethink the design for both the frontend and backend.
                                        Although it's difficult, I enjoy diving into the weeds.
                                    </p>
                                    <p className='card-content'>
                                       Also, I'm working with Synchrony Bank (representing NLB Services), to refactor & add functionality to their Alexa app. 
                                       Working with them has familiarized me with the Agile development process.
                                    </p>
                                    <p className='card-content'>
                                        However, having worked in a variety of different environments (some not on resume), I've gained valuable
                                        work experience, even from my jobs that had nothing to do with development!
                                    </p>
                                </div>
                            }
                        />
                    </div>
                    <div className="skills ">
                        <section className="home-block">
                            <h3 className="title"> Technologies </h3>
                            <div className="skill-icons">

                                <div className="icon">

                                    <img src="Icons/aws.svg" alt="aws" className="icon" />
                                </div>

                                <div className="icon">

                                    <img src="Icons/azure.svg" alt="azure" className="icon" />
                                </div>

                                <div className="icon">

                                    <img src="Icons/git.svg" alt="git" className="icon" />
                                </div>

                                <div className="javascript">

                                    <img src="Icons/javascript.svg" alt="javascript" className="icon" />
                                </div>
                            </div>
                            <div className="skill-icons">

                                <div className="icon">

                                    <img src="Icons/mysql.svg" alt="mysql" className="icon" />
                                </div>
                                <div className="icon">

                                    <img src="Icons/node.svg" alt="node" className="icon" />
                                </div>
                                <div className="icon">

                                    <img src="Icons/python.svg" alt="python" className="icon" />
                                </div>
                                <div className="icon">

                                    <img src="Icons/react.svg" alt="react" className="icon" />
                                </div>
                            </div>
                            <div className="skill-icons">

                                <div className="typescript">

                                    <img src="Icons/typescript.svg" alt="typescript" className="icon" />
                                </div>
                                <div className="vue">

                                    <img src="Icons/vue.svg" alt="vue" className="icon" />
                                </div>
                                <div className="stackoverflow">

                                    <img src="Icons/stackoverflow.svg" alt="stackoverflow" className="icon" />
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="contact">
                        <section className="form-block">
                            <ContactForm />
                        </section>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;