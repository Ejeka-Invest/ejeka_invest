import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";

function Home() {
    return(
        <div className="home">
            <Navbar />
            <h1>I am the Home Component</h1>
        </div>
    )
}

export default Home;