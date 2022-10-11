import {React, useEffect, useRef} from "react"
import { Link } from "react-router-dom";



export default function NavMenu(props) {

    function useOutsideAlerter(ref) {
        useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                if(event.target.id === "menu-button") {
                    return
                }
                props.toggleMenu()
            }
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
      }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <div ref={wrapperRef} className={props.isMobile ? "navmenu" : "navbar"}>

            <Link to="hackar-website/Home">
                <div className="navbar-buttons" onClick={() => props.toggleMenu()}>Home</div> 
            </Link>

            <Link to="hackar-website/Services"> 
                <div className="navbar-buttons" onClick={() => props.toggleMenu()}> Services </div> 
            </Link>

            <Link to="hackar-website/Contact"> 
                <div className="navbar-buttons" onClick={() => props.toggleMenu()}> Contact </div>
            </Link>

            <Link to="hackar-website/About"> 
                <div className="navbar-buttons" onClick={() => props.toggleMenu()}> About </div>
            </Link>

        </div>
    )
}