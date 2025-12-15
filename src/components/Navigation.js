import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../img/my-logo.png"

export default function Navigation() {
  return (
    <nav>
    <ul>
    <li><NavLink to="/"><img id="logo" src={logo} alt="myLogo" width="301px" height="142px"/></NavLink></li>
      <li><Link to="/projects">MY PROJECTS</Link></li>
      <li><Link to="/about">ABOUT ME</Link></li>
      <li><Link to="/contact">CONTACT</Link></li>
      
      </ul>
    </nav>
  );
}