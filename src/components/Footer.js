import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer>
     
        <p>
          My social networks:
        </p>
       <div className="socialBtn" onClick={() => window.open("https://github.com/Andreax7/")}>
        <FaGithub size={50} />
       </div>
      <br />
      <div className="socialBtn" onClick={() => window.open("https://www.linkedin.com/in/andrea-topic-724437238/")}>
      <FaLinkedin size={50} />
      </div>
    
    
    </footer>
  )
  
 
}