import React from "react"
import IntroImage from "../images/intro-1.png"

export default function HomeIntro(props) {

    const contentClass = "page-content"

    return (
        <div className="home-widgets" style={props.pageView === "mob" ? {display: 'inline'} : {}}>
            <div className="cards-container"  style={props.pageView === "mob" ? {width: "100%"} : {}}>
                
            </div>
        </div>
    )
}   