import React from "react";
import Peg from "../Images/Peg Lagge.svg";
import Richard from "../Images/Richar Guerra.svg";
import ALex from "../Images/Alex Stolz.svg";
import Janet from "../Images/Janet.svg";
import "./Team.css";
import { motion } from "framer-motion";



const Team = () => {
    return ( 
        <>
        <div className="team">
            <div className="team-texts">
                <motion.h4
                    initial={{ opacity: 0, x: 100 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 1.9 }}
                >
                    TEAM
                </motion.h4>
                <motion.h3
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 1.9 }}
                >
                    Our Talents
                </motion.h3>
                <motion.p
                    className="your-text-class"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 20,
                        delay: 0.2
                    }}
                    >
                    Lorem ipsum, dolor sit amet <br />consectetur
                    <br />adipisicing elit.
                </motion.p>
            </div>

            <div className="team-members">
                <motion.div
                    className="team-member"
                    initial={{ opacity: 0, x: -100 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <img src={Peg} alt="" />
                    <h2>Peg Legge</h2>
                    <p>CEO</p>
                </motion.div>

                <motion.div
                    className="team-member"
                    initial={{ opacity: 0, x: 100 }} 
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <img src={Richard} alt="" />
                    <h2>Richard Guerra</h2>
                    <p>CTO</p>
                </motion.div>

                <motion.div
                    className="team-member"
                    initial={{ opacity: 0, y: 100 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <img src={ALex} alt="" />
                    <h2>Alexandra Stolz</h2>
                    <p>DESIGNER</p>
                </motion.div>

                <motion.div
                    className="team-member"
                    initial={{ opacity: 0, y: 100 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <img src={Janet} alt="" />
                    <h2>Janet Bray</h2>
                    <p>DEVELOPER</p>
                </motion.div>
                </div>
            <div className="team-button-div">
                <button className="team-button">Learn More</button>
                <button className="team-button-view">View Team</button>

            </div>
            
        </div>
        </>
     );
}
 
export default Team;