import React from "react"


export default function Home(props) {

    const contentClass = "page-content"
    const contentStyle = {} 

    const pageClass = "page"
    const pageStyle = {maxWidth: props.pageView === "web" ? "80%" : "90%"} 


    return (
        <div className={pageClass} style={pageStyle}>
            
            <h1 className={contentClass} style={contentStyle}>
                What is Lorem Ipsum?
            </h1>


            <p className={contentClass} style={contentStyle}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                <br></br><br></br>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  
            </p>

            <hr></hr>

            <h1 className={contentClass} style={contentStyle}>
                What is Lorem Ipsum?
            </h1>


            <p className={contentClass} style={contentStyle}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  
            </p>

            
        </div>
    )
}   