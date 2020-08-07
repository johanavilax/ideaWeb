import React, {useState,useEffect,useRef,createRef} from "react"

import TransitionLink from 'gatsby-plugin-transition-link'
import lottie from "lottie-web"
import Footer from "../../components/footer"
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
          {/*
          <div className="black" /> */}
          <h1 className="titulo">Automatizacíon industrial</h1>
          <div id="arrow" className="arrow" ref={arrowAnim} />

      </div>
      <div className="description">
          <div className="izq"></div>
          <div className="der">
              <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, vitae alias nobis ea at fugit aliquam accusamus consectetur laboriosam error ab tempore cupiditate eum nostrum cum molestias maiores veniam earum.
              </p>
          </div>
          <img src="../automatizacionP.jpg"/>
      </div>
        <Footer/>



  </>
  )}
  
  export default Automatizacion