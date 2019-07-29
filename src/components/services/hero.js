import React from "react"
import styled from "@emotion/styled"
import picture from "../../images/icon-group@3x.png"
//font-family: metropolis, sans-serif;
//font-family: astoria, sans-serif;
const Hero = styled.section`
  background-color: #f6f7fa;
  position: relative;
  .text {
    padding-top: 280px;
    margin-left: 39px;
    min-height: 622px;
  }
  .center {
    max-width: 1204px;
    margin:auto;
  }
  h1 {
    min-height: 53px;
    font-family: astoria, sans-serif;
    font-size: 100px;
    font-weight: 500;
    line-height: 0.53;
    letter-spacing: 0.4px;
    color: #eee4cb;
  }
  p {
    font-family: metropolis, sans-serif;
    width: 598px;
    height: 102px;
    font-size: 22px;
    line-height: 1.55;
    color: #ffffff;
  }
  .green-box {
    position: absolute;
    top: 0;
    left: 39px;
    right: 0;
    bottom: 0;
    border-radius: 6px;
    box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.07);
    background-image: linear-gradient(to bottom, #4e8672, #386656);
  }
  .center{
    position: relative;
    z-index: 1;
  }
  .picture {
    position: absolute;
    bottom: -45px;
    right: 0;
    max-width: 528px;
  }
`
const render = () => (
  <Hero>
    <div class="green-box"/>
    <div class="center">
      <div class="text">
        <h1>Services</h1>
        <p>
          Hexagon fashion axe authentic chartreuse. Green juice kale chips
          irony chicharrones bicycle rights chartreuse, lo-fi put a bird on
          it marfa poke tousled.
        </p>
      </div>
      <img class="picture" src={picture} alt=""/>
    </div>
  </Hero>
)
export default render
