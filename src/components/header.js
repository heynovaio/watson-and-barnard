import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <ul>
      <li><Link to="/index/">Home</Link></li>
      <li><Link to="/services/">Service</Link></li>
      <li><Link to="/about/">About</Link></li>
      <li><Link>Resources</Link></li>
      <li><Link to="/contact/">Contact</Link></li>
    </ul>
  </header>
)
export default Header
