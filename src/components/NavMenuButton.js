import React from "react"

import menuButtonImage from "../images/menu.png"

export default function NavMenuButton(props) {



    return (
        <img src={menuButtonImage} 
             id="menu-button" 
             className="navmenu-button"
             onClick={() => props.toggleMenu()}
             />
    )
}