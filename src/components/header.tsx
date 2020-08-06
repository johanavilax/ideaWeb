import React , {useState,useEffect,createRef,useCallback,useContext} from "react"
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

//context transition
import {TransitionContext} from '../context/transitionContext';
const Header = (props) => {

  const {animated, setanimated,finish,setfinish,to,setto} = useContext(TransitionContext)
  const data = useStaticQuery(graphql `
  query {
    logo: file(relativePath: { eq: "idea.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logoBlanco: file(relativePath: { eq: "ideaBlanco.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)


  const [actualPosition,setactualPosition]= useState("")
  const [click,setclick]= useState(false)
  const preloaderRef = createRef<HTMLDivElement>()

  const[actualLogo,setactualLogo] = useState("../idea.png")
    useEffect(() => {

      const vh = window.innerHeight;
      const logo = document.querySelectorAll('#logo .logo')[0];
        window.addEventListener('scroll',function (e) {
          console.log(window.location.pathname)
          if(window.location.pathname === "/"){
            let positionTop = document.querySelector('body').getBoundingClientRect().top*-1
            if (positionTop > 0.9*vh) {
                logo.style.opacity = ("1")
            }else{
              logo.style.opacity = ("0")
            }
          
              if(positionTop > 1.9*vh && positionTop <5.65*vh){
                // setactualLogo("../ideaBlanco.png")
                logo.style.opacity = ("0")
              }else if(positionTop < 1.9*vh || positionTop >5.65*vh){
                logo.style.opacity = ("1")
                setactualLogo("../idea.png")
              }
            }else if(window.location.pathname === "/portafolio/"){
              logo.style.opacity = ("1")
              setactualLogo("../ideaBlanco.png")
            }
           
        });
      const menu = document.getElementById("menu-toggle")
      var logoVisible = true;
      menu.addEventListener("click",()=>{
        setclick(true)
        if(logoVisible){
          setactualLogo("../ideaBlanco.png")
          logoVisible=false;
        }else{
          setactualLogo("../idea.png")
          logoVisible=true;
        }
        changeHam()
      })
    }, []);
    useEffect(()=>{
      const text = document.getElementById("actualNav")
      const textAnim = new TimelineMax({ })
      textAnim.fromTo(text,1,{color:"black"},{color:"#0cb1f1"},'start').play()
    },[actualPosition])

    const changeHam =()=>{
      const menu = document.getElementById("menu-toggle")
      const menuSection = document.getElementsByClassName("menu-section")
      const nav = document.getElementsByTagName("nav")[0].getElementsByClassName("ul")
      const header = document.getElementsByTagName("header")
      header[0].classList.toggle("visible")
      menu.classList.toggle("on")
      for (let k = 0; k < menu.childNodes.length; k++) {
       menu.childNodes[k].classList.toggle("bgChange")
      }
      for (let k = 0; k < menuSection.length; k++) {
        menuSection[k].classList.toggle("on")
  
      }
      for (let k = 0; k < nav.length; k++) {
        nav[k].classList.toggle("hidden")
      }
    }
    const animationClose = useCallback(
      ()=>{
        const t2 = new TimelineMax({
          onComplete:()=>{
            setanimated(true)
          }
         })
        t2.to("#transicion",1,{left:"0",ease:Power4.easeInOut},"textIn")
        .to("#transicion h1",1,{left:"50%",ease:Power4.easeInOut},"textIn").play()
  
      },
      [],
    )

    const exitAnim=()=>{
      setfinish(true)
    }
    useEffect(()=>{
      if(animated && finish){
        if(click){
          changeHam()
          setclick(false)
        }
        const t2 = new TimelineMax({})
        t2.to("#transicion",1,{left:"-100%",ease:Power4.easeInOut},"textOut")
        .to("#transicion h1",1,{left:"150%",ease:Power4.easeInOut},"textOut").play()
        setanimated(false)
        setfinish(false)
      }
    },[animated,finish])
  return (
    <>
      <div id="menu-toggle" className="menu-toggle">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
      <header className="visible">
        <div className="menu-section">
          <nav>
            <div className="ul hidden">
              <li>
                <TransitionLink id="quienesLink" to="/" onClick={()=>setto("Inicio")}
                  exit={{trigger:()=>exitAnim()}} entry={{trigger: () => animationClose()}}>
                  <img src="../quienes.jpg" className="bg quienes" />
                  <div className="black" />
                  <h1>
                     Inicio
                    <div className="subrayado" />
                  </h1>
                </TransitionLink>
              </li>
              <li className="bordes">
                <TransitionLink id="serviciosLink" to="/portafolio" onClick={()=>setto("Portafolio")}
                  exit={{trigger:()=>exitAnim()}} entry={{trigger: () => animationClose()}}>
                  <img src="../portafolio.jpg" className="bg servicios" />
                  <div className="black" />
                  <h1>
                    Portafolio 
                    <div className="subrayado" />
                  </h1>
                </TransitionLink>
              </li>
              <li className="bordes">
                <TransitionLink id="portafolioLink" to="/proyectos" onClick={()=>setto("Proyectos")}
                  exit={{trigger:()=>exitAnim()}} entry={{trigger: () => animationClose()}}>
                  <img src="../proyectos.jpg" className="bg portafolio" />
                  <div className="black" />
                  <h1>
                    Proyectos
                    <div className="subrayado" />
                  </h1>
                </TransitionLink>
              </li>
              <li>
                <TransitionLink id="contactoLink" to="/contacto" onClick={()=>setto("Contacto")}
                  exit={{trigger:()=>exitAnim()}} entry={{trigger: () => animationClose()}}>
                  <img src="../quienes.jpg" className="bg quienes" />
                  <div className="black" />
                  <h1>
                      Contacto
                    <div className="subrayado" />
                  </h1>
                </TransitionLink>
                </li>
            </div>
          </nav>
        </div>
      </header>
      <div id="logo">
        <img className="logo" src={actualLogo} />
      </div>
      <div id="transicion">
        <h1>
          {to}
        </h1>
      </div>
    </>
  )

  }

  
export default Header
