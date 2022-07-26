import React from "react"
import { Link } from "react-router-dom";

export default function NavMenu(props) {
    return (
        <div className={props.isMobile ? "navmenu" : "navbar"}>

            <Link to="/Home">
                <div className="navbar-buttons">Home</div> 
            </Link>

            <Link to="/Services"> 
                <div className="navbar-buttons"> Services </div> 
            </Link>

            <Link to="/About"> 
                <div className="navbar-buttons"> About </div>
            </Link>

            <Link to="/Contact"> 
                <div className="navbar-buttons"> Contact </div>
            </Link>

        </div>
    )
}