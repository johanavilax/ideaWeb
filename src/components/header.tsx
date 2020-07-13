import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {Link} from "react-scroll"
const Header = () => {
  const data = useStaticQuery(graphql `
  query {
    placeholderImage: file(relativePath: { eq: "idea.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  return (
    <>
    <header >
    <div className="container">
          <div className="innerHeader">
            <div className="logo">
              <Link smooth={true} to="start"><Img fluid={data.placeholderImage.childImageSharp.fluid} /></Link>
            </div>
            <div className="navigation">
              <nav>
                <Link smooth={true} to="quienes" >Quiénes somos</Link>
                <Link smooth={true} to="servicios" >Servicios</Link>
                <Link smooth={true} to="portafolio" >Portafolio</Link>
                <Link smooth={true} to="contacto" >Contacto</Link>
              </nav>
            </div>
          </div>
    </div>

  </header>
  </>
  )

  }

  
export default Header
