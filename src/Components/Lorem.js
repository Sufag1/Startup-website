import React from "react";

import group2 from '../Images/Group2-img.svg';
import "./Lorem.css";


const lorem = () => {
    return ( 
        <>
        <div className="lorem-div">
            <div className="group-2">
                <img src={group2} alt="" className='group-2-img'/>
            </div>
            <div className="group-text">
                <h3>Lorem ipsum dolor sit amet consectetur </h3>
                <p>Lorem ipsum, dolor sit amet consectetur <br />adipisicing elit. Suscipit nemo hic quos, ab, <br />dolor aperiam nobis cum est eos error <br />ipsum, voluptate culpa nesciunt delectus <br />iste?</p>
            </div>
            <div className="lorem-button-div">
                <button className='lorem-button'>Learn More</button>
            </div>
            
        </div>
        
               
        </>
     );
}
 
export default lorem;