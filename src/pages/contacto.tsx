import React, {useState,useRef} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram,faWhatsapp,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import Map from "../components/map"

const Contacto = (props) => {
  const [start,setstart]=useState(false)
  return(
<> 
  <div id="contacto">
    <div className="mainContacto">
      <div className="informacion">

      </div>
      
    </div>
    <div className="mapa">
        <Map googleMapURL= {"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAr56-0s8UbtTUlMrQgHK9DQXmDjcwg4Ss"}
            containerElement= {<div style={{height:"20vh"}}></div>}
            mapElement = {<div style={{height:"100%"}}></div>}
            loadingElement = {<p>Cargando</p>}
        />
      </div>
  </div>


</>
)}

export default Contacto
