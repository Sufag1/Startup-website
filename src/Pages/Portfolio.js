import React from "react";
import landingpage from "../Images/Landin page.svg";
import webpage from "../Images/Web page.svg";
import rocket from "../Images/Rocket.svg";
import shopping from "../Images/Shopping.svg";
import geometric from "../Images/Geometric.svg";
import trick from "../Images/Trick or treat.svg";
import halloween from "../Images/Halloween.svg";
import virtualx from "../Images/Virtual.png";
import Footer from "../Components/Footer";
import "./Portfolio.css";
import {motion} from "framer-motion";


const Portfolio = () => {
    return (
        <> 
        <section className="portfolio">
            <div className="portfolio-texts">
                <motion.h4
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 1.9 }}
                >
                    W O R K S
                </motion.h4>
                <motion.h3
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 1.9 }}
                >
                    Portfolio
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ amount: 0.5 }} 
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

            <div className="portfolio-img">
            {[landingpage, webpage, rocket, shopping, geometric, trick, halloween, virtualx].map((logo, index) => (
                    <motion.img
                        key={index}
                        src={logo}
                        alt=""
                        className="portfolio-img"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                    />
            ))}
            </div>

            <div className="learn-button-div">
                <button className='learn-button'>Learn More</button>    
            </div>

            <Footer />
        </section>

        </>
     );
}
 
export default Portfolio;