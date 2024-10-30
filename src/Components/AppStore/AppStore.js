import React from 'react'
import Androids from "../../Assets/googleplay.png";
import Iso from "../../Assets/AppleStore.png";
import Gif from "../../Assets/Gif.gif";
import { Link } from 'react-router-dom';

function AppStore() {
  return (
    <>  
        <div className="bg-gray-100 dark:bg-gray-800 py-14">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-14">
                    <div data-aos="fade-up" data-aos-duration="300" data-aos-once="true" className="space-y-6 max-w-xl mx-auto">
                        <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold dark:text-gray-400 text-gray-700">Foodly is Available for Android & IOS</h1>
                        <div className="flex flex-wrap justify-center sm:justify-start items-center">
                        <Link to="#">
                            <img src={Androids} alt='playStore' className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
                        </Link>
                        <Link to='#'>
                            <img src={Iso} alt='ISO' className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
                        </Link>
                    </div>
                    </div> 
                    <div data-aos="zoom-in" data-aos-duration="300">
                        <img src={Gif} alt='gif' className="max-w-[300px] mx-auto"/>
                    </div>                  
                </div>
            </div>
        </div>
    </>
  )
}

export default AppStore