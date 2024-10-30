import React from 'react'
import logo from "../../Assets/logo.png"
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
       <div className="fixed w-full top-0 left-0 z-20 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className='container py-3 sm:py-0'>
            <div className='flex justify-between items-center'>
                <div>
                    <Link to="#" className="flex items-center gap-2 text-2xl sm:text-3xl font-bold">
                    <img src={logo} alt='logo' className='w-10' />Foods Shop
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <div>
                       <DarkMode /> 
                    </div>
                    <ul className='hidden sm:flex gap-4'>
                        <li>
                            <Link to="/" className="inline-block py-4 px-4 hover:text-primary">Home</Link>
                        </li>
                        <li>
                            <Link to="/About" className="inline-block py-4 px-4 hover:text-primary">About</Link>
                        </li>
                        <li>
                            <Link to="/Contact" className="inline-block py-4 px-4 hover:text-primary">Contact</Link>
                        </li>
                    </ul>
                    <button className=" bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-3">Order<FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer"></FaCartShopping></button>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Navbar