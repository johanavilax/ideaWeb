import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {FullpageSection } from '@ap.cx/react-fullpage'
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
    const circle= ()=>{
      return(
        <>
          <div className="circle">
            <svg >
            <circle cx="177" cy="177" r="177" />
            </svg>
          </div>
        </>
      )
    }
    return(
        <div  className="servicios">
            <div className="container">
              <FullpageSection>
              <div id="servicios" className="servicio1 itemSlider">
                <div className="card">
                  <div className="title">
                    <h1>
                      <svg >
                        <circle cx="20" cy="20" r="20" />
                      </svg>
                      Productos / servicios
                    </h1>
                  </div>
                  <div className="separador">
                    <div className="imagen">
                      <div className="image">
                        <Img fluid={data.icono.childImageSharp.fluid} />
                      </div>
                    </div>
                    <div className="text">
                        Loremipsumdolorsitamet,consectetuer
                        adipiscingelit.Aeneancommodoligulaegetdolor.
                        Aeneanmassa.Cumsociisnatoquepenatibuset
                        magnisdisparturientmontes,nasceturridiculus
                        mus.Donecquamfelis,ultriciesnec,pellentesque
                        eu,pretiumquis,sem.Nullaconsequatmassaqu
                    </div>
                  </div>
                </div>
              </div>
              </FullpageSection>
              <FullpageSection>
              <div className="servicio2 itemSlider">
                <div className="izq">
                  <div className="arriba">
                      {circle()}
                      <h1>Producto</h1>
                      <p>
                        Loremipsumdolorsitamet,consectetuer
                        adipiscingelit.Aeneancommodoligulaegetdolor.
                        Aeneanmassa.Cumsociisnatoquepenatibuset
                        magnisdisparturientmontes,nasceturridiculus
                      </p>
                  </div>
                  <div className="abajo">
                      {circle()}
                      <h1>Servicio</h1>
                      <p>
                        Loremipsumdolorsitamet,consectetuer
                        adipiscingelit.Aeneancommodoligulaegetdolor.
                        Aeneanmassa.Cumsociisnatoquepenatibuset
                        magnisdisparturientmontes,nasceturridiculus
                      </p>
                  </div>
                </div>
                <div className="der">
                  <div className="arriba">
                      {circle()}
                      <h1>Producto</h1>
                      <p>
                        Loremipsumdolorsitamet,consectetuer
                        adipiscingelit.Aeneancommodoligulaegetdolor.
                        Aeneanmassa.Cumsociisnatoquepenatibuset
                        magnisdisparturientmontes,nasceturridiculus
                      </p>
                  </div>
                  <div className="abajo">
                      {circle()}
                      <h1>Servicio</h1>
                      <p>
                        Loremipsumdolorsitamet,consectetuer
                        adipiscingelit.Aeneancommodoligulaegetdolor.
                        Aeneanmassa.Cumsociisnatoquepenatibuset
                        magnisdisparturientmontes,nasceturridiculus
                      </p>
                  </div>
                </div>
              </div>
              </FullpageSection>
            </div>
        </div>

    )
}

export default Servicios