import React from "react"
import { Link } from "react-router-dom";

import logo from "../images/logo.png"

export default function Logo(props) {
    return (
        <Link to="hackar-website/Home">
            <img src={logo} 
                className="logo" 
                style={props.isMobile ? {marginTop: '20px', hieght: '40px', minHeight: '40px', maxHeight: '40px'} : {}} 
            />
        </Link>
    )
}   