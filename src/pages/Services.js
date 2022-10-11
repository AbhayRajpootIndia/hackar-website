import React from "react"
import ServicesCards from "../components/ServicesCards"


export default function Home(props) {

    const contentClass = "page-content"
    const contentStyle = {} 

    const pageClass = "page"
    const pageStyle = {maxWidth: props.pageView === "web" ? "80%" : "90%"} 


    return (
        <div className={pageClass} style={pageStyle}>
            {/* <h1 style={{marginLeft: 'auto', marginRight: 'auto', fontSize: '300%'}}> Services </h1> */}
            {/* <hr style={{marginTop:"0px", width: '100%'}}></hr> */}
            <ServicesCards pageView={props.pageView}/>
            
        </div>
    )
}   