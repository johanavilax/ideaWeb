import React, {useState,useRef} from "react"
import "../styles/styles.scss"
import Header from  "../components/header"
import Quienes from "../components/quienes"
import Start from "../components/start"
import Portafolio from "./portafolio"
import Servicios from "./servicios"
import Layout from "../components/layout"
const Index = (props) => {
  const [start,setstart]=useState(false)
  return(
<> 

      <Start setstart={setstart}/>
      <Quienes start={start}/>





</>
)}

export default Index
