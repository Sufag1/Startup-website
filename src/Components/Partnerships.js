import React from "react";
import google from '../Images/Google1.svg';
import facebook from '../Images/Facebook.svg';
import microsoft from '../Images/Microsoft.svg';
import spotify from '../Images/Spotify.svg';
import airbnb from '../Images/Airbnb.svg';
import "./Partnerships.css";
import { motion } from "framer-motion"; 




const Patnerships = () => {
    return (
        <>
        <div className="partnerships">
            <div className="partnership-texts">
            <motion.h5
                initial={{ opacity: 0, x: 100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ amount: 0.5 }}
                transition={{ duration: 1.9 }}
            >
                PARTNERSHIPS
            </motion.h5>
            <motion.h3
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ amount: 0.5 }}
                transition={{ duration: 1.9 }}
            >
                Lorem Ipsum Dolor
            </motion.h3>
                <p>Lorem ipsum, dolor sit amet <br />consectetur
                <br />adipisicing elit.</p>
            </div>
            <div className="partnership-logos">
            <div className="partnership-logos">
                {[google, microsoft, airbnb, facebook, spotify].map((logo, index) => (
                    <motion.img
                        key={index}
                        src={logo}
                        alt=""
                        className="partnership-icons"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                    />
                ))}
                </div>

            </div>
            <div className="learn-button-div">
                <button className='learn-button'>Learn More</button>    
            </div>
        </div>

        
        
        </>
     );
}
 
export default Patnerships;