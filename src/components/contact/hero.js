import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
//font-family: astoria, sans-serif;
//font-family: metropolis, sans-serif;

const Hero = styled.div`
  background-color: #f6f7fa;
  position: relative;
  .green-box {
    top:0;
    bottom: 0;
    left: 39px;
    right: 0;
    position: absolute;
    border-radius: 6px;
    box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.07);
    background-image: linear-gradient(to bottom, #4e8672, #386656);
  }
  h1 {
    font-family: astoria, sans-serif;
    font-size: 100px;
    font-weight: 500;
    line-height: 0.53;
    letter-spacing: 0.4px;
    text-align: center;
    color: #eee4cb;
    margin: auto;
  }
  p {
    max-width: 598px;
    min-height: 96px;
    font-family: metropolis, sans-serif;
    font-size: 22px;
    line-height: 1.45;
    text-align: center;
    color: #ffffff;
    margin: 40px auto 0;
  }
  .container {
    position: relative;
    z-index: +1;
    min-height: 622px;
    padding-top: 303px;
  }
  .circle {
    width: 87px;
    height: 87px;
    box-shadow: 0 2px 4px 0 rgba(78, 78, 78, 0.11);
    background-color: #ffffff;
    border-radius: 50%;
    margin: auto;
    padding: 25.5px 0;
  }
  .item {
    width: 166px;
    height: 225px;
    padding-top: 22px;

  }
  .title {
    font-size: 26px;
    font-weight: 600;
    line-height: 1.38;
    text-align: center;
    color: #505d68;
    font-family: metropolis, sans-serif;
  }
  .content {
    max-width: 166px;
    min-height: 24px;
    font-family: metropolis, sans-serif;
    font-size: 18px;
    line-height: 1.33;
    text-align: center;
    color: #172821;
  }
  .icon {
    max-height: 36px;
    margin: auto;
    display: block;
    color: #34594c;
  }
  .flex-container {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: 608px;
    top: 142px;
    position: relative;
  }
`
const render = () => (
  <Hero>
    <div class="green-box"/>
    <div class="container">
      <h1>Contact Us</h1>
      <p>
        Hexagon fashion axe authentic chartreuse. Green juice kale chips
        irony chicharrones bicycle rights chartreuse, lo-fi put a bird
         on it marfa poke tousled.
      </p>
      <div class="flex-container">
        <div class="flex">
          <div class="item">
            <div class="circle"><FontAwesomeIcon class="icon" icon={faEnvelope}/></div>
            <div class="title">Email</div>
            <div class="content">info@form.com</div>
          </div>
          <div class="item">
            <div class="circle"><FontAwesomeIcon class="icon" icon={faPhoneAlt}/></div>
            <div class="title">Phone</div>
            <div class="content">601-199-0349</div>
          </div>
          <div class="item">
            <div class="circle"><FontAwesomeIcon class="icon" icon={faMapMarkerAlt}/></div>
            <div class="title">Address</div>
            <div class="content">053 Braulio Field</div>
          </div>
        </div>
      </div>
    </div>
  </Hero>
)
export default render
