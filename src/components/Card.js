import React from "react";


export default function Card(props) {

    const contentClass = "page-content"

    return (
        <div className="card" style={props.styles} onClick={props.onClick}>
            <div>

                {props.title && <h1> {props.title}</h1>}

                {props.description && <p style={{...props.fontStyle ? props.fontStyle.description: {}, maxWidth: "90%"}}> {props.description} </p>}

            </div>

            <div>
                {props.image && 

                        <img className = {contentClass} style={{maxWidth: '100%', width: "400px"}} src={props.image} alt="home-image"/>

                }
            </div>
        </div>
    )
}