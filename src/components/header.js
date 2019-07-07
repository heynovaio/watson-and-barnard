import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Menu = styled.div`
  background-color: #f6f7fa;
  .link {
    color: #34594c;
    width: 100px;
    height: 19px;
    font-family: canada-type-gibson, sans-serif;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    color: #34594c;
    text-decoration: none;
  }
  .center {
    max-width: 1440px;
    margin: auto;
  }
  .box {
    display: flex;
    flex-wrap: wrap;
    margin-left: 782px;
    justify-content: space-around;
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
      <div class="center">
        <div class="box">
          <div class="item"><Link class="link" to="/services/">Our Services</Link></div>
          <div class="item"><Link class="link" to="/about/">About Us</Link></div>
          <div class="item"><Link class="link">Resources</Link></div>
          <div class="item"><Link class="link" to="/contact/">Contact Us</Link></div>
        </div>
      </div>
    </Menu>
  </header>
)
export default Header
