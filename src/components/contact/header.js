import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import arrow from "../../images/bitmap@3x.png"

const bp = {
  smaller: 300,
  small: 500,
  tablet: 768,
  medium: 1024,
  large: 1200,
  regular: 1440,
  hamburger: 1250,
};
const mq = n => {
  const bpArray = Object.keys(bp).map(key => [key, bp[key]]);
  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (max-width: ${size}px)`];
    return acc;
  }, []);
  return result;
};
const Header = styled.div`
  .center {
    max-width: 1440px;
    margin: auto;
  }
  .width {
    max-width: 628px;
    margin-left: 775px;
    position: relative;
    ${mq('hamburger')}{
      display: none;
    }
  }
  .flex {
    display: flex;
    width: 100%;
    position: absolute;
    justify-content: space-between;
    height: 115px;
    align-items: center;
    z-index:+2;
    ${mq('hamburger')}{
      flex-direction: column;
      height: 200px;
      display: none;
      top: 30px;
      background: yellow;
    }
  }
  .link {
    width: 142px;
    text-align: center;
    font-family: metropolis, sans-serif;
    font-weight: 600;
    color: #ffffff;
    font-size: 16px;
    text-decoration: none;
  }
  .contact {
    width: 142px;
    text-align: center;
    font-family: metropolis, sans-serif;
    font-weight: 600;
    color: #ffffff;
    font-size: 16px;
    text-decoration: none;
    padding: 14px 0 17px;
    border: solid 3px #ffffff;
  }
  .hamburger {
    position: relative;
    width: 142px;
    margin-left: auto;
    display: none;
    ${mq('hamburger')}{
      display: block;
      z-index: +1;
    }
  }
  .bar {
    position: absolute;
    text-align: right;
    width: 100%;
    background: orange;
    height: 30px;
  }
  .hamburger:hover .flex {
    display: flex;
  }
  img.pointer {
    max-width: 48px;
    position: absolute;
    top: 20px;
    left: 15px;
    z-index:1;
  }
  .title {
    position: absolute;
    z-index: +1;
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
    padding-top: 9px;
    font-family: metropolis, sans-serif;
    font-weight: 400;
    font-size: 17px;
  }
  .phoneLogo {
    width: 39px;
    position: absolute;
    z-index:+4;
    text-align: center;
    top: 254px;
    color: #d3c190;
  }
  .mailLogo {
    width: 39px;
    position: absolute;
    z-index: +4;
    text-align: center;
    top: 465px;
    color: #d3c190;
  }
`
const render = () => (
  <Header>
    <div class="title">
      <span class="W">W</span><span class="atson">atson</span>
      <span class="and">and</span>
      <span class="B">B</span><span class="arnard">arnard</span>
    </div>
    <div class="email"><span>info@w&b.com</span></div>
    <div class="number"><span>1 555 555 2525</span></div>
    <img class="pointer" src={arrow}/>
    <div class="phoneLogo"><FontAwesomeIcon icon={faPhoneAlt}/></div>
    <div class="mailLogo"><FontAwesomeIcon icon={faEnvelope}/></div>
    <img class="pointer" src={arrow}/>
    <div class="center">
      <div class="width">
        <div class="flex">
          <Link class="link" to="/" activeStyle={{display: "none"}}>Home</Link>
          <Link class="link" to="/services/" activeStyle={{display: "none"}}>Our Services</Link>
          <Link class="link" to="/about/" activeStyle={{display: "none"}}>About Us</Link>
          <Link class="link" to="/resources/" activeStyle={{display: "none"}}>Resources</Link>
          <Link class="contact" to="/contact/" activeStyle={{display: "none"}}>Contact Us</Link>
        </div>
      </div>
      <div class="hamburger">
        <div class="bar">
          <FontAwesomeIcon icon={faHamburger}/>
        </div>
        <div class="flex">
          <Link class="link" to="/" activeStyle={{display: "none"}}>Home</Link>
          <Link class="link" to="/services/" activeStyle={{display: "none"}}>Our Services</Link>
          <Link class="link" to="/about/" activeStyle={{display: "none"}}>About Us</Link>
          <Link class="link" to="/resources/" activeStyle={{display: "none"}}>Resources</Link>
          <Link class="contact" to="/contact/" activeStyle={{display: "none"}}>Contact Us</Link>
        </div>
      </div>
    </div>
  </Header>
)
export default render
