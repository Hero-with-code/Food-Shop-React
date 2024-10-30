import React, {useEffect} from 'react';
import Navbar from '../Navbar/Navbar.js';
import Hero from '../Hero/Hero.js';
import Service from "../Services/Service.js"
import Banner from '../Banner/Banner.js';
import AppStore from '../AppStore/AppStore.js';
import Testimonial from '../Testimonial/Testimonial.js';
import Footer from '../Footer/Footer.js';
import "aos/dist/aos.css";
import AOS from "aos";

function Home() {
    
    useEffect(()=>{
        AOS.init({
          offset: 100,
          duration: 500,
          easing: "ease-in-sine",
          delay: 100,
        });
        AOS.refresh()
      }, []);
  return (
    <>
        <div className="bg-white dark:">
              <Navbar />
              <Hero />
              <Service />
              <Banner />
              <AppStore />
              <Testimonial />
              <Footer />
              </div>
    </>
  )
}

export default Home