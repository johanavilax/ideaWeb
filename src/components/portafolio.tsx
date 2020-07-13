import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Portafolio = () => {
  const data = useStaticQuery(graphql `
  query {
    doc: file(relativePath: { eq: "documento.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    proyecto: file(relativePath: { eq: "proyectos.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  const flecha = ()=>{
      return(
            <>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 93" >
                <g id="keyboard-arrow-right">
                    <path id="Trazado_21" data-name="Trazado 21" d="M151.519,44.1,108.426,1.008a3.591,3.591,0,0,0-5.078,5.078L143.9,46.64,103.348,87.194a3.59,3.59,0,0,0,5.078,5.078l43.093-43.093A3.591,3.591,0,0,0,151.519,44.1Z" transform="translate(-102.297 0)" fill="#fff"/>
	            </g>
            </svg>
            </>
      )
  }
  const circle= ()=>{
    return(
      <>
        <div className="circle">
          <svg >
          <circle cx="177" cy="177" r="177" />
          </svg>
            <h1>Proyecto</h1>
            <p>
              Loremipsumdolorsitamet,consectetuer
              adipiscingelit.Aeneancommodoligulaegetdolor.
            </p>
        </div>
      </>
    )
  }
  return (
    <>
    <div id="portafolio" className="portafolio">
        <div className="container">
            <div className="portafolio1">
                <div className="description">
                  <div className="title">
                  <h1>
                      <svg >
                        <circle cx="20" cy="20" r="20" />
                      </svg>
                      Portafolio
                    </h1>
                  </div>
                  <div className="separador">
                  <div className="imagen">
                      <div className="image">
                        <Img fluid={data.doc.childImageSharp.fluid} />
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
            <div className="auto">
                    <h1>Automatización</h1>
                    <div className="gallery">
                        <div className="izq">
                            <p>
                            Loremipsumdolorsitamet,consectetuer
                            adipiscingelit.Aeneancommodoligulaegetdolor.
                            Aeneanmassa.Cumsociisnatoquepenatibuset
                            magnisdisparturientmontes,nasceturridiculus 
                            </p>
                        </div>
                        <div className="der">
                            <div className="flecha">
                                <div className="fle">
                                    {flecha()}
                                </div>
                                <div className="conoce">
                                    Conoce
                                </div>
                            </div>
                            <div className="foto">
                                <div>
                                    Foto
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="proyecto">
                <div className="card">
                  <div className="title">
                    <h1>
                      <svg >
                        <circle cx="20" cy="20" r="20" />
                      </svg>
                      Proyectos
                    </h1>
                  </div>
                  <div className="separador">
                    <div className="imagen">
                      <div className="image">
                        <Img fluid={data.proyecto.childImageSharp.fluid} />
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
            <div className="proyectos">
                {circle()}
                {circle()}
                {circle()}
            </div>
        </div>
    </div>
   
  </>
  )

  }

  
export default Portafolio
