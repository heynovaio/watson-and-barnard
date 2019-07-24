import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import arrow from "../images/bitmap@3x.png"

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
const Header = styled.div`
  position: relative;
  z-index: +1;
  .hide {
    display: block;
    ${mq('small')}{display: none;}
  }
  .title {
    position: absolute;
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
  .email {
    transform: rotate(270deg);
    position: absolute;
    left: -44px;
    height: 39px;
    top: 510px;
    padding-top: 9px;
    font-family: metropolis, sans-serif;
    font-weight: 400;
    font-size: 17px;
  }
  .number {
    transform: rotate(270deg);
    position: absolute;
    left: -46px;
    bottom: 390px;
    height: 39px;
    top: 310px;
    padding-top: 12px;
    font-family: metropolis, sans-serif;
    font-weight: 400;
    font-size: 17px;
  }
  img.pointer {
    max-width: 48px;
    position: absolute;
    top: 20px;
    left: 15px;
  }
  .phoneLogo {
    width: 39px;
    position: absolute;
    text-align: center;
    top: 234px;
    color: #d3c190;
  }
  .mailLogo {
    width: 39px;
    position: absolute;
    text-align: center;
    top: 435px;
    color: #d3c190;
  }
  .center {
    max-width: 1440px;
    margin: auto;
  }
  .width {
    max-width: 628px;
    margin-left: 775px;
    position: relative;
  }
  .menu {
    width: 100%;
    position: absolute;
    padding-top: 43px;
    ${mq('small')}{
      display: none;
    }
  }
  .link {
    width: 142px;
    text-align: center;
    font-family: metropolis, sans-serif;
    font-weight: 600;
    color: ${props => props.home ? '#172821': 'white'};
    font-size: 16px;
    text-decoration: none;
    display: inline-block;
    width: 25%;
  }
  .services:hover ~ hr {
    margin-left: 0%;
  }
  .about:hover ~ hr {
    margin-left: 25%;
  }
  .resources:hover ~ hr {
    margin-left: 50%;
  }
  .contact:hover ~ hr {
    margin-left: 75%;
  }
  hr {
    background: black;
    width: 25%;
    transition: .3s ease-in-out;
    height: 7px;
    margin: 0;
    border: none;
  }
  .hamburger {
    width: 42px;
    height: 24px;
    position: absolute;
    top: 28px;
    right: 23px;
  }
  .top {
    position: absolute;
    width: 42px;
    height: 4px;
    top: 0;
    background-color: white;
  }
  .mid {
    position: absolute;
    width: 42px;
    height: 4px;
    top: 10px;
    background-color: white;
  }
  .bot {
    position: absolute;
    width: 42px;
    height: 4px;
    top: 20px;
    background-color: white;
  }
  .dropDown {
    display: none;
    position: absolute;
    width: 100%;
    height: 1024px;
    background-color: rgba(23, 40, 33, 0.91);
  }
  .menu-vertical {
    max-width: 158px;
    height: 330px;
    margin: 122px auto 61px;
    text-align: center;
    font-family: metropolis, sans-serif;
    font-size: 26px;
    font-weight: 600;
    line-height: 2.54;
    letter-spacing: -0.3px;
    color: #ffffff;
  }
  .logo-container {
    width: 205px;
    margin: 0 auto;
    position: relative;
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
  .phoneLogoDrop {
    left: 0;
  }
  .mailLogoDrop {
    right: 0;
  }
  .cw {
    position: absolute;
    top: 38px;
    right: 22px;
    width: 42px;
    height: 4px;
    transform: rotate(44deg);
    background-color: #ffffff;
  }
  .ccw {
    position: absolute;
    top: 38px;
    right: 22px;
    width: 42px;
    height: 4px;
    transform: rotate(-44deg);
    background-color: #ffffff;
  }
  .show {
    display: none;
    ${mq('small')}{display: block}
  }
`
function displayDrop() {
  document.getElementById("drop").classList.toggle("show");
}
export default props => (
  <Header home={props.home}>
    <div class="hide">
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
    </div>
    <div class="center">
      <div class="width">
        <div class="menu">
          <Link class="link home" to="/" activeStyle={{display: "none"}}>Home</Link>
          <Link class="link services" to="/services/" activeStyle={{display: "none"}}>Our Services</Link>
          <Link class="link about" to="/about/" activeStyle={{display: "none"}}>About Us</Link>
          <Link class="link resources" to="/resources/" activeStyle={{display: "none"}}>Resources</Link>
          <Link class="link contact" to="/contact/" activeStyle={{display: "none"}}>Contact Us</Link>
          <hr/>
        </div>
      </div>
    </div>
    <div class="show">
      <div id="button" class="hamburger" onclick="displayDrop()">
        <div class="top"/>
        <div class="mid"/>
        <div class="bot"/>
      </div>
      <div id="drop" class="dropDown">
        <div class="exit" onclick="hideDrop()">
          <div class="cw"/>
          <div class="ccw"/>
        </div>
        <div class="menu-vertical">
          Home<br/>
          Our Services<br/>
          About Us<br/>
          Resources<br/>
          Contact<br/>
        </div>
        <div class="logo-container">
          <div class="phoneLogoDrop"><FontAwesomeIcon class="icon" icon={faPhoneAlt}/></div>
          <div class="mailLogoDrop"><FontAwesomeIcon class="icon" icon={faEnvelope}/></div>
        </div>
      </div>
    </div>
  </Header>
)
