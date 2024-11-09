import React from 'react'
import b1 from "../../Assets/biriyani1.png"

const ServiceData = [
    {
        id: 1,
        img: b1,
        name: "Briyani",
        description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id: 2,
        img: b1,
        name: "Chicken Kari",
        description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id: 3,
        img: b1,
        name: "Cold Foffe",
        description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id: 4,
        img: b1,
        name: "Tea Foffe",
        description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id: 5,
        img: b1,
        name: "Briyani",
        description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id: 6,
        img: b1,
        name: "Chicken Kari",
        description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id: 7,
        img: b1,
        name: "Cold Foffe",
        description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id: 8,
        img: b1,
        name: "Tea Foffe",
        description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
]
function Service() {
  return (
    <>
        <div className="dark:bg-gray-700 dark:text-white py-10">
           <div className="container">
                {/* Title Section */}
                <div className="text-center mb-20 max-w-[400] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Our Services</p>
                    <h1 className="text-3xl font-bold">Services</h1>
                    <p className="text-xs text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nesciunt<br /> explicabo a! Laborum delectus aliquam labore, earum rerum quam! Nulla?</p>
                </div>
                {/* Card Section */}
                <div className="">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-14 md:gap-14 place-items-center">
                        {
                            ServiceData.map(({id, img, name, description})=>{
                                return(
                                    <div data-aos="zoom-in" data-aos-duration="400" data-aos-once="true" key={id} className="max-w-[350px] group rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary hover:text-white duration-300 p-4 shadow-xl">
                                        <div className="h-[100px]">
                                            <img src={img} alt='' className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
                                        </div>
                                        <div className="p-4 text-center">
                                            <h1 className="text-xl font-bold">{name}</h1>
                                            <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{description}</p>    
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div> 
        </div>
    </>
  )
}

export default Service