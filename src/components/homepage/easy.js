import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import handShake from "../../images/hand@3x.jpg"

const Easy = styled.div`
  background-color: #092146;
  font-family: metropolis, sans-serif;
  .center {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }
  img.handShake {
    max-width: 585px;
    position: absolute;
    top: 36px;
    left: 0;
  }
  .container {
    max-width: 555px;
    margin-left: auto;
    padding: 67px 0 84px;
    position: relative;
    z-index: +2;
    background-color: #092146;
  }
  h2.head {
    max-width: 474px;
    font-size: 50px;
    line-height: 1.04;
    color: #eee4cb;
    font-family: astoria, sans-serif;
    font-weight: 400;
    margin: 0 0 14px 0;
  }
  p.head {
    max-width: 555px;
    font-size: 16px;
    line-height: 1.5;
    color: #ffffff;
    min-height: 78px;
    margin: 0 0 12px 0;
  }
  h3.top {
    font-size: 20px;
    font-weight: bold;
    line-height: 1.2;
    color: #ffffff;
    margin: 0 0 10px 0;
  }
  p.top {
    max-width: 466px;
    font-size: 16px;
    line-height: 1.31;
    color: #ffffff;
    margin: 0 0 49px 0;
  }
  h3.bottom {
    font-size: 20px;
    font-weight: bold;
    line-height: 1.2;
    color: #ffffff;
    margin: 0 0 10px 0;
  }
  p.bottom {
    max-width: 466px;
    font-size: 16px;
    line-height: 1.31;
    color: #ffffff;
    margin: 0 0 0 0;
  }
`
const render = () => (
  <Easy>
    <div class="center">
        <img class="handShake" src={handShake}/>
        <div class="container">
          <h2 class="head">How we Make it Easier For You</h2>
          <p class="head">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
          </p>
          <h3 class="top">Educating and guiding</h3>
          <p class="top">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation.
          </p>
          <h3 class="bottom">Other ways you help</h3>
          <p class="bottom">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation.
          </p>
        </div>
    </div>
  </Easy>
)
export default render
