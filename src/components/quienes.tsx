import React, {useState, useEffect,useCallback,useContext} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

//Lottie
import lottie from 'lottie-web'
//ScrollMagic
import * as ScrollMagic from "scrollmagic";
// import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators"
// //Gsap
import {CSSPlugin, Power4, Linear} from 'gsap/all'
import gsap , { TimelineMax, TweenMax, TweenLite,Back } from "gsap";

import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

import bombillo1 from '../images/bombillos/bombillo1.svg'
import bombillo2 from '../images/bombillos/bombillo2.svg'
import bombillo3 from '../images/bombillos/bombillo3.svg'
import bombillo4 from '../images/bombillos/bombillo4.svg'
import bombillo5 from '../images/bombillos/bombillo5.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import TransitionLink from 'gatsby-plugin-transition-link'
gsap.registerPlugin(CSSPlugin)
//context transition
import {TransitionContext} from '../context/transitionContext';
const Quienes= (props)=>{

  const {animated, setanimated,finish,setfinish,to,setto} = useContext(TransitionContext)
  const data = useStaticQuery(graphql `
  query {
    icono: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    doc: file(relativePath: { eq: "documento.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      proyecto: file(relativePath: { eq: "proyectos.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      inicio: file(relativePath: { eq: "varias(2).jpg" }) {
        childImageSharp {
          fixed(width: 1000) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      quienes: file(relativePath: { eq: "varias(5).jpg" }) {
        childImageSharp {
          fixed(width: 3000) {
            ...GatsbyImageSharpFixed
          }
        }
      }
  }
  `)

  const [actualBombillo,setactualBombillo]=useState(bombillo1)
    //Ref
    const preloaderRef = React.createRef<HTMLDivElement>()
    useEffect(()=>{
      // console.log(actualBombillo)

    },[actualBombillo])

    useEffect(()=>{
      const vh = window.innerHeight;
      var controller = new ScrollMagic.Controller();
      new ScrollMagic.Scene({triggerElement: "#quienes2", duration:2*vh,triggerHook:0})
      .setPin(".der")
      .addTo(controller);
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
    const animationClose = ()=>{
        const t2 = new TimelineMax({
          onComplete:()=>{
            setanimated(true)
          }
         })
        t2.to("#transicion",1,{left:"0",ease:Power4.easeInOut},"textIn")
        .to("#transicion h1",1,{left:"50%",ease:Power4.easeInOut},"textIn").play()
  
      }
    const exitAnim=()=>{
      setfinish(true)
    }
    useEffect(()=>{
      if(animated && finish){
        const t2 = new TimelineMax({})
        t2.to("#transicion",1,{left:"-100%",ease:Power4.easeInOut},"textOut")
        .to("#transicion h1",1,{left:"150%",ease:Power4.easeInOut},"textOut").play()
        setanimated(false)
        setfinish(false)
      }
    },[animated,finish])
const circle= ()=>{
  return(
    <>
      <div className="circle">
        <svg >
        <circle cx="177" cy="177" r="177" />
        </svg>
          <h1>Proyecto</h1>
          <p>
            Loremipsumdolorsitamet,consectetuer
            adipiscingelit.Aeneancommodoligulaegetdolor.
          </p>
      </div>
    </>
  )
}

    return(
      <>
      <div id="inicio" >
        <div className="container">
          <div className="inicio">
            <div className="decoration"/>
            <div className="image">
                  <Img fixed={data.inicio.childImageSharp.fixed} 
                        objectFit="cover"
                        objectPosition="50% 50%"
                  />
            </div>
            <div className='oculto1' />
            <div className="containerCircle">
            <div  id="descriptionInicio" className="descriptionInicio">
            INGENIERÍA Y DESARROLLO ENERGÉTICO APLICADO SAS es una empresa enfocada en el desarrollo de implementación 
            de nuevas tecnologías en diferentes áreas del mercado nacional.
            Buscamos ofrecer servicios y productos que satisfagan las necesidades
            de nuestros clientes, a través de puntualidad, compromiso y alta calidad.
                </div>
              <div className="circle">


                <div  id="descriptionInicioF" className="descriptionInicio">
                INGENIERÍA Y DESARROLLO ENERGÉTICO APLICADO SAS es una empresa enfocada en el desarrollo de implementación 
                de nuevas tecnologías en diferentes áreas del mercado nacional.
                Buscamos ofrecer servicios y productos que satisfagan las necesidades
                de nuestros clientes, a través de puntualidad, compromiso y alta calidad.
                </div>
              </div>
            </div>
           
          </div>
        </div>

      </div>

      <div id="quienes" className="quienes">
          <div id="quienes2" className="quienes2">
              <div className="izq">
              <img src="../ideaBlanco.png"/>
              <p className="quienes">
                Entre nuestros servicios encontramos
                el diseño de sistemas de generación 
                de energía renovables, automatización 
                y mantenimiento de procesos industriales, 
                diseño de sistemas ergonómicos, fabricación 
                de basculas camioneras y desarrollo de software.

              </p>
              <p className="mision">
              <h1>Misión</h1>
                Loremipsumdolorsitamet,consectetueradipiscing
                elit.Aeneancommodoligulaegetdolor.Aenean
                massa.Cumsociisnatoquepenatibusetmagnisdis
                parturientmontes,nasceturridiculusmus.Donec
              </p>
              
              <p className="vision">
              <h1>Visión</h1>
                Loremipsumdolorsitamet,consectetueradipiscing
                elit.Aeneancommodoligulaegetdolor.Aenean
                massa.Cumsociisnatoquepenatibusetmagnisdis
                parturientmontes,nasceturridiculusmus.Donec
              </p>
                            
              <p className="porque">
              <h1>Por qué elegirnos</h1>
                  Porque somos un equipo de profesionales 
                  que trabajamos empeñados en asegurar el 
                  éxito de nuestros clientes aseguramos el
                  cumplimiento de los plazos establecidos,
                  nos involucramos al 100% en cada proyecto
                  y trabajamos con transparencia, eficiencia y empatía.
              </p>
              </div>
              <div className="der">
                <div className="decoracion">
                    <h1>
                      Quiénes somos
                    </h1>
                  </div>
                <img src="../quienesSomos.jpg"/>
              </div>
          </div>
          <div id="portafolioHome">
              <div className="izq">
                  <img src="../porque.jpg"/>
              </div>
              <div className="der">
                <div className="portafolio">
                <h1>Portafolio</h1>
                <TransitionLink className="flecha" to="/portafolio" onClick={()=>setto("Portafolio")}
                  exit={{trigger:()=>exitAnim()}} entry={{trigger: () => animationClose()}}>
                 Te invitamos a conocer nuestro portafolio de servicios
                 <FontAwesomeIcon icon={faLongArrowAltRight} />
                </TransitionLink>
                </div>
              </div>
          </div>
          <div className="proyecto">
            <div className="card">
              <div className="title">
                <h1>
                  <svg>
                    <circle cx="20" cy="20" r="20" />
                  </svg>
                  Proyectos
                </h1>
              </div>
              <div className="separador">
                <div className="imagen">
                  <div className="image">
                    <Img fluid={data.proyecto.childImageSharp.fluid} />
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
          <div className="proyectos">
            {circle()}
            {circle()}
            {circle()}
        </div>
      </div>


      </>
    )
}

export default Quienes