import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { LoginContext } from "../Context/LoginContext";
function Navbar(props) {
    return (
        <nav id="topnav">
            <div className="navbar">
                <ul className="nav-item">{/* display the links here */}</ul>
                {/* add the links here */}
            </div>
        </nav>
    );
}

export default Navbar;
