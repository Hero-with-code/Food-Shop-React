import React from 'react'
import reyaz from "../../Assets/reyaz.jpg";

function About() {
  return (
    <div className='dark:bg-gray-800 dark:text-white h-[730px] w-[100%] flex justify-center items-center'>
      <h1><img data-aos="zoom-in" data-aos-duration="400" data-aos-once="true" src={reyaz} alt='about' /></h1>
      <h1 data-aos="fade-out" data-aos-duration="300">About Us</h1>
      <h1><img data-aos="zoom-in" data-aos-duration="400" data-aos-once="true" src={reyaz} alt='about' /></h1>
      </div>
  )
}

export default About