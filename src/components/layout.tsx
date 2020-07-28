import React , {useState,useEffect,createRef} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/styles.scss"
// import  'animation.gsap'

const Layout = ({ children, colorHeader}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  colorHeader: PropTypes.node.isRequired
}

export default Layout
