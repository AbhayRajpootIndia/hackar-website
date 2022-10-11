import React from "react"
import IntroImage from "../images/intro-1.png"

export default function HomeIntro(props) {

    const contentClass = "page-content"

    return (
        <div className="widgets" style={props.pageView === "mob" ? {display: 'inline', paddingTop: '5%'} : {paddingTop: '2%'}}>
            <div className="home-intro-inner"  style={props.pageView === "mob" ? {width: "100%"} : {}}>
                <h1 className = {contentClass} style={props.pageView === "mob" ? {fontSize: "40px"} : {}}>
                    Protecting application & API from hackers
                </h1>
                <p className = {contentClass} style={props.pageView === "mob" ? {fontSize: "25px"} : {}}>
                We strive to seal security loop  before the hackers tries to find and exploit them.
                </p>
            </div>
            <img className = {contentClass} src={IntroImage} alt="home-intro-image"  style={props.pageView === "mob" ? {width: "100%"} : {}} />
        </div>
    )
}   