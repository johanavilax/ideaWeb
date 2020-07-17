import React, {useState,useRef} from "react"
import "../styles/styles.scss"
import Header from  "../components/header"
import Quienes from "../components/quienes"
import Start from "../components/start"


const Home = () => {
  const [start,setstart]=useState(false)
  return(
<> 
    <Header/>
    <Start setstart={setstart}/>
    <Quienes start={start}/>




</>
)}

export default Home
