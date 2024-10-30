import React from 'react'
import con from "../../Assets/biriyani3.png"
function Contact() {
  return (
    <div className='dark:bg-gray-800 dark:text-white h-[730px] w-[100%] flex justify-center items-center'>
      <h1><img data-aos="zoom-out" data-aos-duration="400" data-aos-once="true" src={con} alt='contact' /></h1>
      <h1 data-aos="fade-in" data-aos-duration="300">Contact Us</h1>
      <h1><img data-aos="zoom-out" data-aos-duration="400" data-aos-once="true" src={con} alt='contact' /></h1>
      </div>
  )
}

export default Contact