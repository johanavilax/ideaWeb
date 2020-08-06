import React, {useState,useEffect,useRef,createRef} from "react"

import TransitionLink from 'gatsby-plugin-transition-link'
import lottie from "lottie-web"
const Automatizacion = (props) => {
    const arrowAnim = createRef<HTMLDivElement>()

    useEffect(() => {
        const arrow = lottie.loadAnimation({
            container: arrowAnim.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../../animations/arrowDownWhite.json"),
          });

    }, [])
    return(
  <> 
      <div className="serviciosContainer" id="automatizacionPage">
         <div className="imagen">
             <img src="../automatizacionP.jpg" />

         </div>
         {/* <div className="black" /> */}
         <h1 className="titulo">Automatizacíon industrial</h1>
         <div id="arrow" className="arrow" ref={arrowAnim}/>
      </div>
      <div>
        
      </div>


  </>
  )}
  
  export default Automatizacion