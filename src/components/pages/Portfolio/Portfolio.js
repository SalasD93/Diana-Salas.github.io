import React from 'react';
import Project from '../../Project/Project';
import projects from '../../../projectList';
// import {} from './PortfolioStyles';

function Portfolio() {
    return (
        <div className="portfolio">
            Porfolio
            <Project projects={projects} />
        </div>
    )
}

export default Portfolio;