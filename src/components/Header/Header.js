import React from "react";
import "./Header.css";
import Typed from "react-typed";

const Header = () => {
  return (
    <div>
      <div className="header-wrapper">
        <div className="main-info">
          <h2 className="text-4xl text-white mb-3 font-semibold">Front-end Developer</h2>
          <h1 className="text-5xl text-orange-500 font-semibold">Progna Labony Roy</h1>
          <Typed
            className="text-white my-3 text-lg"
            strings={["Here you can find anything"]}
            typeSpeed={50}
            backSpeed={60}
            loop
          />
          <br />
          <a
            href="Progna_Labony_Roy_Resume.pdf"
            download="Progna_Labony_Roy_Resume.pdf"
          >
            <button className="resume-button btn btn-outline text-white text-lg">Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
