import React from "react";
import HeroSection from "../Components/HeroSection";
import Patnerships from "../Components/Partnerships";
import Lorem from "../Components/Lorem";
import Mansits from "../Components/Man";
import Team from "../Components/Team";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import "./Home.css";

const Homepage = () => {
    return ( 
        <motion.div
            className="homepage"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <HeroSection />
            <Patnerships />
            <Lorem />
            <Mansits />
            <Team />
            <Footer />
        </motion.div>
            
        

     );
}
 
export default Homepage;