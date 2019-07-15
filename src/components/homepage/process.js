import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Process = styled.div`
  font-family: metropolis, sans-serif;
  background-color: #eee4cb;
  padding: 80px 0 41px;
  h2 {
    font-size: 50px;
    line-height: 1.28;
    text-align: center;
    color: #172821;
    font-family: astoria, sans-serif;
    font-weight: 400;
    margin: 0 auto 40px;
  }
  .flex-box {
    display: flex;
    justify-content: center;
  }
  .container {
    max-width: 384px;
    border-radius: 4px;
    box-shadow: 2px 2px 13px 0 rgba(0, 0, 0, 0.03);
    background-color: #ffffff;
    margin: 0 12px 0;
    padding: 213px 19px 0;
  }
  h3 {
    font-size: 21px;
    font-weight: bold;
    line-height: 1.48;
    text-align: center;
    color: #172821;
  }
  p {
    max-width: 346px;
    min-height: 98px;
    font-size: 16px;
    line-height: 1.44;
    text-align: center;
    color: #172821;
  }
  .button {
    max-width: 186px;
    background-color: #172821;
    margin: 37px auto 0;
    padding: 12px 0 20px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    color: #ffffff;
  }
`
const render = () => (
  <Process>
    <h2>Our Process</h2>
    <div class="flex-box">
      <div class="container">
        <h3>Step 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna.
        </p>
      </div>
      <div class="container">
        <h3>Step 2</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna.
        </p>
      </div>
      <div class="container">
        <h3>Step 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna.
        </p>
      </div>
    </div>
    <div class="button"><span class="txt">Button</span></div>
  </Process>
)

export default render
