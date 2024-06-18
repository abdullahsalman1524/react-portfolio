import React from 'react'
import Project from './Project'
import lrimg from "../../images/lr_img.jpg";


const Project1 = () => {
  const desc =
    "Led the development and implementation of LetsRemotify, an innovative platform designed to connect clients with remote talent. Oversaw the integration of data analytics and statistical modeling to match clients with suitable professionals efficiently. Enhanced user experience through strategic decision-making and continuous improvement based on user feedback. Successfully managed cross-functional teams to deliver high-quality projects, resulting in increased user engagement and satisfaction.";
  return (
    <div>
      <Project Img ={lrimg} heading={"Hire Remote Talent (LETSREMOTIFY)"}  text = { desc }/>
    </div>
  )
}

export default Project1
