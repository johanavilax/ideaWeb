import React , {useState,useEffect,createRef} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {Link} from "react-scroll"
import lottie from "lottie-web"
//ScrollMagic
import ScrollMagic from "scrollmagic";
//Gsap
import {CSSPlugin, Power4, Linear, gsap } from 'gsap/all'
import { TimelineMax, TweenMax, TweenLite,TimelineLite} from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
// const circulo = require("../images/circulo.svg") ;
// const circulo2 = require("../images/circulo2.svg") ;

import circulo from '../images/circulo.svg'


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
      // const servicios = document.getElementById("servicios");
      // const portafolio = document.getElementById("portafolio");
      // const contacto = document.getElementById("contacto");
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
            const logo2 = (logo.querySelectorAll("svg")[0].querySelectorAll("g")[0])
            logo2.addEventListener("click",()=>{
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

  
      
     
       /// animacion circulos
       const c1 = document.getElementById("circulo1")
       const c1Anim = TweenMax.to(c1, 2, {rotation:360,paused:false,ease:Linear.easeNone});
       const c2 = document.getElementById("circulo2")
       const c2Anim = TweenMax.to(c2, 2, {rotation:-360,paused:false,ease:Linear.easeNone});  
       document.addEventListener("scroll", (e)=>{
        // const elementos = [inicio,quienes,servicios,portafolio]
        const elementos = [inicio,quienes]
        for (let k = 0; k < elementos.length; k++) {
          
          const screenPosition = elementos[k].getBoundingClientRect();  

          if(screenPosition.top <= 0 && screenPosition.bottom <= screenPosition.height){
            if(c1Anim.progress()===1 || c1Anim.progress()===0){
              if(c1Anim.reversed()){
                c1Anim.play();
                c2Anim.play();
            }    else {
                c1Anim.reverse();
                c2Anim.reverse();
            }
            }
            if(document.getElementById("actualNav").innerHTML !== elementos[k].id){
              setactualPosition(elementos[k].id)

            }
          }
        }
       });
    }, []);
    useEffect(()=>{
      const text = document.getElementById("actualNav")
      const textAnim = new TimelineMax({ })
      textAnim.fromTo(text,1,{color:"black"},{color:"#0cb1f1"},'start').play()
    },[actualPosition])
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
                <Link smooth={true} to="quienes" >Quiénes somos</Link>
                <Link  to="/servicios" >Servicios</Link>
                <Link  to="/portafolio" >Portafolio</Link>
                <Link smooth={true} to="contacto" >Contacto</Link>
                </nav>
              </div>
            </div>
      </div>
    </header>
    <div className="circles">
      <div className="containCircles">
      <h1 id="actualNav">{actualPosition}</h1>
        {/* <svg id="circulo1">
            <circle  cx="220" cy="220" r="200" />
        </svg>
        <svg id="circulo2">
        <circle cx="220" cy="220" r="150" />
        </svg> */}
        <img id="circulo1" src={circulo} />
        <img id="circulo2" src={circulo} />
      </div>
    </div>
  </>
  )

  }

  
export default Header
