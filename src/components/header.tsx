import React , {useState,useEffect,createRef} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {Link} from "react-scroll"
import lottie from "lottie-web"
//ScrollMagic
import ScrollMagic from "scrollmagic";
//Gsap
import {CSSPlugin, Power4, Linear, gsap} from 'gsap/all'
import { TimelineMax, TweenMax, TweenLite } from "gsap";

import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
const isElementTotallyVisible=(elto)=> {
  var anchoViewport = window.innerWidth || document.documentElement.clientWidth;
  var alturaViewport = window.innerHeight || document.documentElement.clientHeight;
  //Posición de la caja del elemento
  var caja = elto.getBoundingClientRect();
  return ( caja.top >= 0 && 
           caja.bottom <= alturaViewport &&
           caja.left >= 0 &&
           caja.right <= anchoViewport );
}
const inViewportTotally = (elto, handler)=> {
  var anteriorVisibilidad = isElementTotallyVisible(elto);    

   const detectarPosibleCambio = () =>{
      var esVisible = isElementTotallyVisible(elto);
      if (esVisible != anteriorVisibilidad) { 
          anteriorVisibilidad = esVisible;
          if (typeof handler == "function")
              handler(esVisible, elto);
      }
  }
  window.addEventListener("load", detectarPosibleCambio);
  window.addEventListener("resize", detectarPosibleCambio);
  window.addEventListener("scroll", detectarPosibleCambio);
}
const Header = (props) => {

  const {scroll} = props
  const data = useStaticQuery(graphql `
  query {
    placeholderImage: file(relativePath: { eq: "idea.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)


  const [actualPosition,setactualPosition]= useState("")
  const [animated, setanimated] = useState(false)

  const preloaderRef = createRef<HTMLDivElement>()
    useEffect(() => {
      console.clear()

      const logo = document.getElementById('logo');
      const inicio = document.getElementById("inicio");
      const quienes = document.getElementById("quienes");
      const servicios = document.getElementById("servicios");
      const portafolio = document.getElementById("portafolio");
      const contacto = document.getElementById("contacto");

      ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
      const anim = lottie.loadAnimation({
        container: preloaderRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: require("../animations/idealogo.json"),
      });
      anim.setSpeed(0.8)
      const controller1 =  new ScrollMagic.Controller()
      const tl = new TimelineMax();
      tl.to({frame: 0}, 1 ,{
        frame: anim.totalFrames-1,
        onUpdate: (e)=>{
          setTimeout(() => {anim.play()}, 500);

        },
        ease: Linear.easeNone,
        })
        new ScrollMagic.Scene({
          triggerElement: ".oculto1",
          duration : 200,
        }).setTween(tl).setPin(preloaderRef).addTo(controller1)

        const t2 = new TimelineMax({ 
          onComplete:function()
          {	
            logo.addEventListener("click",()=>{
              inicio.scrollIntoView({behavior: "smooth"});
            })
            setanimated(true)
          }
        });

        anim.addEventListener("complete", function () {
          if(!animated){
            t2.fromTo(logo,1,{position:"absolute",width:'850',top:'100%',left:'-50%',transform:'scale(1)'},{position:"relative",width:'100%',top:'0',left:'0',transform:'scale(1.5)'},'start').play()
          }

       })

      
       const cambiaVisibilidad =(visible, elemento)=>{
         if(visible){
          setactualPosition(elemento.id)
         }
       }

       inViewportTotally(inicio, cambiaVisibilidad);
       inViewportTotally(quienes, cambiaVisibilidad);
       inViewportTotally(servicios, cambiaVisibilidad);
      //  inViewportTotally(portafolio, cambiaVisibilidad);
      //  inViewportTotally(contacto, cambiaVisibilidad);
    }, []);
    const clickMenu = ()=>{
      
      console.log(scroll.current)
    }
  return (
    <>
    <header >
      <div className="container">
            <div className="innerHeader">
              <div className="logo" >
                  <div className="mainImage" id="logo" ref={preloaderRef}/>
              </div>
              <div className="navigation">
                <nav>
                  <a onClick={clickMenu} >Quiénes somos</a>
                  <a onClick={clickMenu} >Servicios</a>
                  <a onClick={clickMenu} >Portafolio</a>
                  <a onClick={clickMenu} >Contacto</a>
                </nav>
              </div>
            </div>
      </div>
    </header>
    <div className="circles">
      <h1>{actualPosition}</h1>
      <svg >
          <circle cx="220" cy="220" r="200" />
          <circle cx="220" cy="220" r="150" />
      </svg>
    </div>
  </>
  )

  }

  
export default Header
