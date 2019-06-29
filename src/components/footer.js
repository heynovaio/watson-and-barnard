import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <div>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et.
    </p>
    <ul>
      <li><Link to="/index/">Home</Link></li>
      <li><Link to="/services/">Service</Link></li>
      <li><Link to="/about/">About</Link></li>
      <li><Link>Resources</Link></li>
      <li><Link to="/contact/">Contact</Link></li>
    </ul>
  </div>
)
export default Footer
