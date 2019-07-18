import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import heroImg from "../../images/adobe-stock-4946677-preview@3x.jpg"
import arrow from "../../images/bitmap@3x.png"

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
const Hero = styled.section`
  background-color: #f6f7fa;
  .align {
    max-width: 646px;
    margin-left: auto;
    padding-top: 236px;
    min-height: 749px;
  }
  h1 {
    min-height: 106px;
    font-size: 44px;
    line-height: 1.2;
    letter-spacing: -0.5px;
    color: #eee4cb;
    font-weight: 600;
    font-family: metropolis, sans-serif;
    margin-bottom: 19px;
  }
  p {
    max-width: 543px;
    min-height: 102px;
    font-size: 22px;
    line-height: 1.55;
    color: #ffffff;
    font-family: metropolis, sans-serif;
    margin-bottom: 38px;
  }
  .outer-container {
    position: relative;
    max-width: 50%;
    ${mq('regular')}{
      max-width:775px;
    }
  }
  .green-box {
    margin-left: 39px;
    position: relative;
    border-radius: 6px;
    background-image: radial-gradient(circle at 21% 15%, #4e8672, #386656);
    margin-right: -55px;
    ${mq('regular')}{
      margin-right:0;
    }
  }
  .image-center {
    max-width: 1366px;
    margin: auto;
    position: relative;
  }
  .photo {
    position: absolute;
    right: 0;
    width: 707px;
    top: 115px;
    box-shadow: -5px 6px 15px 0 rgba(32, 62, 50, 0.27);
  }
  .button {
    font-family: metropolis, sans-serif;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.1;
    color: #eee4cb;
    padding: 22px 27px 23.2px 33px;
    box-shadow: 5px 2px 14px 0 rgba(23, 40, 33, 0.52);
    background-color: #172821;
    max-width: 231px;
    position: relative;
  }
  .arrow {
    height: 20px;
    width: 40px;
    position: absolute;
    right: 27px;
    top: 22px;
  }
  .head {
    position: absolute;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    border-style: solid;
    border-width: 2px 2px 0 0;
    right: 1px;
    top: 5px;
  }
  .long {
    width: 40px;
    height: 0px;
    border-style: solid;
    border-width: 1px 0 1px 0;
    position: absolute;
    right: 0;
    top: 9px
  }
`
const render = () => (
  <Hero>
    <div class="image-center"><img class="photo" src={heroImg}/></div>
    <div class="outer-container">
      <div class="green-box">
        <div class="align">
          <h1>Reliable Land Surveying<br/>& Engineering in Delta, BC</h1>
          <p>
            Hexagon fashion axe authentic chartreuse. Green juice kale
            chips irony chicharrones bicycle rights chartreuse, lo-fi
            put a bird on it marfa poke tousled.
          </p>
          <div class="button">Learn More
            <div class="arrow">
              <div class="long"/>
              <div class="head"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Hero>
)
export default render
