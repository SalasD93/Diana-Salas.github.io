import React from 'react';

function Project(props) {
    return (
        <div>
            {props.projects.map(project => ( 
                <div key={project._id}>
                    <img src={project.imgUrl} alt={project.title} style={project.style}/>
                    <h3>{project.title}</h3>
                    <p><a href={project.deployedLink}>Deployed Application</a></p>
                    <p><a href= {project.repositoryLink}>GitHub Repository</a></p>
                </div>
            ))}
        </div>
    )
}


export default Project;