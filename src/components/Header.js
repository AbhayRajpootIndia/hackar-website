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

    return (
        <>
            <div className="header-parent">
                {!isMobile ?
                    <div className="header" style={isMobile ? {}: {alignItems: "center", height: "100px"}}>
                        <Logo />
                        <NavMenu isMobile={isMobile} />
                    </div>
                    :
                    <>
                    <div className="header" style={{height: "82px"}}>
                        <Logo />
                        <NavMenuButton setShowMenu={setShowMenu}/>
                    </div>
                    {showMenu && <NavMenu isMobile={isMobile} />}
                    </>
                }
            </div>
            <hr style={{marginTop:"0px"}}></hr>
        </>
    );
}