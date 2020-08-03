import React, {useState, useEffect} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//ScrollMagic
import * as ScrollMagic from "scrollmagic";
// import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators"
// //Gsap
import {CSSPlugin, Power4, Linear} from 'gsap/all'
import gsap , { TimelineMax, TweenMax, TweenLite,Back } from "gsap";

import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

import TransitionLink from 'gatsby-plugin-transition-link'


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
  const animationClose = (toPage:String) => {

    const tl = new TimelineMax().to("#"+toPage+"Servicios",{width:"100vw"}).play();
  }
  const exitAnim = (toPage:String)=>{
    const tl = new TimelineMax().to("#automatizacionServicios",1,{width:"100vw"},"anim").play();

  }
  return (
    <>
      <div id="portafolio">
        <div id="porfolioAnim" className="servicios">
          <TransitionLink id="automatizacionServicios" className="servicio" to="/servicios/automatizacion" 
            exit={{trigger:()=>exitAnim("automatizacion"),length:2}} 
            entry={{delay: 2,length: 1}}
            trigger={async pages => {
              // wait until we have access to both pages
              const exit = await pages.exit
              const entry = await pages.entry
              // here we can access both pages
              const tl = new TimelineMax(
                {
                  onComplete:async ()=>{
                    console.log("complete")
                    // await entry.visible
                  }
                }
              ).to("#automatizacionServicios",1,{width:"100vw"},"anim").play();
              // You could measure the entry element here
              
              // start exit animation based on measurements if you want 
              // wait for the entering page to become visible

              // the entering page is visible here.
              // if you want you can animate it now!
          }}
            >
            <div className="black" />
            <img src="../automatizacionP.jpg" />
            <h1 className="titulo">Automatizacíon industrial</h1>
          </TransitionLink>
          <div className="servicio" onClick={()=>exitAnim("automatizacion")} >
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
