import React , {useState,useEffect,createRef} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"

import "../styles/styles.scss"
// import  'animation.gsap'

//context transition
import {TransitionContext} from '../context/transitionContext';

export default  (props) => {
  const {children} = props
  const [animated, setanimated] = useState(false)
  const [finish,setfinish]  = useState(false)
  const [to,setto] = useState("test")
  const [footer,setfooter] = useState(true)

  useEffect(()=>{

    
  },[])

  return (
    <>
      <div  className="layout-inner"> 
      <TransitionContext.Provider value={{animated,setanimated,finish,setfinish,to,setto}}>
        <Header/>
          <div >
            <main>{children}</main>
          </div>

      </TransitionContext.Provider>

      </div>

    </>
  )
}




