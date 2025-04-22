import React from "react";
import grouphome from '../Images/Group-home.svg';
import './HeroSection.css';
import {motion} from 'framer-motion';


const HeroSection = () => {
    
    return (
        <section className='hero-section'>
            <div className="hero-img">
            <motion.img
                initial={{ opacity: 0, y: -50 }}   
                whileInView={{ opacity: 1, y: 0 }}    
                whileHover={{ scale: 1.1 }} 
                transition={{ duration: 1, type: "spring", stiffness: 300 }}
                src={grouphome}
            />

            

            </div>

            <div className="hero-text">
            <motion.h5
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                >
                WELCOME
            </motion.h5>  
                <h3>Lorem ipsum dolor sit amet consectetur </h3>
                <p>Lorem ipsum, dolor sit amet consectetur <br />adipisicing elit. Suscipit nemo hic quos, ab, <br />dolor aperiam nobis cum est eos error <br />ipsum, voluptate culpa nesciunt delectus <br />iste?</p>
                <button className='hero-button'>Explore</button>
            </div>
        </section>
    );
}

export default HeroSection;