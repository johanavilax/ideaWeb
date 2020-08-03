import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {FullpageSection } from '@ap.cx/react-fullpage'
import Layout from "../components/layout"
import Footer from "../components/footer"
const Servicios= ()=>{
    const data = useStaticQuery(graphql `
    query {
      icono: file(relativePath: { eq: "servicios.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `)
    return(
        <>
          <div id="proyecto">
            <div className="izq project">
              <div className="projects">
                <img src="../projects/imagen.jpg"/>
                <div className="black"/>
                <h1>Titulo</h1>
              </div>
              <div className="projects">
                <img src="../projects/imagen.jpg"/>
                <div className="black"/>
                <h1>Titulo</h1>
              </div>
              <div className="projects">
                <img src="../projects/imagen.jpg"/>
                <div className="black"/>
                <h1>Titulo</h1>
              </div>
            </div>
            <div className="der project">
              <div className="projects">
                <img src="../projects/imagen.jpg"/>
                <div className="black"/>
                <h1>Titulo</h1>
              </div>
              <div className="projects">
                <img src="../projects/imagen.jpg"/>
                <div className="black"/>
                <h1>Titulo</h1>
              </div>
              <div className="projects">
                <img src="../projects/imagen.jpg"/>
                <div className="black"/>
                <h1>Titulo</h1>
              </div>
            </div>
          </div>
        </>
    )
}

export default Servicios