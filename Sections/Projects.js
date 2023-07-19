import React from "react";
import ProjectCard from "../Components/ProjectCard";
import ViewMore from "../Components/ViewMore";
import SectionTitle from "../Components/SectionTitle";

const Projects = () => {
  return (
    <div>
        <SectionTitle sectionTitle="Projects"/>
      <div>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <ViewMore/>
    </div>
  );
};

export default Projects;
