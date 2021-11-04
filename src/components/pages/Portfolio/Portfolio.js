import React from 'react';
import Project from '../../Project/Project';
import projects from '../../../projectList';
import './PortfolioStyles.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <h1 id="portfolio-header">Porfolio</h1>
            <Project projects={projects} />
        </section>
    )
}

export default Portfolio;