import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import pic from "../../images/services_2@3x.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Developer = styled.section`
  background-color: #f6f7fa;
  padding-top: 36px;
  h2 {
    min-height: 52px;
    font-family: astoria, sans-serif;
    font-size: 50px;
    font-weight: normal;
    line-height: 1.04;
    letter-spacing: normal;
    color: #34594c;
  }
  p {
    min-height: 78px;
    font-family: metropolis, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #172821;
    max-width: 482px;
  }
  .box {
    max-width: 566px;
    min-height: 508px;
    border-radius: 6px;
    box-shadow: 5px 5px 20px 0 rgba(9, 9, 9, 0.08);
    background-color: #ffffff;
    padding-top: 47px;
    z-index: 1;
    position: relative;
    margin-left: auto;
  }
  .center {
    max-width: 464px;
    margin: auto;
  }
  .list div {
    padding-left: 40px;
    margin-bottom: 14px;
    min-height: 24px;
    font-family: metropolis, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #172821;
    position: relative;
  }
  .list .mark {
    position: absolute;
    left: 0;
    max-width: 24px;
  }
  .button {
    font-family: metropolis, sans-serif;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.4px;
    text-align: center;
    color: #ffffff;
    width: 206px;
    background-color: #172821;
    padding-top: 14px;
    height: 54px;
    margin: 27px 0 0;

  }
  .outer-center {
    max-width: 1200px;
    margin: auto;
    position: relative;
    padding-top: 108px;
  }
  .photo {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 555px;
    margin: 0;
  }
`
const render = () => (
  <Developer>
    <div class="outer-center">
      <img src={pic} class="photo"/>
      <div class="box">
        <div class="center">
          <h2>Developer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing edivt, sed do eiusmod
            tempor incididunt ut labore et dolore magna adivqua.
          </p>
          <div class="list">
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>Lorem ipsum dolor sit amet</div>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>Lorem ipsum dolor sit amet</div>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>Lorem ipsum dolor sit amet</div>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>Lorem ipsum dolor sit amet</div>
          </div>
          <div class="button">ask us a question</div>
        </div>
      </div>
    </div>
  </Developer>
)
export default render
