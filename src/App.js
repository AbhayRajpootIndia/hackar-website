import './App.css';

import React from "react"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import About from "./pages/About"



function App(props) {
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

  const [pageView, setPageView] = React.useState("web")

  React.useEffect(function () {
    let isMobile = width <= 0.62 * window.screen.availWidth || width < 900;
    setPageView(isMobile ? "mob" : "web")
  }, [width])


  return (
    <>
      {props.page === "Home" && <Home pageView={pageView} />}
      {props.page === "About" && <About pageView={pageView} />}
      {props.page === "Contact" && <Contact pageView={pageView} />}
      {props.page === "Services" && <Services pageView={pageView} />}
    </>
  );
}

export default App;
