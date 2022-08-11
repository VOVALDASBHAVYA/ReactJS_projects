import React from 'react'
import { BrowserRouter,Routes, Route,Link } from 'react-router-dom'
import Home from "./Home";
import Service from "./Service";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
function NavBar() {
  return (
    <div>
      <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Service">Service</Link></li>
        <li><Link to="/About">About Us</Link></li>
        <li> <Link to="/Contact">Contact Us</Link></li>
      </ul>
      <Routes>
      <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default NavBar
