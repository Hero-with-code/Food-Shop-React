import React from 'react'
import logo from "../../Assets/logo.png";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { ImYoutube } from "react-icons/im";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-white">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid md:grid-cols-3 py-5">
                    <div className="py-8 px-4">
                        <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                            <img src={logo} alt='footer logo' className="max-w-[50px]" />FOODS
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere ab hic accusamus omnis dolor</p>
                        <div className="flex items-center gap-3 mt-6">
                        <FaLocationArrow />
                            <p>Abul Fazal, Delhi</p>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                        <FaMobileAlt />
                            <Link to="#"><p>+91 911 704 8402</p></Link>
                        </div>
                         {/* Social Media */}
                        <div className="flex items-center gap-3 mt-6">
                        <Link to='#'>
                        <RiInstagramFill className="text-3xl" />
                        </Link>
                        <Link to='#'>
                        <FaFacebook className="text-3xl" />
                        </Link>
                        <Link to='#'>
                        <SiLinkedin className="text-3xl" />
                        </Link>
                        <Link to='#'>
                        <ImYoutube className="text-3xl" />
                        </Link>
                    </div> 
                </div>           
                    <div className="grid grid-cols-3 sm:grid-cols-3 col-span-2 md:pl-10">                   
                        <div className="py-8 px-4">
                            <h1 className="mb-3 text-2xl font-bold text-justify sm:text-left">Details Here</h1>
                            <Link to='#'><h2>Home</h2></Link>
                            <Link to='#'><h2 className="mt-4">About</h2></Link>
                            <Link to='#'><h2 className="mt-4">Service</h2></Link>
                            <Link to='#'><h2 className="mt-4">Login</h2></Link>
                            </div>

                            <div className="py-8 px-4">
                            <h1 className="mb-3 text-2xl font-bold text-justify sm:text-left">Details Here</h1>
                            <Link to='#'><h2>Home</h2></Link>
                            <Link to='#'><h2 className="mt-4">About</h2></Link>
                            <Link to='#'><h2 className="mt-4">Service</h2></Link>
                            <Link to='#'><h2 className="mt-4">Login</h2></Link>
                            </div>

                            <div className="py-8 px-4">
                            <h1 className="mb-3 text-2xl font-bold text-justify sm:text-left">Details Here</h1>
                            <Link to='#'><h2>Home</h2></Link>
                            <Link to='#'><h2 className="mt-4">About</h2></Link>
                            <Link to='#'><h2 className="mt-4">Service</h2></Link>
                            <Link to='#'><h2 className="mt-4">Login</h2></Link>
                            </div>
                    </div> 
                </div>
            </div>
            
            <div className="text-center py-5 border-t-2 border-gray-300/50">
            @copyright 2024 All rights reserved || Develop By Md Reyaz
         </div>
     </div>
    </>
  )
}

export default Footer