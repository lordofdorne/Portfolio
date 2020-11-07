import React, { useState } from 'react';
import data_projects from './data/projects_data'
import ProjectCard from './ProjectCard';


const Projects = () => {
  const [projects, setProjects] = useState(data_projects)


  return (
    <div className="container projects">
      <div className="projects__navbar">
      </div>
      <div className="row">

        {
          projects.map(project =>
            <ProjectCard key={project.name} project={project} />)
        }
      </div>
    </div>
  );
};

export default Projects;