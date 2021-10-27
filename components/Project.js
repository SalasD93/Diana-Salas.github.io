import React from 'react';


function Project(props) {
    return (
        <div>
            <img src={props.projects.imgUrl}/>
            <h3>{props.projects.title}</h3>
            <a>Deployed Application: {props.projects.deployedLink}</a>
            <a>GitHub Repository: {props.projects.repositoryLink}</a>
        </div>
    )
}


export default Project;