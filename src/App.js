import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Header from './components/Header';
import Project from './components/Project';
// import Footer from './components/Footer';
import projects from './projectList';

function App() {
  const projectObjs = projects.map(project => {
    return (
      <Project project={{ imgUrl: project.imgUrl, title: project.title, deployLink: project.deployedLink, repositoryLink: project.repositoryLink }} />
    )
  })
  return (
    <div>
      {/* <Header /> */}
      <Project projects={projects} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
