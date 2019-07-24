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
    max-width: 666px; /*was 646px*/
    margin-left: auto;
    min-height: 749px;
    padding: 236px 20px 127px;
    position: relative;
    ${mq('small')}{
      padding-top: 205px;
      min-height: 705px;
    }
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
    ${mq('small')}{
      font-size: 26px;
      line-height: 1.42;
      letter-spacing: -0.3px;
      margin-bottom: 27px;
      min-height: 74px;
    }
  }
  p {
    max-width: 543px;
    min-height: 102px;
    font-size: 22px;
    line-height: 1.55;
    color: #ffffff;
    font-family: metropolis, sans-serif;
    margin-bottom: 38px;
    ${mq('regular')}{
      font-size: 20px;
      line-height: 1.4;
    }
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
    ${mq('small')}{
      margin-left: 0;
    }
  }
  .image-center {
    max-width: 1366px;
    margin: auto;
    position: relative;
    /*new*/
    ${mq('small')}{
      display: none;
    }
  }
  .photo {
    position: absolute;
    right: 0;
    width: 707px;
    top: 115px;
    box-shadow: -5px 6px 15px 0 rgba(32, 62, 50, 0.27);
    /*new*/
    ${mq('small')}{
      display: none;
    }
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
  .W {
    font-family: astoria, sans-serif;
    width: 48px;
    height: 81px;
    font-size: 37.8px;
    line-height: 0.71;
    letter-spacing: -1.62px;
    color: #ffffff;
    position: absolute;
    text-align: center;
    top: 40.9px;
    left: 60px;
  }
  .atson {
    width: 78px;
    height: 27px;
    font-size: 34.5px;
    line-height: 0.78;
    letter-spacing: -1.06px;
    text-align: center;
    color: #ffffff;
    font-family: astoria, sans-serif;
    top:41px;
    left: 103px;
    position: absolute;
  }
  .and {
    width: 30px;
    height: 27px;
    font-family: astoria, sans-serif;
    font-size: 19.2px;
    line-height: 1.41;
    letter-spacing: -0.92px;
    text-align: center;
    color: #ffffff;
    top:64.9px;
    left: 120.1px;
    position: absolute;
  }
  .B {
    width: 48px;
    height: 27px;
    font-family: astoria, sans-serif;
    font-size: 37.8px;
    line-height: 0.71;
    letter-spacing: -1.62px;
    text-align: center;
    color: #ffffff;
    top: 87.9px;
    left: 76px;
    position: absolute;
  }
  .arnard {
    width: 95px;
    height: 27px;
    font-family: astoria, sans-serif;
    font-size: 34.5px;
    line-height: 0.78;
    letter-spacing: -0.87px;
    text-align: center;
    color: #ffffff;
    top: 87.4px;
    left: 111.7px;
    position: absolute;
  }
  .pointer {
    position: absolute;
    width: 28.9px;
    top: 36px;
    left: 21px;
  }
  .title-small {
    display: none;
    ${mq('small')}{display: block}
  }
  .logo-container {
    width: 205px;
    margin: auto;
    position: relative;
    bottom: 37px;
    display: none;
    ${mq('small')}{
      display: block;
    }
    & div {
      width: 74px;
      height: 74px;
      border-radius: 50%;
      box-shadow: 0 2px 20px 0 rgba(97, 97, 97, 0.2);
      background-color: #ffffff;
      text-align: center;
      padding-top: 21px;
      color: #d3c190;
      position: absolute;
    }
  }
  .icon {
    width: 30px;
    display: block;
    margin: auto;
  }
  .phoneLogo {
    left: 0;
  }
  .mailLogo {
    right: 0;
  }
`
const render = () => (
  <Hero>
    <div class="image-center"><img class="photo" src={heroImg}/></div>
    <div class="outer-container">
      <div class="green-box">
        <div class="align">
          <div class="title-small">
            <img class="pointer" src={arrow}/>
            <div class="W">W</div><div class="atson">atson</div>
            <div class="and">and</div>
            <div class="B">B</div><div class="arnard">arnard</div>
          </div>
          <h1>Reliable Land Surveying & Engineering in Delta, BC</h1>
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
        <div class="logo-container">
          <div class="phoneLogo"><FontAwesomeIcon class="icon" icon={faPhoneAlt}/></div>
          <div class="mailLogo"><FontAwesomeIcon class="icon" icon={faEnvelope}/></div>
        </div>
      </div>
    </div>
  </Hero>
)
export default render
