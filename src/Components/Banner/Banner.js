import React from 'react'
import b2 from "../../Assets/biriyani2.png";
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

function Banner() {
  return (
    <>
        <div className="dark:bg-gray-700 dark:text-white min-h-[400px]">
            <div>
                <div data-aos="slide-up" data-aos-duration="300" data-aos-once="true" className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Image Section */}
                        <div>
                            <img data-aos="zoom-out" data-aos-duration="400" data-aos-once="true" src={b2} alt='' className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12_rgba(0,0,0,0.1)]" />
                        </div>
                        {/* Text-Content Section */}
                        <div className="flex flex-col justify-center gap-6 sm:pt-0">
                            <h1 className="text-3xl sm:text-4xl font-bold">Welcome To WebSite</h1>
                            <p className="text-sm text-gray-500 tracking-wide leading-5 dark:text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab sed, exercitationem minima aliquid eligendi distinctio? Fugit repudiandae numquam hic quo recusandae. Excepturi totam ad nam velit quasi quidem aspernatur.</p>
                            <div className="flex justify-center gap-6">
                                <div className="">
                                    <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                                </div>
                                <div className="">
                                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                                </div>
                                <div className="">
                                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner