import facebook from "../Images/Facebook icon.svg";
import instagram from "../Images/IG icon.svg";
import twitter from "../Images/Twitter icon.svg";
import pinterest from "../Images/Pinterest icon.svg";
import music from "../Images/Music icon.svg";
import whatsapp from "../Images/Whatsapp icon.svg";
import youtube from "../Images/Youtubr icon.svg";
import "../Components/Footer.css";



const Footer = () => {
    return ( 
        <>
        <div className="footer">
            <div className="footer-icons">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
                <img src={pinterest} alt="" />
                <img src={music} alt="" />
                <img src={whatsapp} alt="" />
                <img src={youtube} alt="" />
            </div>
            <div className="footer-p">
                <p>© Start, 2022. All rights reserved by Farouq.</p>
            </div>

        </div>
        
        
        
        </>
     );
}
 
export default Footer;