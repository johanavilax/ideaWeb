import React, {useState,useRef} from "react"
import "../styles/styles.scss"
import Quienes from "../components/quienes"
import Start from "../components/start"
const Index = (props) => {
  const [start,setstart]=useState(false)
  return(
<> 

      <Start setstart={setstart}/>
      <Quienes start={start}/>





</>
)}

export default Index
