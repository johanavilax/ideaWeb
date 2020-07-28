import React , {useState,useEffect,createRef} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {Link} from "react-scroll"
import lottie from "lottie-web"
//ScrollMagic
// import ScrollMagic from "scrollmagic";
//Gsap
import {CSSPlugin, Power4, Linear, gsap } from 'gsap/all'
import { TimelineMax, TweenMax, TweenLite,TimelineLite} from "gsap";
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
// const circulo = require("../images/circulo.svg") ;
// const circulo2 = require("../images/circulo2.svg") ;
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import circulo from '../images/circulo.svg'
import TransitionLink from 'gatsby-plugin-transition-link'


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
      const actualPos = window.location.pathname
      console.log(actualPos)
      //Main Page
      // ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
      const anim = lottie.loadAnimation({
        container: preloaderRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: require("../animations/idealogo.json"),
      });
      const logo = document.getElementById('logo');

      if(actualPos==="/"){
        const inicio = document.getElementById("inicio");
        const quienes = document.getElementById("quienes");
        // const servicios = document.getElementById("servicios");
        // const portafolio = document.getElementById("portafolio");
        // const contacto = document.getElementById("contacto");

        anim.setSpeed(0.8)
        anim.goToAndStop(anim.totalFrames-1, true)
        anim.setDirection(-1);  
        // const controller1 =  new ScrollMagic.Controller()
        const tl = new TimelineMax();
        tl.to({frame: 0}, 1 ,{
          frame: anim.totalFrames-1,
          onUpdate: (e)=>{
            setTimeout(() => {anim.play()}, 500);
  
          },
          ease: Linear.easeNone,
          })
          // new ScrollMagic.Scene({
          //   triggerElement: ".oculto1",
          //   duration : 200,
          // }).setTween(tl).setPin(preloaderRef).addTo(controller1)
  
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
      }else if(actualPos==="/servicios"){
        setactualPosition("Servicios")
        anim.goToAndStop(0)
        const t2 = new TimelineMax({ })
        t2.fromTo(logo,1,{position:"absolute",width:'850',top:'100%',left:'-50%',transform:'scale(1)'},{position:"relative",width:'100%',top:'0',left:'0',transform:'scale(1.5)'},'start').play()
      }else if(actualPos=="/portafolio"){
        setactualPosition("Portafolio")
        anim.goToAndStop(0)
        const t2 = new TimelineMax({ })
        t2.fromTo(logo,1,{position:"absolute",width:'850',top:'100%',left:'-50%',transform:'scale(1)'},{position:"relative",width:'100%',top:'0',left:'0',transform:'scale(1.5)'},'start').play()
      }
      
  
      
     

    }, []);
    useEffect(()=>{
      const text = document.getElementById("actualNav")
      const textAnim = new TimelineMax({ })
      textAnim.fromTo(text,1,{color:"black"},{color:"#0cb1f1"},'start').play()
    },[actualPosition])
    const animationClose = (node, e,exit,entry)=>{
      const circle = document.getElementById("transicion")
      circle.style.display = "initial";
        var w = window.innerWidth; 
        console.log(w)
        var h = window.innerHeight;
        const circleAnim = new TimelineMax({
          onComplete:()=>{
            const circleAnim2 = new TimelineMax({})
            circleAnim2.fromTo(circle,0.5,{width:w*3,height:h*3},{width:"0px",height:"0px"},'start').play()
          }

         })
      circleAnim.fromTo(circle,0.5,{width:"0px",height:"0px"},{width:w*3,height:h*3},'start').play()
    }
    const exitAnim=()=>{
      const circle = document.getElementById("transicion")

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
                <TransitionLink  to="/"  exit={{trigger:()=>exitAnim()}}  entry={{trigger: ({ node, e, exit, entry }) => animationClose(node,e,exit,entry),}}>
                  Quiénes somos
                  </TransitionLink >
                <TransitionLink  to="/servicios"  exit={{}}  entry={{trigger: ({ node, e, exit, entry }) => animationClose(node,e,exit,entry),}}>
                    servicios
                  </TransitionLink>
                <TransitionLink  to="/portafolio"  exit={{}}  entry={{trigger: ({ node, e, exit, entry }) => animationClose(node,e,exit,entry),}}>
                  Portafolio
                </TransitionLink>
                <Link smooth={true} to="contacto" >Contacto</Link>
                </nav>
              </div>
            </div>
      </div>
    </header>
    <div className="circles">
      <div className="containCircles">
      <h1 id="actualNav">{actualPosition}</h1>
        <img id="circulo1" src={circulo} />
        <img id="circulo2" src={circulo} />
        <div id="transicion"/>
      </div>
    </div>
  </>
  )

  }

  
export default Header
