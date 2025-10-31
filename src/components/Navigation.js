import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/my-logo.png"

export default function Navigation() {
  return (
    <nav>
    <ul>
    <li><NavLink to="/andreatopic.portfolio"><img id="logo" src={logo} alt="myLogo" width="301px" height="142px"/></NavLink></li>
      <li><NavLink to="/projects">MY PROJECTS</NavLink></li>
      <li><NavLink to="/about">ABOUT ME</NavLink></li>
      <li><NavLink to="/contact">CONTACT</NavLink></li>
      
      </ul>
    </nav>
  );
}