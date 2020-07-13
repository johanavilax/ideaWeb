import React , {useEffect,createRef} from "react"
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
const Header = () => {
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
  //Ref
  const preloaderRef = createRef<HTMLDivElement>()
    useEffect(() => {
      console.clear()
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

        const t2 = new TimelineMax();
        const logo = document.getElementById('logo');
        logo.addEventListener("click",()=>{
          var elmnt = document.getElementById("start");
          elmnt.scrollIntoView({behavior: "smooth"});
        })
        anim.addEventListener("complete", function () {
          t2.fromTo(logo,1,{position:"absolute",width:'850',top:'100%',left:'-50%',transform:'scale(1)'},{position:"relative",width:'100%',top:'0',left:'0',transform:'scale(2)'},'start').play()
       })
    }, []);
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
                <Link smooth={true} to="servicios" >Servicios</Link>
                <Link smooth={true} to="portafolio" >Portafolio</Link>
                <Link smooth={true} to="contacto" >Contacto</Link>
              </nav>
            </div>
          </div>
    </div>

  </header>
  </>
  )

  }

  
export default Header
