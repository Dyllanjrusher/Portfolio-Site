import React from "react";
import '../../Sass/Resume.scss';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { Link } from 'react-router-dom';

/** Components */
import Header from '../../components/Header';
/** Components */

import { Paper } from '@mui/material';
const Resume = () => {
    const { height, width } = useWindowDimensions();

    return (
        <div className="resume-grid">

            <Header className="header" />
            <Document className='resume' file='/DyllanUsherResume.pdf'>
                <div className="pdf-download">
                    <Link className="resume-link" to="/DyllanUsherResume.pdf" target="_blank" download>

                        <div className="download-icon">

                            <img src="Icons/download.svg" alt="aws" className="icon" />
                        </div>

                    </Link>
                </div>
                <Page pageNumber={1} renderMode={"svg"} width={2 / 3 * width} />
                <div className="pdf-download">
                    <Link className="resume-link" to="/DyllanUsherResume.pdf" target="_blank" download>

                        <div className="download-icon">

                            <img src="Icons/download.svg" alt="aws" className="icon" />
                        </div>

                    </Link>
                </div>
            </Document>
        </div>
    )
}

export default Resume;