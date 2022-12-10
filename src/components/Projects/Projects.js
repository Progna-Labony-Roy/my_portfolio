import React from "react";
import "./Projects.css";
import project1 from '../Image/project1.png'
import project2 from '../Image/project2.png'
import project3 from '../Image/project3.png'

const Projects = () => {
  return (
  <div className="project-cards bg-slate-200">
      <h1 className="text-5xl mb-16 mx-auto"><span>1.5</span> years in web development</h1>
    <div className="grid gap-20 grid-col-1 lg:grid-cols-3 mx-auto">
      <div className="card w-96 shadow-xl image-full">
        <figure>
          <img src={project1} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">Quiz</h2>
          <p className="text-lg mb-6">Online platform for practicing questions</p>
          <div className="card-actions justify-end">
            <button className="btn btn-accent">See Details</button>
          </div>
        </div>
      </div>
      <div className="card w-96 shadow-xl image-full">
        <figure>
          <img src={project2} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">DentalCare</h2>
          <p className="text-lg mb-6">Is a servie review website</p>
          <div className="card-actions justify-end">
            <button className="btn btn-accent">See Details</button>
          </div>
        </div>
      </div>
      <div className="card w-96 shadow-xl image-full">
        <figure>
          <img src={project3} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">BookStore</h2>
          <p className="text-lg mb-6">A website for reselling second hand</p>
          <div className="card-actions justify-end">
            <button className="btn btn-accent">See Details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Projects;
