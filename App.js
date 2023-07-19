import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Sections/Navbar";
import AboutMe from "./Sections/AboutMe";
import Work from "./Sections/Work";
import Projects from "./Sections/Projects";
import Certifications from "./Sections/Certifications";
import Contact from "./Sections/Contact";



// Nav
// About Me
// Work
// Projects
// Certifications
// Contact

const Layout = () => {
  return (
    <>
      <Navbar/>
      <AboutMe/>
      <Work/>
      <Projects/>
      <Certifications/>
      <Contact/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);


