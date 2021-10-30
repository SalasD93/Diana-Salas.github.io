import React from 'react';
import Project from '../Project';
import projects from '../../projectList';

function Portfolio() {
    return (
        <div className="portfolio">
            Porfolio
            <Project projects={projects} />
        </div>
    )
}

export default Portfolio;