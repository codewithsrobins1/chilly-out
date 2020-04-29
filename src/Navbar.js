import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <div className="navbar">
                <div className="navbar__logo">
                <Link exact to="/">
                    <img src="imgs/logo2.jpg" alt="logo"/>
                </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
