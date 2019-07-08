import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Feed from "../components/feed"
import heroImg from "../images/adobe-stock-4946677-preview@3x.jpg"
import archLogo from "../images/architect.svg"
import homeLogo from "../images/house-icon.svg"
import helmetLogo from "../images/construction.svg"
import fenceLogo from "../images/shape.svg"

import tower from "../images/rectangle@3x.jpg"
import building from "../images/912859458@3x.jpg"
import construction from "../images/464959464@3x.jpg"
import residence from "../images/984568356@3x.jpg"

import handShake from "../images/hand@3x.jpg"
import arrow from "../images/bitmap@3x.png"


const Global = styled.section`
  font-family: canada-type-gibson, sans-serif;
`
//border-style: solid;
const Hero = styled.section`
  .background {
    width: 100%;
    height: 100%;
    background-color: #f6f7fa;
    position: absolute;
    z-index: -2;
  }
  .width {
    max-width: 1403px;
    position: relative;
  }
  .center {
    max-width: 1440px;
    margin: auto;
  }
  .outer-container {
    max-width: 782px;
    background-color: #eee4cb;
    position: relative;
    top: -115px;
  }
  .green-box {
    max-width: 743px;
    margin-left: 39px;
    box-shadow: -4px -1px 18px 0 rgba(72, 86, 81, 0.55);
    background-image: radial-gradient(circle at 21% 15%, #4e8672, #386656);
  }
  .container {
    max-width: 563px;
    margin: auto;
    padding-top: 248px;
    padding-bottom: 138px;
  }
  h1 {
    font-size: 44px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.4px;
    color: #ffffff;
    margin-bottom: 33px;
  }
  p {
    font-size: 22px;
    line-height: 1.55;
    color: #ffffff;
    margin-bottom: 57px;
  }
  .button {
    max-width: 231px;
    padding: 22px 32px 23.2px 33px;
    box-shadow: 5px 2px 14px 0 #585243;
    background-color: #d3c190;
  }
  .txt {
    font-size: 18px;
    font-weight: bold;
    line-height: 1.1;
    color: #172821;
  }
  img.hero {
    max-width: 707px;
    box-shadow: -5px 6px 15px 0 rgba(32, 62, 50, 0.27);
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
  img.arrow {
    max-width: 48px;
    position: absolute;
    top: 20px;
    left: 15px
  }
  .number {
    transform: rotate(270deg);
    position: absolute;
    left: -43px;
    bottom: 390px;
  }
  .email {
    transform: rotate(270deg);
    position: absolute;
    left: -43px;
    bottom: 185px;
  }
`
const Associates = styled.section`
  position: relative;
  padding-bottom: 53px;
  .background {
    width: 100%;
    height: 100%;
    background-color: #f6f7fa;
    position: absolute;
    z-index: -2;
    top:0;
  }
  h2 {
    font-weight: normal;
    font-size: 50px;
    line-height: 1.28;
    text-align: center;
    color: #34594c;
  }
  .flex-container {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
  }
  .container {
    display: block;
    max-width: 285px;
    border-radius: 4px;
    box-shadow: 2px 2px 13px 0 rgba(0, 0, 0, 0.03);
    background-color: #ffffff;
    padding: 0 14px;
  }
  h3 {
    font-size: 21px;
    font-weight: bold;
    line-height: 1.48;
    text-align: center;
    color: #172821;
  }
  p {
    max-width: 257px;
    min-height: 102px;
    font-size: 16px;
    line-height: 1.44;
    text-align: center;
    color: #172821;
  }
  img {
    display: block;
  }
  img.arch {
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
    margin: 51px auto 0;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    color: #ffffff;
  }
`
const Easy = styled.div`
  background-color: #092146;
  .center {
    position: relative;
    max-width: 1200px;
    margin: auto;
    padding: 67px 0 84px;
  }
  img.handShake {
    max-width: 585px;
    position: absolute;
    top: 36px;
    left: 0;
  }
  .container {
    max-width: 555px;
    margin-left: auto;
  }
  h2 {
    font-weight: normal;
    max-width: 474px;
    font-size: 50px;
    line-height: 1.04;
    color: #eee4cb;
  }
  h2+p {
    max-width: 555px;
    font-size: 16px;
    line-height: 1.5;
    color: #ffffff;
  }
  h3 {
    font-size: 20px;
    font-weight: bold;
    line-height: 1.2;
    color: #ffffff;
    margin-top: 49px;
  }
  h3+p {
    max-width: 466px;
    font-size: 16px;
    line-height: 1.31;
    color: #ffffff;
  }
`
const Process = styled.div`
  background-color: #eee4cb;
  padding: 80px 0 41px;
  h2 {
    font-weight: normal;
    font-size: 50px;
    line-height: 1.28;
    text-align: center;
    color: #172821;
  }
  .flex-box {
    display: flex;
    justify-content: center;
  }
  .container {
    max-width: 384px;
    border-radius: 4px;
    box-shadow: 2px 2px 13px 0 rgba(0, 0, 0, 0.03);
    background-color: #ffffff;
    margin: 0 12px 0;
    padding: 213px 19px 0;
  }
  h3 {
    font-size: 21px;
    font-weight: bold;
    line-height: 1.48;
    text-align: center;
    color: #172821;
  }
  p {
    max-width: 346px;
    min-height: 98px;
    font-size: 16px;
    line-height: 1.44;
    text-align: center;
    color: #172821;
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
  }
`
const Friends = styled.section`
  background-color: #f6f7fa;
  padding: 79px 0 90px;
  h2 {
    min-eight: 52px;
    font-size: 50px;
    font-weight: normal;
    line-height: 1.04;
    text-align: center;
    color: #172821;
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

  }
  .container {
    margin: 11.05px 0;
    margin: auto;
  }
  .label {
    margin-top: -10px;
    max-width: 100%;
    text-align: center;
    padding: 30.5px 0 42px;
    border-radius: 4px;
    box-shadow: 2px 2px 13px 0 rgba(0, 0, 0, 0.03);
    background-color: #ffffff;
  }
`
const IndexPage = () => (
  <Layout><Global>
    <Hero>



      <div class="background"/>
      <div class="center">
        <div class="width">
          <div class="outer-container">
            <img class="arrow" src={arrow}/>
            <div class="email">info@w&b.com <FontAwesomeIcon icon={faEnvelope} /></div>
            <div class="number">1 555 555 2525</div>
            <div class="green-box">
              <div class="container">
                <h1>Reliable Land Surveying & Engineering in Delta, BC </h1>
                <FontAwesomeIcon icon={faArrowRight} />
                <p>
                  Hexagon fashion axe authentic chartreuse. Green juice kale
                  chips irony chicharrones bicycle rights chartreuse, lo-fi
                  put a bird on it marfa poke tousled.
                </p>
                <div class="button"><span class="txt">Learn More</span></div>
              </div>
            </div>
          </div>
          <img class="hero" src={heroImg}/>
        </div>
      </div>
    </Hero>
    <Associates>
      <div class="background"/>
      <h2>We Work With</h2>
      <div class="flex-container">
        <div class="container">
          <img class="arch" src={archLogo}/>
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
      <div class="button"><span class="txt">View Services</span></div>
    </Associates>
    <Easy>
      <div class="center">
        <div class="width">
          <img class="handShake" src={handShake}/>
          <div class="blue-box">
            <div class="container">
              <h2>How we make it easier for you</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud.
              </p>
              <h3>Educating and guiding</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation.
              </p>
              <h3>Other ways you help</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Easy>
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
    <Friends>
      <h2>We Have Worked With</h2>
      <div class="flex-box">
        <div class="container"><img src={tower}/><div class="label"><span class="txt">145 Store Street</span></div></div>
        <div class="container"><img src={building}/><div class="label"><span class="txt">368 Johnson Ave</span></div></div>
        <div class="container"><img src={construction}/><div class="label"><span class="txt">45 View Street</span></div></div>
        <div class="container"><img src={residence}/><div class="label"><span class="txt">5999 Main Street</span></div></div>
      </div>
    </Friends>
    <Feed/>
  </Global></Layout>
)

export default IndexPage
