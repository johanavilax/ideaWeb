import React, {useState,useRef} from "react"
import "../styles/styles.scss"
import Header from  "../components/header"
import Quienes from "../components/quienes"
import Start from "../components/start"
import Portafolio from "../components/portafolio"
import Servicios from "../components/servicios"
//FullPage
import Fullpage, { FullPageSections ,FullpageNavigation} from '@ap.cx/react-fullpage'
const Index = () => {
  const onShowSlider = (e)=>{
    console.log(e)
  }
  const scrollRef = React.createRef<HTMLDivElement>()
  return(
<> 
<Header scroll={scrollRef} />s
<Start scroll={scrollRef} />
<Fullpage ref={scrollRef} onChange={(e)=>onShowSlider(e)}>
<FullpageNavigation/>

  <FullPageSections>

    <Quienes />
    <Servicios />
    
  </FullPageSections>
</Fullpage>


</>
)}

export default Index
