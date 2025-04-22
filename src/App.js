import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navigation";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Service from "./Pages/Services";
import Contact from "./Pages/Contact";
import { AnimatePresence } from "framer-motion";



function App() {
  return (
    <Router>
      <NavBar />
      <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/services" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;