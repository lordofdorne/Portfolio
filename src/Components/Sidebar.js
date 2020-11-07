import React from 'react'
import logo from './assets/Asim_HeadShot.png'
import { SocialIcon } from 'react-social-icons';
import tie from './assets/tie.svg'
import pin from './assets/pin.svg'
import resume from './assets/Asim-Samuel-Resume.pdf'


const Sidebar = () => {

  const handleEmail = () => {
    window.open('mailto:asim.samuel1@gmail.com')
  }

  return (
    <div className="sidebar">
      <img src={logo} alt="avatar" className="sidebar-avatar" />
      <div className="sidebar-name"> Asim <span>Samuel</span></div>
      <div className="sidebar-item sidebar-title"> Software Engineer</div>
      <a href={resume} download="Asim-Samuel-Resume.pdf">
        <div className="sidebar-item sidebar-resume">
          <img src={tie} alt="resume" className="sidebar-icon" />Download Resume
        </div>
      </a>
      <figure className="sidebar-social-icons my-2 mr-3">
        <SocialIcon url="https://www.linkedin.com/in/asimsamuel/" />
        <SocialIcon url="https://github.com/lordofdorne" />
        <SocialIcon url="https://twitter.com/AsimCodes" />
        <SocialIcon url="https://www.instagram.com/veganporkchopz/" />
      </figure>
      <div className="sidebar-contact">
        <div className="sidebar-location">
          <img src={pin} alt="location" className="sidebar-icon" /> Brooklyn, NY
        </div>
        <div className="sidebar-location">
          <div className="sidebdar-item">asim.samuel1@gmail.com</div>
        </div>
        <div className="sidebdar-item">347-469-9971</div>
      </div>
      <div className=" sidebar-email" onClick={handleEmail}>Email Me</div>
    </div>
  )
}

export default Sidebar