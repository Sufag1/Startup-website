import landingpage from "../Images/Landin page.svg";
import webpage from "../Images/Web page.svg";
import rocket from "../Images/Rocket.svg";
import shopping from "../Images/Shopping.svg";
import geometric from "../Images/Geometric.svg";
import trick from "../Images/Trick or treat.svg";
import halloween from "../Images/Halloween.svg";
import virtualx from "../Images/Virtual.png";
import Footer from "../Components/Footer";
import "./Portfolio.css";


const Portfolio = () => {
    return (
        <> 
        <section className="portfolio">
            <div className="portfolio-texts">
               <h4>W O R K S</h4>
               <h3>Portfolio</h3>
               <p>
                Lorem ipsum, dolor sit amet <br />consectetur
                <br />adipisicing elit.
                </p> 
            </div>

            <div className="portfolio-img">
                <img src={landingpage} alt="Landing Page" />
                <img src={webpage} alt="Web design page" />
                <img src={rocket} alt="Rocket your biz" />
                <img src={shopping} alt="Shopping" />
                <img src={geometric} alt="Geometric shapes" />
                <img src={trick} alt="Trick or Treat" />
                <img src={halloween} alt="Halloween" />
                <img src={virtualx} alt="Virtual Experience" />
            </div>

            <div className="learn-button-div">
                <button className='learn-button'>Learn More</button>    
            </div>

            <Footer />
        </section>

        </>
     );
}
 
export default Portfolio;