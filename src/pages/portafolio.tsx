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

    const tl = new TimelineMax().to("#"+toPage+"Page black",{width:"100vw"}).play();
  }
  const exitAnim = (toPage:String,pos:number)=>{
    console.log("exit")
    const serviciosF = document.getElementsByClassName("servicio")
    for (let k = 0; k < serviciosF.length; k++) {
      if(serviciosF[k].id!==toPage+"Servicios"){
        serviciosF[k].classList.remove("adelante");
        serviciosF[k].classList.add("atras");
      }
    }
    const vw = window.innerWidth;
    const tl = new TimelineMax().to("#"+toPage+"Servicios",1,{width:"50vw"},"anim")
                                .to("#"+toPage+"Servicios h1",{fontSize:"4vw",top:"75%"},"anim")
                                .to("#porfolioAnim",1,{left:-vw/3*pos},"anim")
                                .to("#transicionAzul",1,{left:vw/2+vw/3*pos,width:"50vw"},"anim").play();

  }
  return (
    <>
      <div id="portafolio">
        <div id="porfolioAnim" className="servicios">
          <div id="transicionAzul"/>
          <TransitionLink id="automatizacionServicios" className="servicio adelante" to="/servicios/automatizacion" 
            exit={{trigger:()=>exitAnim("automatizacion",0),length:2}} 
            entry={{delay: 2,trigger:()=>animationClose("automatizacion")}}
            >
            <div className="black" />
            <img src="../automatizacionP.jpg" />
            <h1 className="titulo">Automatizacíon industrial</h1>
          </TransitionLink>
          <TransitionLink id="energiaServicios" className="servicio adelante" to="/servicios/energia" 
                      exit={{trigger:()=>exitAnim("energia",1),length:2}} 
                      entry={{delay: 2,trigger:()=>animationClose("energia")}}
                      >
            <div className="black" />
            <img src="../energiaP.jpg" />
            <h1 className="titulo">Energias renovables</h1>
          </TransitionLink>
          <TransitionLink id="industrialServicios" className="servicio adelante" to="/servicios/industrial" 
                      exit={{trigger:()=>exitAnim("industrial",2),length:2}} 
                      entry={{delay: 2,trigger:()=>animationClose("industrial")}}
                      >
            <div className="black" />
            <img src="../industrialP.jpg" />
            <h1 className="titulo">Diseño industrial</h1>
          </TransitionLink>
          <div id="ergonomiaServicios" className="servicio adelante" onClick={()=>exitAnim("ergonomia",3)}>
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
