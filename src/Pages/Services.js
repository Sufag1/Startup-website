import React from "react";
import Footer from "../Components/Footer";
import tick from "../Images/tick.svg";
import "./Services.css";
import {motion} from 'framer-motion';


const Services = () => {
    return ( 
        <>
        <div className="service-div">
            <div className="service-texts">
                <motion.h5
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 1.9 }}
                >
                    PLANS
                </motion.h5>

                <motion.h3
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 1.9 }}
                >
                    Our Services
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 1.9 }}
                >
                    Lorem ipsum, dolor sit amet <br />consectetur
                    <br />adipisicing elit.
                </motion.p>
            </div>

            <div className="service-cards">
                <div className="service-card">
                    <div className="service-card-msg">
                        <h6>Basic</h6>
                        <p className="month"><bold>$100</bold><span>/month</span></p>
                        <p className="lorem">Lorem ipsum, dolor sit amet <br />consectetur adipisicing elit. Suscipit <br />nemo hic quos, ab, dolor aperiam</p>
                        <div className="service-card-list">
                            <li><img src={tick} alt="" /><p>Lorem ipsum, dolor sit </p></li>
                            <li><img src={tick} alt="" /><p>Lorem ipsum, dolor sit </p></li>
                            <li><img src={tick} alt="" /><p>Lorem ipsum, dolor sit </p></li>
                            <li><img src={tick} alt="" /><p>Lorem ipsum, dolor sit </p></li>
                            <li><img src={tick} alt="" /><p>Lorem ipsum, dolor sit </p></li>
                            <button className="service-btn">Learn More</button>
                        </div>
                        
                    </div>
                </div>


                <div className="service-card">
                    <div className="service-card-msg">
                        <h6>Plus</h6>
                        <p className="month"><bold>$250</bold><span>/month</span></p>
                        <p>Lorem ipsum, dolor sit amet <br />consectetur adipisicing elit. Suscipit <br />nemo hic quos, ab, dolor aperiam</p>
                        <div className="service-card-list">
                            <li><img src={tick} alt="" /><p>Lorem ipsum, dolor sit </p></li>
                            <li><img src={tick} alt="" /><p>Lorem ipsum, dolor sit </p></li>
                            <li><img src={tick} alt="" /><p>Lorem ipsum, dolor sit </p></li>
                            <li><img src={tick} alt="" /><p>Lorem ipsum, dolor sit </p></li>
                            <li><img src={tick} alt="" /><p>Lorem ipsum, dolor sit </p></li>
                            <button className="service-btn">Learn More</button>
                        </div>
                        
                    </div>
                </div>


                <div className="service-card">
                    <div className="service-card-msg">
                        <h6>Pro</h6>
                        <p className="month"><bold>$400</bold><span>/month</span></p>
                        <p>Lorem ipsum, dolor sit amet <br />consectetur adipisicing elit. Suscipit <br />nemo hic quos, ab, dolor aperiam</p>
                        <div className="service-card-list">
                            <li><img src={tick} alt="" /><p>Lorem ipsum, dolor sit </p></li>
                            <li><img src={tick} alt="" /><p>Lorem ipsum, dolor sit </p></li>
                            <li><img src={tick} alt="" /><p>Lorem ipsum, dolor sit </p></li>
                            <li><img src={tick} alt="" /><p>Lorem ipsum, dolor sit </p></li>
                            <li><img src={tick} alt="" /><p>Lorem ipsum, dolor sit </p></li>
                            <button className="service-btn">Learn More</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
     );
}
 
export default Services;