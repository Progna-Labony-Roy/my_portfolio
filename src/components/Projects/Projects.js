import React, { useEffect, useState } from "react";
import "./Projects.css";
import ProjectCard from './ProjectCard'

const Projects = () => {
  const [projects,setProjects]=useState([]);

  useEffect(()=>{
    fetch("project.json")
    .then(res=> res.json())
    .then(data=> {
      // console.log(data);
      setProjects(data)
    })
  },[])
  

  return (
    <div className="" id="project-id">
      <h1 className="mt-5 mx-auto text-center">
        My Projects
      </h1>
    <div className="project-cards">
    {
      projects?.length && projects.map(project => <ProjectCard key={project.project_id} project={project}></ProjectCard>)
    }
    </div>
    </div>
  );
};

export default Projects;
