import React from "react";
import grouphome from '../Images/Group-home.svg';
import './HeroSection.css';


const HeroSection = () => {
    
    return (
        <section className='hero-section'>
            <div className="hero-img">
                <img src={grouphome} alt="" />

            </div>

            <div className="hero-text">
                <h5>WELCOME</h5>
                <h3>Lorem ipsum dolor sit amet consectetur </h3>
                <p>Lorem ipsum, dolor sit amet consectetur <br />adipisicing elit. Suscipit nemo hic quos, ab, <br />dolor aperiam nobis cum est eos error <br />ipsum, voluptate culpa nesciunt delectus <br />iste?</p>
            </div>

            <button className='hero-button'>Explore</button>


        </section>
    );
}

export default HeroSection;