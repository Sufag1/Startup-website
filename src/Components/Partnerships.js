import google from '../Images/Google1.svg';
import facebook from '../Images/Facebook.svg';
import microsoft from '../Images/Microsoft.svg';
import spotify from '../Images/Spotify.svg';
import airbnb from '../Images/Airbnb.svg';
import "./Partnerships.css";




const Patnerships = () => {
    return (
        <>
        <div className="partnerships">
            <div className="partnership-texts">
                <h5>PARTNERS</h5>
                <h3>Lorem Ipsum Dolor</h3>
                <p>Lorem ipsum, dolor sit amet <br />consectetur
                <br />adipisicing elit.</p>
            </div>
            <div className="partnership-logos">
                <img src= {google} alt="" className='partnership-icons' />
                <img src= {microsoft} alt="" className='partnership-icons' />
                <img src= {airbnb} alt="" className='partnership-icons' />
                <img src= {facebook} alt="" className='partnership-icons' />
                <img src= {spotify} alt="" className='partnership-icons' />
            </div>
            <div className="learn-button-div">
                <button className='learn-button'>Learn More</button>    
            </div>
        </div>

        
        
        </>
     );
}
 
export default Patnerships;