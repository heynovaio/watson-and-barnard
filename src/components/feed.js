import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Contact = styled.section`
  .green-box {
    max-width: 942px;
    background-color: #34594c;
  }
  .container {
    max-width: 347px;
  }
  h2 {
    min-height: 64px;
    font-family: canada-type-gibson, sans-serif;
    font-size: 50px;
    font-weight: normal;
    line-height: 1.28;
    color: #eee4cb;
  }
  h3 {
    min-height: 31px;
    font-family: canada-type-gibson, sans-serif;
    font-size: 21px;
    font-weight: 600;
    line-height: 1.48;
    color: #ffffff;
  }
  p {
    width: 347px;
    min-height: 103px;
    font-family: canada-type-gibson, sans-serif;
    font-size: 18px;
    line-height: 1.33;
    color: #ffffff;
  }
`
const Feed = () => (
  <Contact>
    <div class="green-box">
      <div class="container">
        <h2>Contact us</h2>
        <h3>We'd love to hear from you</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </Contact>
)
export default Feed
