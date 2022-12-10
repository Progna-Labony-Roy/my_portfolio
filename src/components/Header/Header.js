import React from "react";
import "./Header.css";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1 className="heading">Progna Labony Roy</h1>
        <Typed
          className="typed-text"
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
          <button className="resume-button btn btn-light">Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
