import React from 'react'
import './Landing.css'
import { Link } from "react-router-dom";



function Landing() {
    return (
        <div className="landing-container">
            <div className="landing-header">
                <h1 className="landing-header-title">A Weather App Made with React</h1>
                <Link exact to="/weather"> 
                    <button className="landing-button">
                        Try It
                    </button>
                </Link>
            </div>
            <div className="landing-heading-hero">
                <img src="/imgs/landingImg.svg" alt="landing svg"/>
            </div>
        </div>
    )
}

export default Landing;
