import React, { useState } from 'react'
import backgroundImage from "../../Assets/heroBackG.png"
import b1 from "../../Assets/biriyani1.png"
import b2 from "../../Assets/biriyani2.png"
import b3 from "../../Assets/biriyani3.png"

const ImageList = [
    {
        id: 1,
        image: b1,
    },
    {
        id: 2,
        image: b2,
    },
    {
        id: 3,
        image: b3
    }
];

const bgImage ={
    background: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
};

function Hero() {
    const [imageid, setimageid] = useState(b1);
  return (
    <>  <div className='dark:bg-gray-800'>
        <div style={bgImage} className="min-h-[550px] sm:min-h-[600px] bg-gray-100 duration-200 flex justify-center items-center">
            <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 ">
                    {/* Content section */}
                    <div data-aos="zoom-out" data-aos-duration="400" data-aos-once="true" className="flex flex-col justify-center items-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                        <h1 className="text-black text-5xl sm:text-6xl lg:text-7xl font-bold dark:text-white">Welcome To The Food Zone</h1>
                        <p className="text-black text-sm dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint ex quod quos neque reprehenderit nihil suscipit iure vero deserunt.</p>
                        <div>
                        <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200">Order Now</button>
                        </div>
                    </div>
                    {/* Image section */}
                    <div className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative">
                        {/* Main Image section */}
                        <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden">
                            <img data-aos="zoom-in" data-aos-duration="400" data-aos-once="true" src={imageid} alt='' className="w-[300px] sm:w-[450px] mx-auto spin" />
                        </div>
                        {/* Image List Section */}
                        <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-1 bg-white/30 rounded-full">
                            {
                                ImageList.map((item)=>(
                                    <img data-aos="zoom-in" data-aos-duration="400" data-aos-once="true" key={item.id} 
                                        src={item.image} alt=""
                                        className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200" onClick={()=>{
                                            setimageid(item.id===1 ? b1 : item.id===2 ? b2 : b3);
                                        }}/>
                                    ))  
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero