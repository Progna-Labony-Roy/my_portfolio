import React from "react";
import portfolio from "../Image/portfolio.png";
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";

const Navbar = () => {
  // const navItems = (
  //  <>
  //   <li  className="nav-item"><a href="" >Home</a></li>
  //   <li  className="nav-item"><a href="#about-id" >About me</a></li>
  //   <li  className="nav-item"><a href="#project-id" >Projects</a></li>
  //   <li  className="nav-item"><a href="#contact-id">Contact</a></li>
  //   </>
  // );

  return (
    <div className="navbar">
      <a href="#" className="active">
        <AiOutlineHome></AiOutlineHome>
      </a>
      <a href="#about-id">
        <AiOutlineUser></AiOutlineUser>
      </a>
      <a href="#project-id">
        <AiOutlineProject></AiOutlineProject>
      </a>
      <a href="#contact-id">
        <AiOutlineContacts></AiOutlineContacts>
      </a>
    </div>
  );
};

export default Navbar;
