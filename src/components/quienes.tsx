import React, {useState, useEffect} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//Lottie
import lottie from 'lottie-web'
//ScrollMagic
import * as ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators"
// //Gsap
import {CSSPlugin, Power4, Linear} from 'gsap/all'
import gsap , { TimelineMax, TweenMax, TweenLite,Back } from "gsap";

import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

import bombillo1 from '../images/bombillos/bombillo1.svg'
import bombillo2 from '../images/bombillos/bombillo2.svg'
import bombillo3 from '../images/bombillos/bombillo3.svg'
import bombillo4 from '../images/bombillos/bombillo4.svg'
import bombillo5 from '../images/bombillos/bombillo5.svg'

gsap.registerPlugin(CSSPlugin)

const Quienes= (props)=>{

  const {start}=props
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
      var bombillos = [bombillo1,bombillo2,bombillo3,bombillo3,bombillo4,bombillo5]
      const height = window.innerHeight
      const width = window.innerWidth
      var porcentaje= -50;
      var interval
      if(start){
        var oldScroll = 0;

        const scrollFun = (e)=>{
          const actualPos = window.location.pathname
          if(actualPos!=="/"){
            removeEventListener("scroll",scrollFun)
          }else{
          //animacion texto descripcion inicio ------------------
          var desc = document.getElementById("descriptionInicio")
          var descF = document.getElementById("descriptionInicioF")
          // const screenPosition = desc.getBoundingClientRect(); 
          // console.log(screenPosition.top) 
          if( window.scrollY <= height ){
            if(oldScroll < window.scrollY){
              porcentaje = porcentaje +Math.abs(oldScroll-window.scrollY)/4
            }else{
              porcentaje = porcentaje -Math.abs(oldScroll-window.scrollY)/4
            }

            if(porcentaje >= -50 && porcentaje <= 20){
              porcentaje=porcentaje
            }else if(porcentaje <-50){
              porcentaje = -50
            }else if(porcentaje > 20){
              porcentaje = 20
            }
            desc.style.top = `${porcentaje}%`;
            descF.style.top = `${porcentaje}%` ;
          }
          oldScroll = window.scrollY;
          //-------------------------------------------------------
          ///mision vision ----------------------------
          
          //---------------------
        }
        }
        const quienesScroll = document.addEventListener("scroll",scrollFun)

        //tarjeta de quienes somos animacion ------------------------
        var controller = new ScrollMagic.Controller();
        const t2 = new TimelineMax({ 
          onUpdate: (e,s)=>{
            if(interval){
              clearInterval(interval);
            }
            const time = 0.2
            var count = 1
            for (let times = 0; times <= 1; times=times+time) {
              if(times < t2.progress() && t2.progress() < times+time){
                setactualBombillo(bombillos[count])
              }
              count ++
            }
       
        },
        onComplete:()=>{
          function wait(ms)
          {
              var d = new Date();
              var d2 = new Date();
              do { d2 = new Date(); }
              while(d2-d < ms);
          }
          // interval = setInterval(()=>{

            // for (let k = 1; k < bombillos.length; k++) {
            //   console.time("test")
            //   console.log("seteando",k)
            //   wait(2000)
            //   setactualBombillo(bombillos[k])
            //   console.timeEnd("test")
            // }

          // },1000)

        }
        })
        var tween = t2.fromTo(".quienesSomos", 1, {left: width*1.2}, {left: width/2});
        var scene = new ScrollMagic.Scene({triggerElement: "#quienes2", offset:50,duration: 500})
            .setTween(tween)
            // .addIndicators({name: "staggering"}) // add indicators (requires plugin)
            .addTo(controller);
        //----------------------------------------------------------
        ///mision vision ----------------------------
        var misionControl = new ScrollMagic.Controller();
        var scene = new ScrollMagic.Scene({triggerElement: "#izqMision", duration: height*0.8,offset:height*0.8*0.5})        
        .setPin("#izqMision")
        .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
        .addTo(controller);     
        for (let k = 0; k < bombillos.length; k++) {
          setTimeout(()=>{
            setactualBombillo(bombillos[k])
          },1000)
          
        }   
        //---------------------
      }
    },[start])

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
 /// TODO:
//inicio imagenes de abajo hacia arriba
//  targeta hacia la izquierda con scroll 
//  trayecto puntos aparecen cuando toquen aparece a abajo hacia arraba
//   circulos se juntan y  quedan como el fondo de las fotos automatizacion
//  proyectos y servicios aparte
//servicios en scrollhorizonatal
// cambiar nombre de servicios a portafolio
// cambiar de proyecto a portafolio
//en proyecto poner de fondo videos
//inicio poner imagenes en transicion 

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
            <div className="image">
                  <div className="box red" id="box1">1</div>
                  <div className="box green" id="box2">2</div>
                  <div className="box blue" id="box3"/>
                <div  className="gradient"/>
            </div>
            <div className='oculto1' />
            <div className="containerCircle">
            <div  id="descriptionInicio" className="descriptionInicio">
                  Loremipsumdolorsitamet,consectetueradipiscingelit.Aeneancommodo
                  ligulaegetdolor.Aeneanmassa.Cumsociisnatoquepenatibusetmagnisdis
                  parturientmontes,nasceturridiculusmus.Donecquamfelis,ultriciesnec,
                  pellentesqueeu,pretiumquis,sem.Nullaconsequatmassaquisenim.Donec
                  pedejusto,fringillavel,aliquetnec,vulputateeget,arcu.Inenimjusto,rhoncus
                </div>
              <div className="circle">


                <div  id="descriptionInicioF" className="descriptionInicio">
                  Loremipsumdolorsitamet,consectetueradipiscingelit.Aeneancommodo
                  ligulaegetdolor.Aeneanmassa.Cumsociisnatoquepenatibusetmagnisdis
                  parturientmontes,nasceturridiculusmus.Donecquamfelis,ultriciesnec,
                  pellentesqueeu,pretiumquis,sem.Nullaconsequatmassaquisenim.Donec
                  pedejusto,fringillavel,aliquetnec,vulputateeget,arcu.Inenimjusto,rhoncus
                </div>
              </div>
            </div>
           
          </div>
        </div>

      </div>

      <div id="quienes" className="quienes">
        <div className="container">
          <div id="quienes2" className="quienes2">
            <div className="quienesSomos">
              <div className="title">
                <h1>
                  <svg>
                    <circle cx="20" cy="20" r="20" />
                  </svg>
                  Quienes Somos
                </h1>
              </div>
              <div className="separador">
                <div className="imagen">
                  <div className="image">
                    <img src={actualBombillo} />
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
            <div className="izq" id="izqMision">
            <div className="arriba" id="mision">
              <img src={require("../images/mision.jpg")}/>
              </div>
              <div className="abajo">
                <img src={require("../images/vision.jpg")}/>
              </div>
            </div>
            <div className="der">
              <div className="arriba">

                <p>
                 <h1>Misión</h1>
                  Loremipsumdolorsitamet,consectetueradipiscing
                  elit.Aeneancommodoligulaegetdolor.Aenean
                  massa.Cumsociisnatoquepenatibusetmagnisdis
                  parturientmontes,nasceturridiculusmus.Donec
                </p>
              </div>
              <div className="arriba">
                <p>
                  <h1>Visión</h1>
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
                <svg>
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
                <svg>
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
      </div>


      </>
    )
}

export default Quienes