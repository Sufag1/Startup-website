import React from "react";
import Peg from "../Images/Peg Lagge.svg";
import Richard from "../Images/Richar Guerra.svg";
import ALex from "../Images/Alex Stolz.svg";
import Janet from "../Images/Janet.svg";
import "./Team.css";



const Team = () => {
    return ( 
        <>
        <div className="team">
            <div className="team-texts">
                <h4>TEAM</h4>
                <h3>Our Talents</h3>
                <p>Lorem ipsum, dolor sit amet <br />consectetur
                <br />adipisicing elit.</p>
            </div>

            <div className="team-members">
                <div className="team-member">
                    <img src={Peg} alt="" />
                    <h2>Peg Legge</h2>
                    <p>CEO</p>
                </div>

                <div className="team-member">
                    <img src={Richard} alt="" />
                    <h2>Richard Guerra</h2>
                    <p>CTO</p>
                </div>

                <div className="team-member">
                    <img src={ALex} alt="" />
                    <h2>Alexandra Stolz</h2>
                    <p>DESIGNER</p>
                </div>

                <div className="team-member">
                    <img src={Janet} alt="" />
                    <h2>Janet Bray</h2>
                    <p>DEVELOPER</p>
                </div>

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