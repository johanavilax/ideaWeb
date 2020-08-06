import React, {useState,useRef} from "react"
import Quienes from "../components/quienes"
import Start from "../components/start"
import Footer from "../components/footer"
import SEO from "../components/seo"
const Index = (props) => {
  const [start,setstart]=useState(false)
  return(
<> 
      <SEO title="Inicio"/>
        <Start setstart={setstart}/>
        <Quienes start={start}/>
        <Footer/>






</>
)}

export default Index
