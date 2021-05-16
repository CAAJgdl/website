import React from "react"
import {Link } from "gatsby"

const Logo = (props) => {
  return (
  <div className="site-logo">
    <img className="site-logo-img" src="../../assets/logo.png" alt="CAAJ Logo"></img>
    <Link to="/">{props.title}</Link>
  </div>)
}

export default Logo