import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import reyaz from "../../Assets/reyaz.jpg";

const TestimonialData = [
    {
        id: 1,
        img: reyaz,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere ab hic accusamus omnis dolor voluptatibus illo, tempore eum tenetur.",
        name: "Reyaz",
    },
    {
        id: 1,
        img: reyaz,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere ab hic accusamus omnis dolor voluptatibus illo, tempore eum tenetur.",
        name: "Hero 72"
    },
    {
        id: 1,
        img: reyaz,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere ab hic accusamus omnis dolor voluptatibus illo, tempore eum tenetur.",
        name: "Md Reyaz",
    },
]
function Testimonial() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

      };
  return (
    <>
        <div data-aos="fade-up" data-aos-duration="300" className="py-10 dark:bg-gray-700 dark:text-white">
           <div className="container">
                {/* Title Section */}
                <div className="text-center mb-20 max-w-[400] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Our Testimonial</p>
                    <h1 className="text-3xl font-bold">Testimonial</h1>
                    <p className="text-xs text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nesciunt<br /> explicabo a! Laborum delectus aliquam labore, earum rerum quam! Nulla?</p>
                </div>
                {/* Testmonial Section */}
                <div data-aos="zoom-in" data-aos-duration="300" className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
                <Slider {...settings}>
                    {
                        TestimonialData.map(({id, img, name, text})=>{
                            return(
                                <div key={id} className="my-6">
                                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative p-4">
                                        <img src={img} alt='user-reyaz' className="rounded-full block mx-auto w-[150px] h-[150px]" />
                                        <p className="text-gray-500 text-sm">{text}</p>
                                        <h1 className="text-xl font-bold">{name}</h1>
                                        <p className="text-black/20 text-9xl font-serif absolute top-10 right-5">,,</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </Slider>
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonial