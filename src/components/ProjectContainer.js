import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ProjectContainer({ project, index, setSelectedImage }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
  
    return (
      <motion.div className={`project-row ${index % 2 === 0 ? "left-image" : "right-image"}`} onClick={() => setIsExpanded(!isExpanded)} layout>
        <div className="image-container">
          <button className="arrow left" onClick={(e) => { e.stopPropagation(); setCurrentImage((prev) => prev === 0 ? project.images.length - 1 : prev - 1); }}>
            <FaChevronLeft />
          </button>
  
          <img 
            id="project-img-box"
            src={require(`../img/projects/${project.images[currentImage]}`)} 
            alt={project.title} 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(require(`../img/projects/${project.images[currentImage]}`));
            }} 
          />
  
          <button className="arrow right" onClick={(e) => { e.stopPropagation(); setCurrentImage((prev) => (prev + 1) % project.images.length); }}>
            <FaChevronRight />
          </button>
        </div>
  
        <motion.div className="text-container" layout>
          <h2>{project.title}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{isExpanded ? project.fullDescription : project.description}</p>
        </motion.div>
      </motion.div>
    );
  }
  