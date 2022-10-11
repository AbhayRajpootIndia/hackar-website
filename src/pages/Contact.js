import React from "react"
import Contact from "../components/Contact"


export default function Home(props) {

    const contentClass = "page-content"
    const contentStyle = {} 

    const pageClass = "page"
    const pageStyle = {maxWidth: props.pageView === "web" ? "70%" : "90%", paddingTop: "2%"} 


    return (
        <div className={pageClass} style={pageStyle}>
            <Contact pageView={props.pageView}/>
        </div>
    )
}   