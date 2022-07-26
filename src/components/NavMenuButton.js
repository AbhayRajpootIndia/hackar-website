import React from "react"

export default function NavMenuButton(props) {

    function toggleMenu() {
        props.setShowMenu(prevShowMenu => !prevShowMenu)
    }

    return (
        <div className="navmenu-button" onClick={() => toggleMenu()}>
            
        </div>
    )
}