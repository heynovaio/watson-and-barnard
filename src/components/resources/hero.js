import React from "react"
import styled from "@emotion/styled"
import {css} from "@emotion/core"
//font-family: metropolis, sans-serif;
//font-family: astoria, sans-serif;
const Hero = styled.section`
  position: relative;
  font-family: metropolis, sans-serif;
  h1 {
    font-family: astoria, sans-serif;
    font-size: 100px;
    font-weight: 500;
    line-height: 0.53;
    letter-spacing: 0.4px;
    text-align: center;
    color: #eee4cb;
    height: 53px;
    margin: 0 auto 40px;
  }
  p {
    font-family: metropolis, sans-serif;
    font-size: 22px;
    line-height: 1.45;
    text-align: center;
    color: #ffffff;
    max-width: 624px;
    margin: 40px auto 0;
    min-height: 96px;
  }
`
const Green = styled.div`
  border-radius: 0 0  0 6px;
  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.07);
  background-image: linear-gradient(to bottom, #4e8672, #386656);
  position: absolute;
  left: 39px;
  top: 0;
  bottom: 0;
  right: 0;
`
const Content = styled.div`
  position: relative;
  padding: 303px 0 20px;
  min-height: 636px;
`
export default () => (
  <Hero>
    <Green/>
    <Content>
      <h1>Resources</h1>
      <p>
        Through our network of professionals, we can guide you in locating
        architects, house designers, arborists, archeologists, geotechnical
        and civil mechanical engineers.
      </p>
    </Content>
  </Hero>
)
