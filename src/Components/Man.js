import React from "react";
import mansits from "../Images/Man sitting.svg";
import "./Man.css";
import { motion } from "framer-motion";

const Mansits = () => {
    return ( 
        <>
        <div className="mansits">
            <div className="mansits-img">
                <motion.img
                    src={mansits}
                    alt="description"
                    className="your-image-class"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    />
            </div>
            <div className="mansits-text-btn-div">
                <div className="mansits-texts">
                    <h3>Lorem ipsum dolor sit amet consectetur </h3>
                    <p>Lorem ipsum, dolor sit amet consectetur <br />adipisicing elit. Suscipit nemo hic quos, ab, <br />dolor aperiam nobis cum est eos error <br />ipsum, voluptate culpa nesciunt delectus <br />iste?</p>
                    <button className="mansits-button">Learn More</button>
                </div>
                

            </div>
            
            
        </div>
        
        </>
     );
}
 
export default Mansits;