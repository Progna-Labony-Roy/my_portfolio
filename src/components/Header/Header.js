import React from "react";
import "./Header.css";
import Typed from "react-typed";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="header-wrapper">
        <div className="main-info">
          <h2 className="text-5xl text-white mb-3 font-semibold">
            Front-end Developer
          </h2>
          <h1 className="text-6xl text-orange-500 font-semibold">
            Progna Labony Roy
          </h1>
          <Typed
            className="text-white my-3 text-lg"
            strings={["Web Development", "ReactJS", "Bootstrap", "TailwindCSS"]}
            typeSpeed={50}
            backSpeed={60}
            loop
          />
          <br />
          <a
            href="Progna_Labony_Roy_Resume.pdf"
            download="Progna_Labony_Roy_Resume.pdf"
          >
            <button className="resume-button btn btn-outline text-white text-lg">
              Resume
            </button>
          </a>
          <div>
            <div>
              <span className="footer-title">Social</span>
             <div className="flex">
              <a className="text-white" href="https://www.linkedin.com/in/progna-labony-roy/"><FaLinkedin className="mr-3"></FaLinkedin></a>
              <a className="text-white" href="https://www.facebook.com/profile.php?id=100041083752137&mibextid=ZbWKwL"><FaFacebookSquare className="mr-3"></FaFacebookSquare></a>
              <a className="text-white" href="https://github.com/Progna-Labony-Roy"><FaGithub></FaGithub></a>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
