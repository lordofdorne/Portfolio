import React from 'react'
import logo from './assets/Asim_HeadShot.png'
import { SocialIcon } from 'react-social-icons';
import tie from './assets/tie.svg'
import pin from './assets/pin.svg'
import resume from './assets/Asim-Samuel-Resume.pdf'
import { motion } from 'framer-motion'

const Sidebar = () => {

  const handleEmail = () => {
    window.open('mailto:asim.samuel1@gmail.com')
  }
  const sidebarVariant = {
    hidden: {
      x: '-10w',
      opacity: 0

    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        durarion: 0.5,
        type: 'tween',


      }
    }
  }
  return (
    <motion.div className="sidebar"
      variants={sidebarVariant}
      initial='hidden'
      animate='visible'
    >
      <img src={logo} alt="avatar" className="sidebar-avatar" />
      <div className="sidebar-name"> Asim <span>Samuel</span></div>
      <div className="sidebar-item sidebar-title"> Software Engineer</div>
      <a href={resume} download="Asim-Samuel-Resume.pdf">
        <div className="sidebar-item sidebar-resume">
          <img src={tie} alt="resume" className="sidebar-icon" />Download Resume
        </div>
      </a>
      <figure className="sidebar-social-icons my-2 mr-3">
        <SocialIcon className="side-icon" url="https://www.linkedin.com/in/asimsamuel/" />
        <SocialIcon className="side-icon" url="https://github.com/lordofdorne" />
        <SocialIcon className="side-icon" url="https://twitter.com/AsimCodes" />
        <SocialIcon className="side-icon" url="https://www.instagram.com/veganporkchopz/" />
      </figure>
      <div className="sidebar-contact">
        <div className="sidebar-location">
          <img src={pin} alt="location" className="sidebar-icon" /> Brooklyn, NY
        </div>

        <div className="sidebar-location">
          <div className="sidebdar-item ">asim.samuel1@gmail.com</div>
        </div>
        <div className="sidebdar-item">347-469-9971</div>
      </div>
      <div className=" sidebar-email" onClick={handleEmail}>Email Me</div>
    </motion.div>
  )
}

export default Sidebar