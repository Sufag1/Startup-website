import Footer from "../Components/Footer";
import React from "react";
import { useState } from "react";
import "./Contact.css";
import GoogleMap from "../Components/Map";
import { motion } from "framer-motion"; 



const Contact = () => {

    const [showMessage, setShowMessage] = useState(false);

    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value, }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowMessage(true);

        setData({
            name: "",
            email: "",
            message: ""
        });
    };

    return ( 
        <>
        <div className="contact-div">
            <div className="contact-texts">
                <motion.h4
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 1.9 }}
                >
                    Contact Us
                </motion.h4>

                <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 1.9 }}
                >
                    Lorem ipsum, dolor sit amet <br />consectetur
                    <br />adipisicing elit.
                </motion.p>
            </div>
            <div className="contact-data">
                <GoogleMap />
                <div className="contact-form">
                    {showMessage && (
                        <div className="custom-alert-overlay">
                            <div className="custom-alert">
                                <span className="close-btn" onClick={() => setShowMessage(false)}>×</span>
                                ✅ Form submitted successfully!
                            </div>
                        </div>
            )}
                    <form onSubmit={handleSubmit}>
                        <div className="form-ip">
                            <label className="label" for="name">Name</label><br /><br />  
                            <input type="text" name="name" value={data.name} onChange={handleChange} required />
                        </div>
                        
                        <div className="form-ip">
                            <label className="label" for="email">Email</label><br /><br />
                            <input type="email" name="email"  value={data.email} onChange={handleChange} required/>
                        </div>
                        
                        <div className="form-ip">
                            <label className="label" for="text">Message</label><br /><br />
                            <textarea type="text" name="message" value={data.message} onChange={handleChange} required  className="msg"/>
                        </div>
                        
                        <button onClick={handleSubmit} type="submit" className="contact-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
        
        </>
     );
}
 
export default Contact;