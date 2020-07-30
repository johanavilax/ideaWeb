import React , {useState,useEffect,createRef} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import { Link } from "gatsby"
import {Link} from "react-scroll"
import lottie from "lottie-web"

//Scroll full page
import {FullpageSection } from '@ap.cx/react-fullpage'
// //Gsap
import {CSSPlugin, Power4, Linear} from 'gsap/all'
import gsap , { TimelineMax, TweenMax, TweenLite } from "gsap";

const Start = (props)=>{
  const {setstart} = props
  const data = useStaticQuery(graphql `
  query {
    start: file(relativePath: { eq: "idea.png" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    } 
  }
  `)
 

  //Ref
  const preloaderRef = createRef<HTMLDivElement>()
  const arrowAnim = createRef<HTMLDivElement>()
  const [displayPreloader, setDisplayPreloader] = useState("inherit")
  const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
      const anim = lottie.loadAnimation({
        container: preloaderRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: require("../animations/preloader.json"),
      });
      const arrow = lottie.loadAnimation({
        container: arrowAnim.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../animations/arrowDown.json"),
      });
      anim.addEventListener('DOMLoaded', () => {
        if(isLoading){
          anim.play()
        }
      } )
      const arrowDiv = document.getElementById("arrow")
      arrowDiv.addEventListener("click", function () {
        var elmnt = document.getElementById("inicio");
        elmnt.scrollIntoView({behavior: "smooth"});

        })
    }, []);
  
    return(

        <div className="start"  style={{display:displayPreloader}} id="start">
            <div className="container">
                        <div className="mainImage" ref={preloaderRef}/>
                        <div id="arrow" className="arrow" ref={arrowAnim}/>
            </div>
        </div>

    )

}
export default Start