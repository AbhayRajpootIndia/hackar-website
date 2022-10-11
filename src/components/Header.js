import React from "react"
import NavMenuButton from "./NavMenuButton"
import NavMenu from "./NavMenu"
import Logo from "./Logo"


export default function Header(props) {
    const [width, setWidth] = React.useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    React.useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 0.60 * window.screen.availWidth || width < 768;

    const [showMenu, setShowMenu] = React.useState(false);

    function toggleMenu() {
        setShowMenu(prevShowMenu => !prevShowMenu)
    }

    return (
        <>
            <div className="header-parent" style={props.position ? {position: props.position} : {}}>
                {!isMobile ?
                    <div className="header" style={{alignItems: "center", height: "90px"}}>
                        <Logo isMobile={isMobile} />
                        <NavMenu isMobile={isMobile} />
                    </div>
                    :
                    <>
                    <div className="header" style={{height: "82px", paddingLeft: "5%", paddingRight: "5%"}}>
                        <Logo isMobile={isMobile} />
                        <NavMenuButton toggleMenu={toggleMenu} showMenu={showMenu} />
                    </div>
                    {showMenu && <NavMenu isMobile={isMobile} toggleMenu={toggleMenu} />}
                    </>
                }
                {/* <hr style={{marginTop:"0px", borderColor: 'grey'}}></hr> */}
            </div>
        </>
    );
}