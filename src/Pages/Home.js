import React from "react";
import HeroSection from "../Components/HeroSection";
import Patnerships from "../Components/Partnerships";
import Lorem from "../Components/Lorem";
import Mansits from "../Components/Man";
import Team from "../Components/Team";
import Footer from "../Components/Footer";

const Homepage = () => {
    return ( 
        <div>
            <HeroSection />
            <Patnerships />
            <Lorem />
            <Mansits />
            <Team />
            <Footer />
        </div>

     );
}
 
export default Homepage;