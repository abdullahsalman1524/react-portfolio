import React from 'react'
import Project from './Project'
import tr_img from '../../images/tr_img.png'

const Project2 = () => {

  const desc = "Testrabbit is a dynamic platform designed to facilitate remote testing, offering users the convenience of taking various types of tests from any location. With its user-friendly interface, Testrabbit ensures a smooth and efficient testing experience, accommodating educational exams, professional certifications, and skills assessments. The platform emphasizes security with advanced measures to uphold test integrity and prevent cheating, while features like real-time monitoring and instant results provide both oversight and immediate feedback. Testrabbit's flexibility and accessibility make it an ideal solution for individuals and organizations seeking reliable and comprehensive remote testing capabilities."
  return (
    <div>
      <Project Img ={tr_img} heading={"Online Testing Platform (TEST-RABBIT)"}  text = { desc }/>
    </div>
  )
}

export default Project2
