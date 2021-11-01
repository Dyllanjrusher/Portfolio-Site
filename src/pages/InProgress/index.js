import React from "react";
import '../../Sass/Wip.scss';

/** Components */
import Header from '../../components/Header';
/** Components */

const InProgress = () => {

    return (
        <div className="wip-grid">

            <Header className="header"/>
            <div className="wip-container">
                <h1 className='wip-header'>I'm sorry, this page is not yet available.</h1>
                <p className='wip-body'>
                    I try to be conscious about balancing my job, life, and my second job, Finding a new job!
                     I plan to add content to this page in the near future.
                </p>
            </div>
        </div>
    )
}

export default InProgress;