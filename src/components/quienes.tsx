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
      new ScrollMagic.Scene({triggerElement: "#quienes2", duration:2.5*vh,triggerHook:0})
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
              Brindar soluciones profesionales dirigidas a sectores del 
              mercado industrial, mediante estrategias innovadoras  y 
              conocimientos de ingeniería enfocados en automatización, 
              diseño, mantenimiento, ergonomía Industrial, área de basculas
               camioneras y demás sistemas de pesaje en basculas, ergonomía industrial
                y manipulación de toda la línea de energías renovables.   Direccionando
                 e identificando las necesidades de nuestros clientes, con los más altos 
                 estándares de calidad, compromiso, puntualidad  y respeto.
              </p>
              
              <p className="vision">
              <h1>Visión</h1>
              Posesionarnos como  líderes en el sector de industrial para 
              los próximos 5 años con fuerte proyección internacional,
               basados en principios cooperativos sólidos, a través de
                soluciones  innovadoras que contribuyan al posicionamiento 
                de la empresa, reconocimiento a favor de nuestro objeto social.
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
              <div className="confian">
              <h1>Ellos confian en nosotros</h1>
                    <div className="arriba">
                      <img className="imagenes" src="../company.svg" alt=""/>
                      <img className="imagenes" src="../company.svg" alt=""/>
                      <img className="imagenes" src="../company.svg" alt=""/>
                    </div>
                    <div className="abajo">
                      <img className="imagenes" src="../company.svg" alt=""/>
                      <img className="imagenes" src="../company.svg" alt=""/>
                      <img className="imagenes" src="../company.svg" alt=""/>
                    </div>
              </div>

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
                <h1>Proyectos</h1>
                <TransitionLink className="flecha" to="/proyectos" onClick={()=>setto("Proyectos")}
                  exit={{trigger:()=>exitAnim()}} entry={{trigger: () => animationClose()}}>
                 Te invitamos a conocer nuestros proyectos realizados.
                 <FontAwesomeIcon icon={faLongArrowAltRight} />
                </TransitionLink>
                </div>
              </div>
          </div>
          <div id="serviciosHome">
            <h1>Somos expertos en estas áreas de ingeníeria</h1>
            <div className="alinear">
              <TransitionLink className="flecha" to="/portafolio" onClick={()=>setto("Portafolio")}
                    exit={{trigger:()=>exitAnim()}} entry={{trigger: () => animationClose()}}>
                  <p>Conoce más</p>
                  <FontAwesomeIcon icon={faLongArrowAltRight} />
                  </TransitionLink>
            </div>

              <div className="tarjeta uno">
                <div className="iconos"><img src="../automatizacion.svg"/></div>
                <div className="titulo">Automatización industrial</div>
              </div>
              <div className="tarjeta dos">
                <div className="iconos"><img src="../software.svg" /></div>
                <div className="titulo">Desarrollo de software</div>
              </div>
              <div className="tarjeta tres">
                <div className="iconos"><img src="../ambiental.svg" /></div>
                <div className="titulo">Energias renovables</div>
              </div>
              <div className="tarjeta cuatro">
                <div className="iconos"><img src="../industrial.svg" /></div>
                <div className="titulo">Diseño industrial</div>
              </div>
        </div>
      </div>


      </>
    )
}

export default Quienes