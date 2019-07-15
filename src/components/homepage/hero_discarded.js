import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import heroImg from "../../images/adobe-stock-4946677-preview@3x.jpg"
import arrow from "../../images/bitmap@3x.png"
//border-style: solid;border-width: 0.01px;

const Hero = styled.section`
  background-color: #f6f7fa;
  position: relative;
  .width {
    max-width: 1440px;
    margin: auto;
    position: relative;
  }
  .center {
    max-width: 743px;
    position: relative;
    margin-left: 39px;
  }
  .aligned {
    max-width: 563px;
    margin: auto;
    position: relative;
    padding: 248px 0 139px 0;
  }
  .box {
    position: relative;
    max-width: 782px;
    box-shadow: -4px -1px 18px 0 rgba(72, 86, 81, 0.55);
    background-image: radial-gradient(circle at 21% 15%, #4e8672, #386656);
    left: 0;
    top: -115px;
    z-index: 2;
  }
  .pic {
    position: absolute;
    right: 0;
    top: 0;
    max-width: 707px;
    z-index:0;
  }
  h1 {
    min-height: 106px;
    font-size: 44px;
    line-height: 1.2;
    letter-spacing: -0.4px;
    color: #ffffff;
    margin-bottom: 33px;
    font-weight: 500;
    font-family: metropolis, sans-serif;
  }
  p {
    max-width: 543px;
    min-height: 102px;

    font-size: 22px;
    line-height: 1.55;
    color: #ffffff;
    margin-bottom: 57px;
    font-family: metropolis, sans-serif;


  }
  .button {
    max-width: 231px;
    padding: 22px 32px 23.2px 33px;
    box-shadow: 5px 2px 14px 0 #585243;
    background-color: #d3c190;
    position: relative;
    font-family: Metropolis;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.1;
    color: #172821;
  }
  .green-strip {
    width: 50%;
    height: 100%;
    box-shadow: -4px -1px 18px 0 rgba(72, 86, 81, 0.55);
    background-image: radial-gradient(circle at 21% 15%, #4e8672, #386656);
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
  }
  .bar {
    height: 100%;
    width: 39px;
    left:0;
    top:0;
    background-color: #eee4cb;
    position: absolute;
    z-index: 3;

  }
  img.pointer {
    max-width: 48px;
    position: absolute;
    top: 20px;
    left: 15px;
    z-index: +4;
  }
  .number {
    transform: rotate(270deg);
    position: absolute;
    left: -46px;
    bottom: 390px;
    z-index: 4;
    height: 39px;
    top: 330px;

    padding-top: 12px;
    font-family: metropolis, sans-serif;
    font-weight: 400;
    font-size: 17px;
  }
  .email {
    transform: rotate(270deg);
    position: absolute;
    left: -44px;
    z-index: 4;
    height: 39px;
    top: 540px;

    padding-top: 12px;
    font-family: metropolis, sans-serif;
    font-weight: 400;
    font-size: 17px;
  }
  .shift-up {
    top: -115px;
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .phoneLogo {
    width: 39px;
    position: absolute;
    z-index:+4;
    text-align: center;
    top: 254px;
  }
  .mailLogo {
    width: 39px;
    position: absolute;
    z-index: +4;
    text-align: center;
    top: 465px;
  }
  .title {
    position: absolute;
    z-index: +4;
  }
  .W {
    width: 48px;
    height: 81px;
    font-size: 37.8px;
    line-height: 0.71;
    letter-spacing: -1.62px;
    text-align: center;
    color: #ffffff;
    left: 90px;
    top: 43.9px;
    position: absolute;
    font-family: astoria, sans-serif;
    font-weight: 400;
  }
  .atson {
    width: 78px;
    height: 27px;
    font-family: astoria, sans-serif;
    font-weight: 400;
    font-size: 34.5px;
    line-height: 0.78;
    letter-spacing: -1.06px;
    text-align: center;
    color: #ffffff;
    position: absolute;
    top: 44px;
    left: 133px;
  }
  .and {
    width: 30px;
    height: 27px;
    font-family: astoria, sans-serif;
    font-weight: 400;
    font-size: 19.2px;
    line-height: 1.41;
    letter-spacing: -0.92px;
    text-align: center;
    color: #ffffff;
    position: absolute;
    top: 70px;
    left: 150.1px;
  }
  .B {
    font-family: astoria, sans-serif;
    font-weight: 400;
    position: absolute;
    top: 90.9px;
    left: 62px;
    width: 134.9px;
    height: 27px;
    font-size: 37.8px;
    line-height: 0.71;
    letter-spacing: -1.62px;
    text-align: center;
    color: #ffffff;
  }
  .arnard {
    width: 95px;
    height: 27px;
    font-family: astoria, sans-serif;
    font-weight: 400;
    font-size: 34.5px;
    line-height: 0.78;
    letter-spacing: -0.87px;
    text-align: center;
    color: #ffffff;
    top: 90.4px;
    left: 141.7px;
    position: absolute;
  }
  .arrow {
    position: absolute;
    top: 33px;
    right: 32px;
  }
  .arrow div {
    border-style: solid;
    border-width: 0.2px;
    position: relative;
  }
  .long-line {
    width: 43px;
    height: 0;
    position: absolute;
    top: 0px
  }
  .top-short-line {
    width: 11.3px;
    height: 0;
    transform: rotate(45deg);
    position: absolute;
    top: -5px;
    left: 33px;
  }
  .bottom-short-line {
    width: 11.3px;
    height: 0;
    transform: rotate(135deg);
    position: absolute;
    top: 2px;
    left: 33px;
  }
`
const render = () => (
  <Hero>
    <div class="width">
      <div class="box">
        <div class="center">
          <div class="aligned">
            <h1>Reliable Land Surveying<br/>& Engineering in Delta, BC</h1>
            <p>
              Hexagon fashion axe authentic chartreuse. Green juice kale
              chips irony chicharrones bicycle rights chartreuse, lo-fi
              put a bird on it marfa poke tousled.
            </p>
            <div class="button">
              Learn More
              <div class="arrow">
                <div class="long-line"/>
                <div class="top-short-line"/>
                <div class="bottom-short-line"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img class="pic" src={heroImg}/>
    </div>
    <div class="shift-up">
      <div class="green-strip"></div>
      <div class="bar"/>
      <div class="email"><span>info@w&b.com</span></div>
      <div class="number"><span>1 555 555 2525</span></div>
      <img class="pointer" src={arrow}/>
      <div class="phoneLogo"><FontAwesomeIcon icon={faPhoneAlt}/></div>
      <div class="mailLogo"><FontAwesomeIcon icon={faEnvelope}/></div>
      <div class="title">
        <span class="W">W</span><span class="atson">atson</span>
        <span class="and">and</span>
        <span class="B">B</span><span class="arnard">arnard</span>
      </div>
    </div>
  </Hero>
)
export default render
