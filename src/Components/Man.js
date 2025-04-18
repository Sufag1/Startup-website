import React from "react";

import mansits from "../Images/Man sitting.svg";
import "./Man.css";

const Mansits = () => {
    return ( 
        <>
        <div className="mansits">
            <div className="mansits-img">
                <img src={mansits} alt="" />
            </div>
            <div className="mansits-text-btn-div">
                <div className="mansits-texts">
                    <h3>Lorem ipsum dolor sit amet consectetur </h3>
                    <p>Lorem ipsum, dolor sit amet consectetur <br />adipisicing elit. Suscipit nemo hic quos, ab, <br />dolor aperiam nobis cum est eos error <br />ipsum, voluptate culpa nesciunt delectus <br />iste?</p>
                </div>
                <div className="mansits-button-div">
                    <button className="mansits-button">Learn More</button>  
                </div>

            </div>
            
            
        </div>
        
        </>
     );
}
 
export default Mansits;