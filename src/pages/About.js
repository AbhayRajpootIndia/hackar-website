import React from "react"

export default function Home(props) {

    const contentClass = "page-content"
    const contentStyle = {} 

    const pageClass = "page"
    const pageStyle = {maxWidth: props.pageView === "web" ? "70%" : "90%", paddingTop: "5%"} 


    return (
        <div className={pageClass} style={pageStyle}>  

            <h1 className={contentClass} style={contentStyle}>
                About us
            </h1>


            <p className={contentClass} style={contentStyle}>
                We are HackAR Cove. Our passion is cyber security. Our greatest attribute is Argumented Reality. Our goal is to assist our customers, safeguard their networks, and enable users to simultaneously view the real world and a digital virtual world that is being updated in real time to the same field of vision. 
            </p>

            <h1 className={contentClass} style={contentStyle}>
                What We Do?
            </h1>


            <p className={contentClass} style={contentStyle}>
                To help you reduce risk and strengthen the security posture of your organisation, HackAR Cove offers early detection and response to cyber threats along with specialised advice from our specialists. We are able to provide full assistance for your security operations centre (SOC), co-manage your SOC, set up a new cloud-native SOC, or assist with managing your EDR or VM solutions.
            </p>

            <h1 className={contentClass} style={contentStyle}>
                Our Approach
            </h1>


            <p className={contentClass} style={contentStyle}>
                To protect businesses from cyber threats, HackAR offers the most cutting-edge managed detection and response security available. We provide our clients with an unmatched managed security experience through a true relationship.
            </p>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
        </div>
    )
}   