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
  const {scroll} = props
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
      anim.addEventListener('DOMLoaded', () => {
        if(isLoading){
          anim.play()
        }
      } )
      anim.addEventListener("complete", function () {
        const start = document.getElementById("start")
        const t1 = new TimelineMax({paused: true});
        t1.to(start,1,{top:"-100%"}).play()
        setTimeout(() => {
          setDisplayPreloader('none')
          setisLoading(false)
          }, 1000);
        })
    }, []);
  
    return(

        <div className="start"  style={{display:displayPreloader}} id="start">
            <div className="container">
                        <div className="mainImage" ref={preloaderRef}/>
            </div>
        </div>

    )

}
export default Start