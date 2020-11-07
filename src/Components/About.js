import React from 'react';

import api from './assets/api.svg'
import backend from './assets/backend.svg'
import algo from './assets/algo.svg'
import computer from './assets/computer.svg'
import repair from './assets/repair.svg'
import puzzle from './assets/puzzle.svg'
import { motion } from 'framer-motion'
import Skillcard from './Skillcard';

const skills = [
  {
    icon: computer,
    title: "Frontend Development",
    about: "I can build a beautiful and scalable SPA using HTML, CSS, Redux, and React.js"
  },
  {
    icon: repair,
    title: "Backend  Development",
    about: "handle databases, servers, routes, and I have expereince with SQL and NoSQL."
  },
  {
    icon: api,
    title: "API Development",
    about: "I can develop robust REST API's using Node and Express "
  },
  {
    icon: algo,
    title: "Competitive Coder",
    about: "a daily problem solver in HackerRank and Leetcode"
  },
  {
    icon: puzzle,
    title: "UI/UX designer",
    about: "minimalistic user interface designer using figma and  framer"
  },
  {
    icon: computer,
    title: "Tech Enthusiast",
    about: "I'm not all about software! I love all things tech especially esports!"
  },
]
const aboutVariant = {
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

const About = () => {
  return (
    <motion.div className="about"
      variants={aboutVariant}
      initial='hidden'
      animate='visible'

    >
      <h6 className="about__intro">
        Hi im Asim! I'm an ambitious, confident, coachable, software engineer and tech enthusiast. My path has always been centered around challenging myself while having a positive impact on people. I'm a quick learner who loves problem solving by using simple and scalable solutions.
            </h6>
      <div className="container about__container">
        <h6 className="about__heading">What I offer</h6>
        <div className="row">
          {
            skills.map(skill =>
              <Skillcard skill={skill} />

            )
          }
        </div>
      </div>
    </motion.div>
  );
};

export default About;