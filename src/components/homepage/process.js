import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

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
const Process = styled.div`
  font-family: metropolis, sans-serif;
  background-color: #eee4cb;
  padding: 80px 0 41px;
  ${mq('small')}{
    padding: 51px 0 76px;
  }
  h2 {
    font-size: 50px;
    line-height: 1.28;
    text-align: center;
    color: #172821;
    font-family: astoria, sans-serif;
    font-weight: 400;
    margin: 0 auto 40px;
    ${mq('small')}{
      font-size: 40px;
      line-height: 1.2;
      min-height: 48px;
      margin-bottom: 29.5px;
    }
  }
  .flex-box {
    display: flex;
    justify-content: center;
    ${mq('small')}{
      flex-direction: column;
    }
  }
  .container {
    max-width: 384px;
    border-radius: 4px;
    box-shadow: 2px 2px 13px 0 rgba(0, 0, 0, 0.03);
    background-color: #ffffff;
    margin: 0 12px 0;
    padding: 213px 19px 0;
    ${mq('small')}{
      margin: 12.5px auto;
      padding: 174px 16px 0;
      max-width: 335px;
    }
  }
  h3 {
    font-size: 21px;
    font-weight: bold;
    line-height: 1.48;
    text-align: center;
    color: #172821;
    ${mq('small')}{
      margin: 0 0 3px;
    }
  }
  p {
    max-width: 346px;
    min-height: 98px;
    font-size: 16px;
    line-height: 1.44;
    text-align: center;
    color: #172821;
    ${mq('small')}{
      min-height: 16px;
    }
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
    ${mq('small')}{
      margin: 48.5px auto 0;
    }
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
