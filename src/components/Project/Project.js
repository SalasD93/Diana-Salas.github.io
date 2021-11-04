import React from 'react';
import LazyLoad from 'react-lazyload';
import './ProjectStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project(props) {
    return (
        <section className="project-main" id="cards-container">
            {props.projects.map(project => ( 
                <LazyLoad offset={100} className="project-cards" key={project._id}>
                    <img id="project-img" src={project.imgUrl} alt={project.title} style={project.style} />
                    {project.deployedLink ? <a href={project.deployedLink}><h2 className="show">{project.title}</h2></a> : <a href={project.videoLink}><h2 className="show">{project.title}</h2></a>}
                    <a className="show" href= {project.repositoryLink}><FontAwesomeIcon className="fa-4x" icon={faGithub} /></a>
                    <h3 className="show">{project.description}</h3>
                </LazyLoad>
            ))}
        </section>
    )
}


export default Project;