import React, { useState } from 'react';
import data_projects from './data/projects_data'
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion'

const Projects = () => {
  const [projects, setProjects] = useState(data_projects)

  const projectVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        durarion: 0.6,

      }
    },
    // exit: {
    //   opacity: 0,
    //   transition: {
    //     ease: 'easeInOut'
    //   }
    // }
  }

  return (
    <motion.div className="container projects"
      variants={projectVariant}
      initial='hidden'
      animate='visible'

    >
      <div className="projects__navbar">
      </div>
      <div className="row">

        {
          projects.map(project =>
            <ProjectCard key={project.name} project={project} />)
        }
      </div>
    </motion.div>
  );
};

export default Projects;