import React from "react"
import Card from "./Card"
import IntroImage from "../images/services icon 1.png"

import aug1 from "../images/augmented img 1.jpg"
import aug2 from "../images/augmented img 2.jpg"
import aug3 from "../images/augmented img 3.jpg"

import cyber1 from "../images/cyber img1.jpg"
import cyber2 from "../images/cyber img2.jpg"


export default function ServicesCards(props) {

    const contentClass = "page-content"

    const cardStyle = props.pageView === 'mob' ? {width: '90%', maxWidth: '90%'} : {width: '83%', maxWidth: '83%'}

    return (
        <div className="widgets" style={{display: 'inline'}}>
            <div className="cards-container" style={{display: 'flex', flexDirection: props.pageView === 'mob'? 'column': 'row', justifyContent: 'flex-start', alignItems: props.pageView === 'mob'? 'center': '', columnGap: '0%', width: '100%'}}>  {// props.pageView === 'mob'? 'inline': 'grid'
            }
                <div className="augmented-reality-services" style={{maxWidth: props.pageView === 'mob'? '90%': '50%'}}>
                    <h1 style={{textAlign: 'center', fontSize: '45px'}}>
                        Augmented Reality <br></br> Services
                    </h1>
                    
                    <Card styles={cardStyle} title={"AR in Education"} image={aug1} description = {"AR allows to integrate gaming elements to reading materials and provide virtual instances of topics, it can make learning more engaging and remarkable.."} />

                    <Card styles={cardStyle} title={"AR in Gaming"} image={aug2} description = {"AR have sparked a revolution in gaming that was once thought to be unthinkable. It is widely believed that AR technology will revolutionize the gaming industry."} />

                    <Card styles={cardStyle} title={"AR in Healthcare"} image={aug3} description = {"Usage of AR in healthcare as it develops and becomes more accessible, inexpensive, and usable as a tool for informing and involving doctors and patients in innovations that will enhance outcomes in medical field."} />
                </div>
                
                <div className="cyber-security-services" style={props.pageView === 'mob'? {border: 'none', borderTop: 'solid', borderWidth: '1px', maxWidth: props.pageView === 'mob'? '90%': '50%'} : {maxWidth: props.pageView === 'mob'? '90%': '50%'}}>
                    <h1 style={{textAlign: 'center', fontSize: '45px'}}>
                        Cyber Security <br></br> Services
                    </h1>

                    <Card styles={cardStyle} title={"Network Penetration Testing"} image={cyber1} description = {"An external penetration testing is used to determine the vulnerabilities in your external systems. Our security researchers attempt to intrude the network by exploiting vulnerabilities."} />

                    <Card styles={cardStyle} title={"Web Penetration Testing"} image={cyber2} description = {"At hackAR cove, we focus more on manual testing rather than automated testing. Ensuring that all the vulnerabilities are assessed."} />
                </div>

                
            </div>
        </div>
    )
}   