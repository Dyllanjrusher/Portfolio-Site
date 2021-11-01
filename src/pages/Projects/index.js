import React from 'react';
import Header from '../../components/Header';
import '../../Sass/Projects.scss';
import Card from '../../components/Card';
import ReactPlayer from "react-player"
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Projects = () => {

    const { height, width } = useWindowDimensions();

    return (
        <div className="project-grid">
            <div className="header">
                <Header />
            </div>

            <div className="card1">
                <Card
                    backHeader={
                        <a href='https://github.com/Dyllanjrusher/Unsupervised_Climate_Analysis_West_Africa'>
                            <img src="Icons/git.svg" alt="git" className="icon" />
                        </a>
                    }
                    header="Climate Zones"
                    subHeader="Unsupervised Analysis of"
                    details={
                        <div className='card-body'>
                            <p className='card-content'>
                                The Köppen climate classification scheme explicitly defines Earth's climate zones. What happens when we instead let the global climate data define it's own
                                climate boundaries?
                            </p>
                            <div className="player-wrapper">

                                <ReactPlayer className='player'
                                    url="https://www.youtube.com/watch?v=Cg3w6PVXA5g&t=21s"
                                    width='100%'
                                    height='100%'
                                    controls
                                />
                            </div>
                        </div>
                    }
                />
            </div>
            <div className="card2">
                <Card
                    backHeader={
                        <a href='https://github.com/Dyllanjrusher/Portfolio-Site'>
                            <img src="Icons/git.svg" alt="git" className="icon" />
                        </a>
                    }
                    header="Portfolio Website"
                    subHeader="Fun Times With This"
                    details={
                        <div className='card-body'>
                            <p className='card-content'>
                                I really enjoyed making this site because it challenged me to style effectively.
                            </p>
                            <p className='card-content'>
                                Thus far, the project is built on react.js for the frontend, Three.js for 3d rendering,
                                email.js for the email service in the contact form, and sass for styling.
                            </p>
                            <p className='card-content'>
                                In the future, I'd like to setup an
                                endpoint for downloading the resume instead of having the frontend do it. I also want to add
                                the same website built in Vue.js just for fun. Furthermore, I want to experiment with embedding an application
                                built with Rust using WebAssembly as I think Wasm is the future of highly optimized computation on the web!
                            </p>
                        </div>
                    }
                />
            </div>
            <div className="card3">
                <Card
                    backHeader="Distributor Inventories"
                    header="Distributor Inventories"
                    subHeader="Keeping Tabs Of"
                    details={
                        <div className='card-body'>
                            <p className='card-content'>
                                My roommate and I started doing freelance work to supplement our incomes.
                                Our first client was Spaz Cycle, a local motorcycle shop.
                                We needed to pull inventory information from several different distributors
                                on a regular basis and store them in a database for analysis.
                            </p>
                            <p className='card-content'>
                                This project exposed me to the benefits of statically typed languages, as we used Typescript for the backend.
                                Unfortunately, due to the chaos of backorders caused by supply chain shortages,
                                this project has been put on hold.
                            </p>
                            <p className='card-content'>
                                When given the go ahead, we will continue developing the frontend of the tool in Vue.js, hosted on AWS.
                            </p>
                        </div>
                    }
                />
            </div>
            <div className="card4">
                <Card
                    backHeader={
                        <a href='https://github.com/Dyllanjrusher/Human_Activity_Recognition'>
                            <img src="Icons/git.svg" alt="git" className="icon" />
                        </a>
                    }
                    header="Assisted Living"
                    subHeader="Human Activity Prediction for"
                    details={
                        <div className='card-body'>
                            <p className='card-content'>
                                Smart home technology can and will continue to revolutionize assisted living environments. Given the diligent
                                protection of privacy, we can use smart home data to assist disabled people in their day to day tasks.
                            </p>
                            <p className='card-content'>
                                This project involved taking labelled smart home sensor data and predicting a category of activity. For instance, cooking,
                                cleaning, etc. I used several supervised models and the random forest classification model performed 
                                the best. 
                            </p>
                            <p className='card-content'>
                                This project was challenging because of the severe class imbalance and the model's dependency on the individual home layout. 
                                In the future, I want to challenge myself to develop a more generalizable model.
                            </p>
                        </div>
                    }
                />
            </div>
        </div>
    )
};

export default Projects;
