import React, { useEffect, useState } from "react";
import "./Projects.css";
import ProjectCard from './ProjectCard'
import { useLoaderData } from "react-router-dom";

const Projects = () => {
  const projects=useLoaderData("")
  console.log(projects)
  // const [projects,setProjects]=useState([]);

  // useEffect(()=>{
  //   fetch("project.json")
  //   .then(res=> res.json())
  //   .then(data=> {
  //     // console.log(data);
  //     setProjects(data)
  //   })
  // },[])
  

  return (
    <div className="" id="project-id">
      <h2 className="pt-10 text-2xl mx-auto text-center">
        My Projects
      </h2>
    <div className="project-cards">
    {
      projects?.length && projects.map(project => <ProjectCard key={project._id} project={project}></ProjectCard>)
    }
    </div>
    </div>
  );
};

export default Projects;
