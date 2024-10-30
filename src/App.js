import React from 'react';
import Navbar from "./Components/Navbar/Navbar.js"
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Home from "./Components/Home/Home.js";
import About from "./Components/Home/About.js";
import Contact from "./Components/Home/Contact.js";

function App() {
  
  return (
          <>
           <Router>
              <Navbar />
                  <Routes>
                      <Route exact={true} path='/' element={<Home /> } />
                      <Route exact={true} path='/About' element={<About /> } />
                      <Route exact={true} path='/Contact' element={<Contact /> } />
                  </Routes>
            </Router> 
          </>
  );
}

export default App;
