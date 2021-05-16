import React from "react"
import { Link } from "gatsby"
import {RiArrowLeftSLine, RiBugLine} from "react-icons/ri"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"

export const query = graphql`
  query {
    file(relativePath: { eq: "apollo.png" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`
const NotFound = ({ data }) => (
  <Layout className="not-found-page">
    <SEO title="Página no encontrada"/>
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <header>
      <Img
        className="apollo"
        objectFit="contain"
        fluid={data.file.childImageSharp.fluid}
        alt="Apollo"
      />
        <h1>Houston tenemos un problema!</h1>
        <p>La nave se ha averiado, ayuda a Apollo a reparar este fallo.</p>
      </header>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left"/>Volver a Inicio</Link>
      <Link to="/contact" className="button -outline">Reportar <RiBugLine className="icon -right"/></Link>
    </div>
  </Layout>
)

export default NotFound