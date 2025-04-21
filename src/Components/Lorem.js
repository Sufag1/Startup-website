import React from "react";
import group2 from '../Images/Group2-img.svg';
import "./Lorem.css";
import {motion} from 'framer-motion';


const lorem = () => {
    return ( 
        <>
        <div className="lorem-div">
            <div className="group-2">
                <motion.img
                    initial={{ opacity: 0, y: -50 }}   
                    animate={{ opacity: 1, y: 0 }}      
                    whileHover={{ scale: 1.1 }} // Enlarge on hover
                    transition={{ duration: 1, type: "spring", stiffness: 300 }}
                    src={group2} className="group-2-img"

                />
            </div>
            <div className="group-text">
                <h3>Lorem ipsum dolor sit amet consectetur </h3>
                <p>Lorem ipsum, dolor sit amet consectetur <br />adipisicing elit. Suscipit nemo hic quos, ab, <br />dolor aperiam nobis cum est eos error <br />ipsum, voluptate culpa nesciunt delectus <br />iste?</p>
                <button className='lorem-button'>Learn More</button>
            </div>
            <div className="lorem-button-div">
                
            </div>
            
        </div>
        
               
        </>
     );
}
 
export default lorem;