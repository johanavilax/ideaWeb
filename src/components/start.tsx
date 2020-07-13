import React , {useEffect,createRef} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import { Link } from "gatsby"
import {Link} from "react-scroll"
import lottie from "lottie-web"




const Start = ()=>{
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
    useEffect(() => {
      const anim = lottie.loadAnimation({
        container: preloaderRef.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: require("../animations/preloader.json"),
      });
      anim.addEventListener("complete", function () {
           var elmnt = document.getElementById("quienes");
           elmnt.scrollIntoView({behavior: "smooth"});
        })
    }, []);
  
    return(
        <div className="start" id="start">
            <div className="container">
                        <div className="mainImage" ref={preloaderRef}/>
                    <div className="circles">
                        <svg >
                            <circle cx="220" cy="220" r="200" />
                            <circle cx="220" cy="220" r="150" />
                        </svg>
                    </div>
                    <div className="scrollDown">
                      <Link to="quienes" smooth={true} duration={1000}>
                        <div className="App">
 
                        </div>
                      </Link>
                    </div>
            </div>
        </div>

    )

}
export default Start