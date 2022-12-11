import React, { useState } from "react";
import portfolio from "../Image/portfolio.png";
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeNow,setActiveNow]=useState('#')

  return (
    <div className="navbar">
      <a href="#" className={activeNow === '#'? 'active': ''}>
        <AiOutlineHome></AiOutlineHome>
      </a>
      <a href="#about-id" onClick={() =>setActiveNow('#about-id')} className={activeNow === '#about-id'? 'active': ''}>
        <AiOutlineUser></AiOutlineUser>
      </a>
      <a href="#project-id" onClick={() =>setActiveNow('#project-id')} className={activeNow === '#project-id'? 'active': ''}>
        <AiOutlineProject></AiOutlineProject>
      </a>
      <a href="#contact-id" onClick={() =>setActiveNow('#contact-id')} className={activeNow === '#contact-id'? 'active': ''}>
        <AiOutlineContacts></AiOutlineContacts>
      </a>
    </div>
  );
};

export default Navbar;
