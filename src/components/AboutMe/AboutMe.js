import React from "react";
import "./AboutMe.css";
import myImg from "../Image/myImg.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const AboutMe = () => {
  return (
    <div className="pt-10" id="about-id">
      <h5 className="text-center">Get To Know</h5>
      <h1 className="text-center">About Me</h1>
      <div className="container about-container">
        <div className="about-me">
          <img className="my-image" src={myImg} alt="my-image" />
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-card-icon "></FaAward>
              <h5>Experience</h5>
              <small>1+ years of LEARNING</small>
            </article>
            <article className="about-card">
            <VscFolderLibrary className="about-card-icon"></VscFolderLibrary>
            <h5>Projects</h5>
            <small>Explore my projects here</small>
          </article>
          </div>

      

          
            <p className="my-info text-sm">
              I'm quite interested in web development. For almost 1.5 years,
              I've been learning front-end development, and for 7 months, I've
              been learning back-end development. I'm always looking for new
              experiences. I recently completed a complete web development
              course from 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗶𝗻𝗴 𝗛𝗲𝗿𝗼.
            </p>
            <a href="#contact-id" className="btn btn-sm contact-btn mt-5">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
   
  );
};

export default AboutMe;
