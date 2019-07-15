import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import tower from "../../images/rectangle@3x.jpg"
import building from "../../images/912859458@3x.jpg"
import construction from "../../images/464959464@3x.jpg"
import residence from "../../images/984568356@3x.jpg"

const bp = {
  smaller: 300,
  small: 500,
  tablet: 768,
  medium: 1024,
  large: 1200,
  regular: 1440,
  friendsFlex: 1180,
  compress: 590,
};
const mq = n => {
  const bpArray = Object.keys(bp).map(key => [key, bp[key]]);
  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (max-width: ${size}px)`];
    return acc;
  }, []);
  return result;
};
const Friends = styled.section`
  font-family: metropolis, sans-serif;
  background-color: #f6f7fa;
  padding: 79px 0 90px;
  h2 {
    min-eight: 52px;
    font-size: 50px;
    line-height: 1.04;
    text-align: center;
    color: #172821;
    font-family: astoria, sans-serif;
    font-weight: 400;
    margin: 0 0 56.15px;
  }
  .flex-box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: auto;
  }
  img {
    max-width: 590px;
    margin-top: 0;
    margin-bottom: 0;
    ${mq('compress')}{
      max-width: 100vw;
    }
  }
  .container {
    padding: 0;
    margin: 10.65px 0;
    ${mq('friendsFlex')}{
      margin: 10.65px auto;
    }
  }
  .label {
    margin-top: -10px;
    max-width: 100%;
    text-align: center;
    padding: 30.5px 0 42px;
    border-radius: 4px;
    box-shadow: 2px 2px 13px 0 rgba(0, 0, 0, 0.03);
    background-color: #ffffff;
    font-size: 22px;
    font-weight: bold;
    line-height: 1.41;
    text-align: center;
    color: #172821;
  }
`
const render = () => (
  <Friends>
    <h2>We Have Worked With</h2>
    <div class="flex-box">
      <div class="container"><img src={tower}/><div class="label">145 Store Street</div></div>
      <div class="container"><img src={building}/><div class="label">368 Johnson Ave</div></div>
      <div class="container"><img src={construction}/><div class="label">45 View Street</div></div>
      <div class="container"><img src={residence}/><div class="label">5999 Main Street</div></div>
    </div>
  </Friends>
)

export default render
