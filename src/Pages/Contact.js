import Footer from "../Components/Footer";
import React from "react";
import { useState } from "react";
import "./Contact.css";
import GoogleMap from "../Components/Map";
const Contact = () => {

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
                <h4>Contact Us</h4>
                <p>Lorem ipsum, dolor sit amet <br />consectetur
                <br />adipisicing elit.</p>
            </div>
            <div className="contact-data">
                <GoogleMap />
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-ip">
                            <label className="label" for="name">Name</label><br /><br />  
                            <input type="text" name="name" value={data.name} onChange={handleChange} required />
                        </div>
                        
                        <div className="form-ip">
                            <label className="label" for="">Email</label><br /><br />
                            <input type="email" name="email"  value={data.email} onChange={handleChange} required/>
                        </div>
                        
                        <div className="form-ip">
                            <label className="label" for="">Message</label><br /><br />
                            <textarea type="text" name="message" value={data.message} onChange={handleChange} required  className="msg"/>
                        </div>
                        
                        <button type="submit" className="contact-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
        
        </>
     );
}
 
export default Contact;