import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import handShake from "../../images/hand@3x.jpg"

const bp = {
  smaller: 300,
  small: 500,
  tablet: 768,
  medium: 1024,
  large: 1200,
  regular: 1440,
};
const mq = n => {
  const bpArray = Object.keys(bp).map(key => [key, bp[key]]);
  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (max-width: ${size}px)`];
    return acc;
  }, []);
  return result;
};

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
    ${mq('large')}{
      position: relative;
      top: 0;
      max-width: 100%;
      height: 223px;
    }
  }
  .container {
    max-width: 575px; /*was 555px*/
    margin-left: auto;
    padding: 67px 0 84px 20px;
    position: relative;
    z-index: +2;
    background-color: #092146;
    ${mq('large')}{
      max-width: 100%;
      margin-right: 20px;
    }
  }
  h2.head {
    max-width: 474px;
    font-size: 50px;
    line-height: 1.04;
    color: #eee4cb;
    font-family: astoria, sans-serif;
    font-weight: 400;
    margin: 0 0 14px 0;
    ${mq('small')}{
      min-height: 96px;
      font-size: 40px;
      line-height: 1.2;
      max-width: 335px;
    }
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
