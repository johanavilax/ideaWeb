import React ,{useContext} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram,faWhatsapp,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import TransitionLink from 'gatsby-plugin-transition-link'
//context transition
import {TransitionContext} from '../context/transitionContext';
import {CSSPlugin, Power4, Linear} from 'gsap/all'
import gsap , { TimelineMax, TweenMax, TweenLite,Back } from "gsap";
const Footer = (props) => {
    const {animated, setanimated,finish,setfinish,to,setto} = useContext(TransitionContext)
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
    return (
        <>
            <footer>
                <div id="footer">
                    <div className="decoracion" />
                    <TransitionLink className="flecha" to="/contacto" onClick={()=>setto("Contacto")}
                        exit={{trigger:()=>exitAnim()}} entry={{trigger: () => animationClose()}}>
                        <p>Contactanos</p>
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </TransitionLink>
                    <ul>
                        <div>
                            <li>
                                <a>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </a>
                            </li>
                        </div>
                    </ul>
                    <div className="datos">
                        <p>+57 305 766 6868 - Cra 6 # 19-18 Funza Cundinamarca</p>
                    </div>
                    <div className="derechos">
                        <p>Todos los derechos reservados ©️ Powered by <a target="blank"
                                href="https://aidea.com.co">AIDEA S.A.S</a></p>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer