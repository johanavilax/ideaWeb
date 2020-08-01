import React, {useState,useRef} from "react"
import Quienes from "../components/quienes"
import Start from "../components/start"
import Footer from "../components/footer"
const Index = (props) => {
  const [start,setstart]=useState(false)
  return(
<> 

      <Start setstart={setstart}/>
      <Quienes start={start}/>
      <Footer/>




</>
)}

export default Index
