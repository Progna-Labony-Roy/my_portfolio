import React from 'react';
import project1 from "../Image/project1.png";
import project2 from "../Image/project2.png";
import project3 from "../Image/project3.png";
import './ProjectCard.css'

const ProjectCard = (props) => {
  const {image,name,title}=props.project;

    return (
        <div className='project-card'>
           <img src={image} alt="Project-1" /> 
           
           <div className='mt-5'>
               <h3 className='font-semibold'>{name}</h3>
               <h4  className='font-light text-white text-sm'>{title}</h4>
           </div>
           <div>
           </div>
           <button className='btn btn-sm details-btn mt-5'>Details</button>
      </div>
      
    );
};

export default ProjectCard;