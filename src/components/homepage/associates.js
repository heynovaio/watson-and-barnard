import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import archLogo from "../../images/architect.svg"
import homeLogo from "../../images/house-icon.svg"
import helmetLogo from "../../images/construction.svg"
import fenceLogo from "../../images/shape.svg"

const bp = {
  smaller: 300,
  small: 500,
  tablet: 768,
  medium: 1024,
  large: 1200,
  regular: 1440,
  flex: 728,
};
const mq = n => {
  const bpArray = Object.keys(bp).map(key => [key, bp[key]]);
  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (max-width: ${size}px)`];
    return acc;
  }, []);
  return result;
};
const Associates = styled.section`
  background-color: #f6f7fa;
  padding: 95px 0 53px;
  h2 {
    font-size: 50px;
    line-height: 1.28;
    text-align: center;
    color: #34594c;
    min-height: 64px;
    font-family: astoria, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  .flex-outer{
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    margin: 30px 0 41px;
    ${mq('flex')}{
      flex-wrap: wrap;
    }
    margin: 30px 0 41px;
  }
  .inner-flex {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
  }
  .container {
    max-width: 285px;
    min-width: 167px;
    border-radius: 4px;
    box-shadow: 2px 2px 13px 0 rgba(0, 0, 0, 0.03);
    background-color: #ffffff;
    margin: 10px;
    padding: 0 14px;
  }
  h3 {
    font-size: 21px;
    font-weight: bold;
    line-height: 1.48;
    text-align: center;
    color: #172821;
    min-height: 31px;
    font-family: metropolis, sans-serif;
    margin: 0 0 8px;
  }
  p {
    min-height: 102px;
    font-size: 16px;
    line-height: 1.44;
    text-align: center;
    color: #172821;
    font-family: metropolis, sans-serif;
    margin: 0;
  }
  img.architect {
    max-width:134px;
    margin: 54px auto 52px;
  }
  img.home {
    max-width:127px;
    margin: 35px auto 40px;
  }
  img.helmet {
    max-width:139px;
    margin: 62px auto 59px;
  }
  img.fence {
    max-width: 139px;
    margin: 70px auto 56px;
  }
  .button {
    max-width: 200px;
    background-color: #172821;
    padding: 17px 0 26px;
    margin: auto;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    color: #ffffff;
    font-family: metropolis, sans-serif;
  }
  img {
    display: block;
  }
`
const render = () => (
  <Associates>
    <h2>We Work With</h2>
    <div class="flex-outer">
      <div class="inner-flex">
        <div class="container">
          <img class="architect" src={archLogo}/>
          <h3>Architects</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod temp.
          </p>
        </div>
        <div class="container">
          <img class="home" src={homeLogo}/>
          <h3>Home Owners</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod temp.
          </p>
        </div>
      </div>
      <div class="inner-flex">
        <div class="container">
          <img class="helmet" src={helmetLogo}/>
          <h3>Developers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod temp.
          </p>
        </div>
        <div class="container">
          <img class="fence" src={fenceLogo}/>
          <h3>Property Owners</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod temp.
          </p>
        </div>
      </div>
    </div>
    <div class="button">View Services</div>
  </Associates>
)
export default render
