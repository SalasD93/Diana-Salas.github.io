import React from 'react';
import Pdf from './Documents/Diana_Salas_Resume_Updated.pdf';
// import {} from './ResumeStyles';

function Resume() {
    return (
        <div>
            Resume
            <a href={Pdf} target="_blank" rel="noreferrer">Download my full resume</a>
        </div>
    )
}

export default Resume;