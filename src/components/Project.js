import React from 'react';
// import projects from './projectList';

function Project(props) {
    // const projectObjs = projects.map(project => {
    //     return (
    //         <Project project={{ imgUrl: project.imgUrl, title: project.title, deployLink: project.deployedLink, repositoryLink: project.repositoryLink }} />
    //     )
    // })
    return (
        <div>
            {props.projects.map(project => ( 
                <div key={project._id}>
                    <img src={project.imgUrl}/>
                    <h3>{project.title}</h3>
                    <p><a>Deployed Application: {project.deployedLink}</a></p>
                    <p><a>GitHub Repository: {project.repositoryLink}</a></p>
                </div>
            ))}
        </div>
    )
}


export default Project;