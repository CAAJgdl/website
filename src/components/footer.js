import React from "react"
import {Link} from "gatsby"
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>MangoUS ©  {new Date().getFullYear()} All rights reserved.</p>
      <div className="social-media">
      <a className="social-media-link" href="https://www.facebook.com/caajguadalajara/"><FaFacebook /></a>
      <a className="social-media-link" href="https://www.instagram.com/caaj.guadalajara/"><FaInstagram /></a>
      <a className="social-media-link" href="https://www.youtube.com/channel/UCsLPVR-KPQ0vwV_MwdBo7iA"><FaYoutube /></a>
      </div>
    </div>
  </footer>
)

export default Footer