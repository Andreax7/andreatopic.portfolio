import React, { useEffect, useState } from "react";
import ProjectContainer from "./ProjectContainer";
import projectData from "../data/projects.json";
import ImageModal from "./ImageModal";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectContainer key={project.id} project={project} index={index} setSelectedImage={setSelectedImage} />
      ))}

      {/* Global Modal (Ensures it's not inside any row) */}
      <ImageModal imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />
   
    </div>
  );
}
