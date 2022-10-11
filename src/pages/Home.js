import React from "react"
import HomeIntro from "../components/HomeIntro"

export default function Home(props) {

    const contentClass = "page-content"
    const contentStyle = {paddingLeft: props.pageView === "web" ? "20%" : "10%"} 

    const pageClass = "page"
    const pageStyle = {maxWidth: props.pageView === "web" ? "80%" : "90%", padding: "5px"} 


    return (
        <>
            <div className={pageClass} style={pageStyle}>       
                <HomeIntro pageView={props.pageView}/>
            </div>

        </>
    )
} 