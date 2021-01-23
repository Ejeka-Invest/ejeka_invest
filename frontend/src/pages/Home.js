import React, {useEffect} from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Info from "../components/Info";
import { deposit, guarantee, invest } from "../data/hero";
import Footer from "../components/Footer";

function Home() {
    useEffect(() => {
        document.title = "The Best Place To Invest"
    })
    return(
        <div className="home">
            <Navbar />
            <HeroSection {...invest} />
            <Info />
            <h1 className="home__header">We Provide...</h1>
            <HeroSection {...deposit} />
            <HeroSection {...guarantee} />
            <Footer />
        </div>
    )
}

export default Home;