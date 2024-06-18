import React from 'react'
import Project from './Project'
import lrimg from "../../images/ecorm.jpeg";


const Project3 = () => {
  const desc =
      "Our eCommerce shopping website offers a seamless and intuitive online shopping experience, featuring a wide range of high-quality products at competitive prices. With user-friendly navigation, secure payment options, and fast shipping, we ensure customer satisfaction at every step. Discover exclusive deals and enjoy hassle-free shopping from the comfort of your home. Shop with confidence and convenience on our platform."
  return (
    <div>
      <Project Img ={lrimg} heading={"E-Commerce Shoppig Platform"}  text = { desc }/>

    </div>
  )
}

export default Project3
