import React from 'react';

function Project(props) {
    return (
        <div className="project-main">
            {props.projects.map(project => ( 
                <div key={project._id}>
                    <img src={project.imgUrl} alt={project.title} style={project.style}/>
                    <h3>{project.title}</h3>
                    <p>{project.deployedLink ? <a href={project.deployedLink}>Deployed Application</a> : <a href={project.videoLink}>Walkthrough Video</a>}</p>
                    <p><a href= {project.repositoryLink}>GitHub Repository</a></p>
                </div>
            ))}
        </div>
    )
}


export default Project;