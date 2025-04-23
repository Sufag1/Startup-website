import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import start from "../Images/Start.png";
import "./Navigation.css";
const NavBar = () => {

    const [hambClicked, setHambClicked] = useState(false);
    const toggleHamb = () => {
        setHambClicked(prev => !prev);
    };


    return ( 

        <nav className="navbar">
            <div className="nav-content">
                <img src={start} alt=""/>
                <button className="hamburger-button" onClick={toggleHamb}>
                    <div className="hamburger">
                        &#9776;
                    </div>
                </button>

                {/*Desktop Nav items*/}

                <div className="desktop-nav">
                    <ul className="desktop-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>

                </div>
            </div>
            
            {/* Mobile Hamburger Menu */}
            <div className="links">
                {hambClicked && (
                    <ul className="mobile-links">
                        <li><Link to="/" onClick={() => setHambClicked(false)}>Home</Link></li>
                        <li><Link to="/portfolio" onClick={() => setHambClicked(false)}>Portfolio</Link></li>
                        <li><Link to="/services" onClick={() => setHambClicked(false)}>Services</Link></li>
                        <li><Link to="/contact" onClick={() => setHambClicked(false)}>Contact</Link></li>
                    </ul>
                )}
            </div>
            
        </nav>

     );
}
 
export default NavBar;