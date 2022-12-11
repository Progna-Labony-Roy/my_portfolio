import React from "react";
import "./Projects.css";
import project1 from "../Image/project1.png";
import project2 from "../Image/project2.png";
import project3 from "../Image/project3.png";

const Projects = () => {
  return (
    <div className="project-cards" id="project-id">
      <h1 className="text-5xl mb-16 mx-auto">
        <span>1.5</span> years in web development
      </h1>
      <div className="grid gap-20 grid-col-1 lg:grid-cols-3 mx-auto">
        <div className="card w-96 bg-neutral text-neutral-content shadow-xl">
          <figure>
            <img src={project1} alt="project1" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Quiz
            </h2>
            <p>Online learning and quiz practice platform </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline py-3">𝗥𝗲𝗮𝗰𝘁𝗝𝗦</div>
              <div className="badge badge-outline py-3">𝗕𝗼𝗼𝘁𝘀𝘁𝗿𝗮𝗽</div>
              <div className="badge badge-outline py-3">toastify</div>
              <div className="badge badge-outline py-3">𝗻𝗲𝘁𝗹𝗶𝗳𝘆</div>
            </div>
          </div>
          <div className="btn">Details</div>
        </div>
        <div className="card w-96 bg-neutral text-neutral-content shadow-xl">
          <figure>
            <img src={project2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              DentalCare
            </h2>
            <p>Service review website</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline py-3">Fashion</div>
              <div className="badge badge-outline py-3">Products</div>
              <div className="badge badge-outline py-3">Fashion</div>
              <div className="badge badge-outline py-3">Products</div>
            </div>
          </div>
          <div className="btn">Details</div>
        </div>
        <div className="card w-96 bg-neutral text-neutral-content shadow-xl">
          <figure>
            <img src={project3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              BookStore
            </h2>
            <p>Second hand book selling store</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline py-3">Fashion</div>
              <div className="badge badge-outline py-3">Products</div>
              <div className="badge badge-outline py-3">Products</div>
              <div className="badge badge-outline py-3">Products</div>
            </div>
          </div>
          <div className="btn">Details</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
