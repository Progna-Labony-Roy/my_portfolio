import React from "react";
import portfolio from "../Image/portfolio.png";
import "./Navbar.css";

const Navbar = () => {

  const navItems = (
   <>
    <li  className="nav-item"><a href="" >Home</a></li>
    <li  className="nav-item"><a href="#about-id" >About me</a></li>
    <li  className="nav-item"><a href="#project-id" >Projects</a></li>
    <li  className="nav-item"><a href="#contact-id">Contact</a></li>
    </>
  );

  return (
    <div className="sticky navbar bg-neutral text-neutral-content justify-between">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
         {navItems}
        </ul>
      </div>
      <img className="logo" src={portfolio} alt="logo"></img>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
       {navItems}
      </ul>
    </div>
  </div>
  );
};

export default Navbar;
