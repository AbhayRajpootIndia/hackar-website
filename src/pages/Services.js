import React from "react"


export default function Home(props) {

    const contentClass = "page-content"
    const contentStyle = {} 

    const pageClass = "page"
    const pageStyle = {maxWidth: props.pageView === "web" ? "60%" : "90%"} 


    return (
        <div className={pageClass} style={pageStyle}>
            
            <h1 className={contentClass} style={contentStyle}>
             Offensive Web Application Penetration Testing
            </h1>


            <p className={contentClass} style={contentStyle}>
                Web applications are vulnerable to various attacks. Our top-ranked hackers are available to safeguard your web application against malicious intrusions by performing thorough penetration testing using the most advanced security testing methodologies.
            </p>

            <hr></hr>

            <h1 className={contentClass} style={contentStyle}>
                Mobile Application Penetration Testing
            </h1>


            <p className={contentClass} style={contentStyle}>
                 Mobile apps usually have more users and need to work on a broader range of devices which increases the importance of their testing. We conduct in-depth mobile application security assessments of commonly used mobile platforms including Android and iOS following the OWASP top 10 mobile framework. 
            </p>

            
        </div>
    )
}   