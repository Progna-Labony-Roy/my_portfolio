import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 text-base-content">
        <div>
          <p className="name font-semibold">Progna Labony Roy</p>
          <p className="footerTitle">Front-end Developer</p>
          <p className="footerTitle">+8801761394XXX</p>
          <p className="footerTitle">labony.progna@gmail.com</p>
        </div>
        <div>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footerTitle">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.linkedin.com/in/progna-labony-roy/">
              <FaLinkedin className="mr-3"></FaLinkedin>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100041083752137&mibextid=ZbWKwL">
              <FaFacebookSquare className="mr-3"></FaFacebookSquare>
            </a>
            <a href="https://github.com/Progna-Labony-Roy">
              <FaGithub></FaGithub>
            </a>
          </div>
        </div>
      </footer>
      <p className="copywrite text-center text-xs">
        Copyright © 2022 - All right reserved by Progna Labony Roy
      </p>
    </div>
  );
};

export default Footer;
