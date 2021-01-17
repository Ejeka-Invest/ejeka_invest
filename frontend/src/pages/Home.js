import React, {useEffect} from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

function Home() {
    useEffect(() => {
        document.title = "The Best Place To Invest"
    })
    return(
        <div className="home">
            <Navbar />
            <HeroSection />
            <HeroSection />
            <HeroSection />
            <HeroSection />
        </div>
    )
}

export default Home;