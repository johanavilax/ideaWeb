import React, {useState,useRef} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram,faWhatsapp,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import Map from "../components/map"

const Contacto = (props) => {
  return(
<> 
  <div id="contacto">
    <div className="mainContacto">
      <div className="informacion">
        <h1 className="contacto">Contacto</h1>

        <h1>Correo electrónico:</h1>
        <p>Gerencia@ideautomation.com.co</p>
        <h1>Teléfono</h1>
        +57 305 766 6868
        <p></p>
        <h1>Dirección:</h1>
        <p>Cra 6 # 19-18 Funza Cundinamarca</p>
        <h1>Redes:</h1>
        <a><FontAwesomeIcon icon={faFacebookF} /></a>
        <a><FontAwesomeIcon icon={faInstagram} /></a>
        <a><FontAwesomeIcon icon={faLinkedinIn} /></a>
        <a><FontAwesomeIcon icon={faWhatsapp} /></a>
      </div>
      <img src="../automatizacionP.jpg" alt=""/>
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
