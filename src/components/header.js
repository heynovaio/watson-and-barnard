import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Menu = styled.div`
    background-color: #f6f7fa;
  .box {
    display: flex;
    flex-wrap: wrap;
    margin-left: 782px;
    position: static;
    justify-content: space-around;
    max-width: 658px;
    height: 115px;
    align-items: center;
  }
  .item {
  }
  .inner {
    font-family: canada-type-gibson, sans-serif;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    color: #34594c;
  }
  span {
    text-decoration: none;
  }
`
const Header = () => (
  <header>
    <Menu>
      <div class="box">
        <div class="item"><Link to="/index/">Home</Link></div>
        <div class="item"><Link to="/services/">Service</Link></div>
        <div class="item"><Link to="/about/">About</Link></div>
        <div class="item"><Link>Resources</Link></div>
        <div class="item"><Link to="/contact/">Contact</Link></div>
      </div>
    </Menu>
  </header>
)
export default Header
