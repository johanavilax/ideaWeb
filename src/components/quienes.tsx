import React, {useState, useEffect} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//Lottie
import lottie from 'lottie-web'
//ScrollMagic
import * as ScrollMagic from "scrollmagic";
// //Gsap
import {CSSPlugin, Power4, Linear} from 'gsap/all'
import gsap , { TimelineMax, TweenMax, TweenLite } from "gsap";

import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
gsap.registerPlugin(CSSPlugin)

const Quienes= ()=>{
  const data = useStaticQuery(graphql `
  query {
    icono: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

        //Ref
        const preloaderRef = React.createRef<HTMLDivElement>()
    useEffect(()=>{
      ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
      const speed = 1
      var second = (document.getElementById("quienes1"))
      const anim = lottie.loadAnimation({
        renderer: 'svg',
        container: preloaderRef.current,
        animationData: require("../animations/preloader.json"),
        autoplay: false,
        loop: false,
    })
    const controller1 =  new ScrollMagic.Controller()
    const tl = new TimelineMax();

    tl.to({frame: 0}, 1 ,{
      frame: anim.totalFrames-1,
      onUpdate: (e)=>{
          anim.goToAndStop((Math.round(tl.progress() * 300 * speed)), true)
      },
      ease: Linear.easeNone,
      })
      new ScrollMagic.Scene({
        triggerElement: ".oculto1",
        duration :200,
        offset: -50
    }).setTween(tl).setPin(preloaderRef).addTo(controller1)
    },[])
    const circles = ()=>{
      var tamano = "1020"
      return (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width={tamano} height="20" viewBox={`0 0 ${tamano} 20`}>
          <line id="Línea_1" data-name="Línea 1" x2={tamano} transform="translate(10 10)" fill="none" stroke="#011c27" stroke-linecap="round" stroke-width="20" stroke-dasharray="0 30"/>
        </svg>
      </>
      )
    }
 
    
    return(
        <div id="quienes" className="quienes">
            <div className="container">
              <div className="quienes1">
              <div className='oculto1'/>
                <div className="description">
                  Loremipsumdolorsitamet,consectetueradipiscingelit.Aeneancommodo
                  ligulaegetdolor.Aeneanmassa.Cumsociisnatoquepenatibusetmagnisdis
                  parturientmontes,nasceturridiculusmus.Donecquamfelis,ultriciesnec,
                  pellentesqueeu,pretiumquis,sem.Nullaconsequatmassaquisenim.Donec
                  pedejusto,fringillavel,aliquetnec,vulputateeget,arcu.Inenimjusto,rhoncus
                </div>
                <div className="circle">
                  <svg >
                    <circle cx="177" cy="177" r="177" />
                  </svg>
                </div>
                <div className="circles">
                        <svg >
                            <circle cx="220" cy="220" r="200" />
                            <circle cx="220" cy="220" r="150" />
                        </svg>
                    </div>
              </div>
              <div className="quienes2">
                <div className="quienesSomos">
                  <div className="title">
                    <h1>
                      <svg >
                        <circle cx="20" cy="20" r="20" />
                      </svg>
                      Quienes Somos
                    </h1>
                  </div>
                  <div className="separador">
                    <div className="imagen">
                      <div className="image">
                        <Img fluid={data.icono.childImageSharp.fluid} />
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
              <div className="misionVision">
                  <div className="izq">
                      <div className="arriba">
                        <svg width="600" height="300">
                          <rect width="600" height="300"  />
                        </svg>
                      </div>
                      <div className="abajo">
                        <svg width="600" height="300">
                          <rect width="600" height="300"  />
                        </svg>
                      </div>
                  </div>
                  <div className="der">
                      <div className="arriba">
                          <h1>Misión</h1>   
                          <p>
                          Loremipsumdolorsitamet,consectetueradipiscing
                          elit.Aeneancommodoligulaegetdolor.Aenean
                          massa.Cumsociisnatoquepenatibusetmagnisdis
                          parturientmontes,nasceturridiculusmus.Donec
                          </p>
                      </div>
                      <div className="abajo">
                          <h1>Visión</h1>     
                          <p>
                          Loremipsumdolorsitamet,consectetueradipiscing
                          elit.Aeneancommodoligulaegetdolor.Aenean
                          massa.Cumsociisnatoquepenatibusetmagnisdis
                          parturientmontes,nasceturridiculusmus.Donec
                          </p>
                      </div>
                  </div>
              </div>
              <div className="aspiracion">
                  <div className="circles">
                    {circles()}
                  </div>
                  <div className="izq">
                    <div className="circle">
                      <svg >
                        <circle cx="177" cy="177" r="177" />
                      </svg>
                      <h1>Aspiración</h1>
                      <p>
                        Loremipsumdolorsitamet,consectetueradipiscing
                        elit.Aeneancommodoligulaegetdolor.Aenean
                        massa.Cumsociisnatoquepenatibusetmagnisdis
                        parturientmontes,nasceturridiculusmus.Donec
                      </p>
                    </div>
                  </div>
                  <div className="der">
                    <div className="circle">
                      <svg >
                        <circle cx="177" cy="177" r="177" />
                      </svg>
                      <h1>Trayectoria</h1>
                      <p>
                        Loremipsumdolorsitamet,consectetueradipiscing
                        elit.Aeneancommodoligulaegetdolor.Aenean
                        massa.Cumsociisnatoquepenatibusetmagnisdis
                        parturientmontes,nasceturridiculusmus.Donec
                      </p>
                    </div>
                  </div>
              </div>
           </div>
 

        </div>

    )
}

export default Quienes