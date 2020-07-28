import React , {useState,useEffect,createRef} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import "../styles/styles.scss"
// import  'animation.gsap'

export default  ({ children, colorHeader}) => {
  const [page,setpage] = useState("home")
  return (
    <>
      <div  className="layout-inner"> 
        <Header colorHeader={colorHeader}/>
        <div >
          <main>{children}</main>
        </div>
      </div>

    </>
  )
}




