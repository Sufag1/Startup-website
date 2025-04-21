import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navigation";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Service from "./Pages/Services";
import Contact from "./Pages/Contact";



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/services" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>


      </Routes>
    </Router>
  );
}

export default App;