import React,{ useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AnimatedSVG from "./styles/animations/AnimatedSVG";
import Navigation from "./components/Navigation";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AboutMe from "./pages/Aboutme";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import bckgrnd from "./img/bckgrnd.jpg";
import aboutmeBackground from "./img/boutme_background.jpg";
import projectsBackground from "./img/projects_background.jpg";


const backgrounds = {
  "/": `url(${bckgrnd})`,
  "/about": `url(${aboutmeBackground})`,
  "/projects": `url(${projectsBackground})`,
  "/contact": `url(${aboutmeBackground})`
};

function BackgroundWrapper({ children }) {
  const location = useLocation();
  const backgroundImage = backgrounds[location.pathname] || backgrounds["/"];

  useEffect(() => {
    // body background change on navigation
    document.body.style.backgroundImage = backgroundImage;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "top center";
    document.body.style.backgroundAttachment = "fixed";
    // document.body.style.height = "100vh";

    return () => {
      // Clean up background when unmounting 
      document.body.style.backgroundImage = "";
    };
  }, [location.pathname]);

  return <>{children}</>;
}



function App() {
  return(<>
   
   <Router>
      <BackgroundWrapper>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BackgroundWrapper>
    </Router>
    <Footer/>
  
    </>)
}

export default App;
