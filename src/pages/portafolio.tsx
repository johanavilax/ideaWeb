import React, {useState, useEffect} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//ScrollMagic
import * as ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators"
// //Gsap
import {CSSPlugin, Power4, Linear} from 'gsap/all'
import gsap , { TimelineMax, TweenMax, TweenLite,Back } from "gsap";

import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'


gsap.registerPlugin(CSSPlugin)
const Portafolio = () => {
  useEffect(()=>{
    ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    var controllerPortafolio = new ScrollMagic.Controller();
    const tl = new TimelineMax().to("#porfolioAnim",0.5,{left:(-vw/3)-vw});
    new ScrollMagic.Scene({triggerElement: "#porfolioAnim", duration:2.5*vh,offset:0,triggerHook: 0})
    .setTween(tl)
    .setPin("#porfolioAnim")
    .addTo(controllerPortafolio);
  },[])
  return (
    <>
      <div id="portafolio">
        <div id="porfolioAnim" className="servicios">
          <div className="servicio">
            <div className="black" />
            <img src="../automatizacionP.jpg" />
            <h1 className="titulo">Automatizacíon industrial</h1>
          </div>
          <div className="servicio">
            <div className="black" />
            <img src="../energiaP.jpg" />
            <h1 className="titulo">Energias renovables</h1>
          </div>
          <div className="servicio">
            <div className="black" />
            <img src="../industrialP.jpg" />
            <h1 className="titulo">Diseño industrial</h1>
          </div>
          <div className="servicio">
            <div className="black" />
            <img src="../ergonomiaP.jpg" />
            <h1 className="titulo">Elevacion ergonomia</h1>
          </div>
          <div className="servicio">
            <div className="black" />
            <img src="../basculasP.jpg" />
            <h1 className="titulo">Basculas camioneras</h1>
          </div>
          <div className="servicio">
            <div className="black" />
            <img src="../softwareP.jpg" />
            <h1 className="titulo">Desarrollo de software</h1>
          </div>
          <div className="servicio">
            <div className="black" />
            <img src="../solucionesP.jpg" />
            <h1 className="titulo">Soluciones inovadoras</h1>
          </div>
        </div>
      </div>
      <FontAwesomeIcon id="flecha" icon={faLongArrowAltRight} />

    </>
  )

  }

  
export default Portafolio
