import React, {useState, useEffect} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//Scroll full page
import {FullpageSection } from '@ap.cx/react-fullpage'
import Layout from "../components/layout"
//ScrollMagic
import * as ScrollMagic from "scrollmagic";
// import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators"
// //Gsap
import {CSSPlugin, Power4, Linear} from 'gsap/all'
import gsap , { TimelineMax, TweenMax, TweenLite,Back } from "gsap";

import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

const Portafolio = () => {
  const data = useStaticQuery(graphql `
  query {
    doc: file(relativePath: { eq: "documento.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    proyecto: file(relativePath: { eq: "proyectos.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    automatizacion: file(relativePath: { eq: "varias/varias(4).JPG" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mantenimiento: file(relativePath: { eq: "varias/varias(13).JPG" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  const flecha = ()=>{
      return(
            <>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 93" >
                <g id="keyboard-arrow-right">
                    <path id="Trazado_21" data-name="Trazado 21" d="M151.519,44.1,108.426,1.008a3.591,3.591,0,0,0-5.078,5.078L143.9,46.64,103.348,87.194a3.59,3.59,0,0,0,5.078,5.078l43.093-43.093A3.591,3.591,0,0,0,151.519,44.1Z" transform="translate(-102.297 0)" fill="#fff"/>
	            </g>
            </svg>
            </>
      )
  }
  
  useEffect(()=>{
    var sections = document.getElementsByClassName("show");
    var controller = new ScrollMagic.Controller();

    var tl = new TimelineMax();
    var bodyAnim = new TimelineMax();
    var offset = window.innerHeight;
    for (let i = 1; i < sections.length; i++) {
      tl.from(sections[i], 1, { x: "100%", ease: Linear.easeNone }, "+=1");
    }
    
  }),[]
  return (
    <>
      <div id="portafolio" className="portafolio">
        <div className="container">
          <div className="portafolio1">
            <div className="description">
              <div className="title">
                <h1>
                  <svg>
                    <circle cx="20" cy="20" r="20" />
                  </svg>
                  Portafolio
                </h1>
              </div>
              <div className="separador">
                <div className="imagen">
                  <div className="image">
                    <Img fluid={data.doc.childImageSharp.fluid} />
                  </div>
                </div>
                <div className="text">
                  Loremipsumdolorsitamet,consectetuer
                  adipiscingelit.Aeneancommodoligulaegetdolor.
                  Aeneanmassa.Cumsociisnatoquepenatibuset
                  magnisdisparturientmontes,nasceturridiculus
                  mus.Donecquamfelis,ultriciesnec,pellentesque
                  eu,pretiumquis,sem.Nullaconsequatmassaqu
                </div>
              </div>
            </div>
          </div>

        </div>
        <div id="portafolioShow" className="portafolio">
          <div id="pinContainer">
            <div className="show">
              <div className="section">
                <div className="image">
                  <Img fluid={data.automatizacion.childImageSharp.fluid} />
                </div>
                <div className="text">
                  Loremipsumdolorsitamet,consectetuer
                  adipiscingelit.Aeneancommodoligulaegetdolor.
                  Aeneanmassa.Cumsociisnatoquepenatibuset
                </div>
                <div className="title">
                  <h1>Automatización</h1>
                </div>
              </div >
            </div>
            <div className="show">
              <div className="section">
                <div className="image">
                  <Img fluid={data.mantenimiento.childImageSharp.fluid} />
                </div>
                <div className="text">
                  Loremipsumdolorsitamet,consectetuer
                  adipiscingelit.Aeneancommodoligulaegetdolor.
                  Aeneanmassa.Cumsociisnatoquepenatibuset
                </div>
                <div className="title">
                  <h1>Mantenimiento</h1>
                </div>
              </div >

            </div>
          </div>
        </div>
      </div>

  </>
  )

  }

  
export default Portafolio
