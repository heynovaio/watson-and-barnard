import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

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


const Global = styled.div`
  font-family: metropolis, sans-serif;
`
//border-style: solid;
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
    font-size: 50px;
    line-height: 1.28;
    text-align: center;
    color: #34594c;

    font-family: astoria, sans-serif;
    font-weight: 400;
    font-style: normal;
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
    padding: 67px 0 84px;
    position: relative;
    z-index: +2;
    background-color: #092146;
  }
  h2 {

    max-width: 474px;
    font-size: 50px;
    line-height: 1.04;
    color: #eee4cb;
    font-family: astoria, sans-serif;
    font-weight: 400;
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
    font-size: 50px;
    line-height: 1.28;
    text-align: center;
    color: #172821;
    font-family: astoria, sans-serif;
    font-weight: 400;
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
    line-height: 1.04;
    text-align: center;
    color: #172821;
    font-family: astoria, sans-serif;
    font-weight: 400;
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
  }
  p {
    max-width: 543px;
    min-height: 102px;
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
    position: relative;
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
    padding-top: 9px;
  }
  .email {
    transform: rotate(270deg);
    position: absolute;
    left: -44px;
    z-index: 4;
    height: 39px;
    top: 540px;
    padding-top: 9px;
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
    border-width: 1px;
    position: relative;
  }
  .long-line {
    width: 43px;
    height: 0;
    position: absolute;
  }
  .top-short-line {
    width: 11.3px;
    height: 0;
    transform: rotate(45deg);
    position: absolute;
    top: -6px;
    left: 33px;
  }
  .bottom-short-line {
    width: 11.3px;
    height: 0;
    transform: rotate(135deg);
    position: absolute;
    top: 0px;
    left: 33px;
  }
`
const IndexPage = () => (
  <Layout><Global>
    <Hero>
      <div class="width">
        <div class="box">
          <div class="center">
            <div class="aligned">
              <h1>Reliable Land Surveying & Engineering in Delta, BC</h1>
              <p>
                Hexagon fashion axe authentic chartreuse. Green juice kale
                chips irony chicharrones bicycle rights chartreuse, lo-fi
                put a bird on it marfa poke tousled.
              </p>
              <div class="button">
                <span class="txt">Learn More</span>
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
        <div class="email">info@w&b.com</div>
        <div class="number">1 555 555 2525</div>
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
      <div class="button">
        <span class="txt">View Services</span>
      </div>
    </Associates>
    <Easy>
      <div class="center">
        <div class="width">
          <img class="handShake" src={handShake}/>
          <div class="blue-box">
            <div class="container">
              <h2>How we Make it Easier For You</h2>
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
