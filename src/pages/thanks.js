import React from "react"
import { Link } from "gatsby"
import {RiArrowLeftSLine, RiCheckboxCircleLine} from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <SEO title="Thank you"/>
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <RiCheckboxCircleLine style={{
        fontSize: "128px",
        color: "var(--primary-color)"
      }}/>
      <h1>Hemos recibido tu mensaje</h1>
      <p>Gracias por tenernos en contacto. Estaremos contigo en breve.</p>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left"/>Volver a Inicio</Link>
    </div>

  </Layout>
)

export default Thanks