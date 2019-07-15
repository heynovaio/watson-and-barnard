import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

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
    color: #172821;
    font-size: 16px;
    text-decoration: none;
  }
  .contact {
    width: 142px;
    text-align: center;
    font-family: metropolis, sans-serif;
    font-weight: 600;
    color: #172821;
    font-size: 16px;
    text-decoration: none;
    padding: 14px 0 17px;
    border: solid 3px #172821;
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
`
const render = () => (
  <Header>
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
