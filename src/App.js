import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero.js';
import Service from "./Components/Services/Service.js"
import Banner from './Components/Banner/Banner.js';
import AppStore from './Components/AppStore/AppStore.js';
import Testimonial from './Components/Testimonial/Testimonial.js';
import Footer from './Components/Footer/Footer.js';
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
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
  );
}

export default App;
