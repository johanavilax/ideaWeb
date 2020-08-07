import React,{useState} from "react"
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
    const [selected,setselected] = useState("todos")
    const filas = (element:{src:string,title:string})=>{
              return(
              <>
              <div className="projects">
                <img src={element.src}/>
                <div className="black"/>
                <h1>{element.title}</h1>
              </div>
              </>
              )
    }
    const dataTest = [
      {src:"../projects/imagen.jpg",title:"titulo",type:"automatizacion"},
      {src:"../projects/imagen.jpg",title:"titulo",type:"energia"},
      {src:"../projects/imagen.jpg",title:"titulo",type:"automatizacion"},
      {src:"../projects/imagen.jpg",title:"titulo",type:"automatizacion"},
      {src:"../projects/imagen.jpg",title:"titulo",type:"automatizacion"},
      {src:"../projects/imagen.jpg",title:"titulo",type:"automatizacion"},
      {src:"../projects/imagen.jpg",title:"titulo",type:"automatizacion"},
      {src:"../projects/imagen.jpg",title:"titulo",type:"automatizacion"},
      {src:"../projects/imagen.jpg",title:"titulo",type:"automatizacion"},
      {src:"../projects/imagen.jpg",title:"titulo",type:"automatizacion"},
      {src:"../projects/imagen.jpg",title:"titulo",type:"automatizacion"},
      {src:"../projects/imagen.jpg",title:"titulo",type:"automatizacion"},
      {src:"../projects/imagen.jpg",title:"titulo",type:"automatizacion"},
    ]
    return(
        <>
            <div id="proyectoArriba">
                <h1 >Proyectos</h1>
                <p>Mira aqui el fruto de nuestro trabajo:</p>
            </div>
            <div className="filters">
                      <h4 id="fTodos" className="filter">Todos</h4>
                      <h4 id="fAutomatizacion" className="filter">Automatizacíon industrial</h4>
                      <h4 id="fEnergias" className="filter">Energias renovables</h4>
                      <h4 id="fIndustrial" className="filter">Diseño industrial</h4>
                      <h4 id="fErgonomia" className="filter">Elevacion ergonomia</h4>
                      <h4 id="fBasculas" className="filter">Basculas camioneras</h4>
                      <h4 id="fSoftware" className="filter">Desarrollo de software</h4>
              </div>
          <div id="proyecto">
            <div className="project">
              {dataTest.map(e=>{
                if(selected !== "todos"){
                  if(selected === e.type){
                    return(filas(e))
                  }
                }else {
                  return(filas(e))
                }
                })}
            </div>
          </div>
        </>
    )
}

export default Servicios