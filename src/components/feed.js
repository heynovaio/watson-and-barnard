import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import survey from "../images/survey.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

//max-width at 1440 should be 964px
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
const Contact = styled.section`
  background-color: #f6f7fa;
  .half {
    max-width: 50%;
    position: relative;
    ${mq('regular')}{
      max-width: 965px;
    }
  }
  .green {
    margin-right: -244px;
    min-height: 600px;
    background-color: #34594c;
    ${mq('regular')}{
      margin-right: 0;
    }
  }
  .center {
    max-width: 846px;
    margin-left: auto;
    ${mq('small')}{
      padding: 0 20px;
    }
  }
  .width {
    max-width: 776px;
    position: relative;
    ${mq('small')}{
      margin: auto;
    }
  }
  .text {
    padding-top:83px;
    ${mq('small')}{
      padding-top: 43px;
    }
  }
  h2 {
    min-height: 64px;
    font-family: canada-type-gibson, sans-serif;
    font-size: 50px;
    line-height: 1.28;
    color: #eee4cb;
    font-family: astoria, sans-serif;
    font-weight: 400;
    margin: 0px;
    ${mq('small')}{
      text-align: center;
      min-height: 48px;
      font-size: 40px;
      line-height: 1.2;

    }
  }
  h3 {
    min-height: 31px;
    font-family: metropolis, sans-serif;
    font-weight: 600;
    line-height: 1.48;
    color: #ffffff;
    margin: 4px 0 0;
    ${mq('small')}{
      font-size: 21px;
      min-height: 31px;
      margin-top: 36px;
    }
  }
  p {
    max-width: 347px;
    min-height: 103px;
    font-family: metropolis, sans-serif;
    font-size: 18px;
    line-height: 1.33;
    color: #ffffff;
    margin: 14px 0 35px;
    ${mq('small')}{
      margin-bottom: 37px;
    }
  }
  .address {
    position: relative;
    max-width: 335px;
  }
  .address div {
    height: 23px;
    font-family: metropolis, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #ffffff;
    padding-left: 39px;
    position: relative;
    margin-bottom: 23px;
    left: -2px;
  }
  .address .icon {
    position:absolute;
    max-width: 22px;
    max-height: 22px;
    left: 0;
    text-align: center;
    color: #eee4cb;
  }
  .img-center {
    max-width: 1198px;
    margin: auto;
    position: relative;
  }
  .pic {
    max-width: 313px;
    position absolute;
    top: 61px;
    right: 0;
  }
  form {
    width: 361px;
    position: absolute;
    right: 0;
    top: 86px;
    ${mq('small')}{
      position: relative;
      top: 58px;
      width: 335px;
    }
  }
  input[type=text] {
    width: 100%;
    height: 40px;
    margin: 0 0 20px;
    border-style: none;
    border-radius: 2px;
    display: block;
  }
  select {
    width: 100%;
    height: 40px;
    margin: 0 0 20px;
    display: block;
  }
  textarea {
    width: 100%;
    height: 96px;
    border-style: none;
    border-radius: 2px;
    display: block;
    margin: 0 0 16px;
  }
  input[type=submit] {
    width: 100%;
    height: 51px;
    background-color: #172821;
    color: white;
    border-style: none;
    font-size: 20px;
    display: block;
    font-family: metropolis, sans-serif;
    font-weight: 600;
  }
  form div {
    margin: 0 0 7px;
    font-family: metropolis, sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
  }
  .pic-small {
    width: 93px;
    position: absolute;
    display: none;
    top: 0;
    right: 0;
    ${mq('small')}{display: block}
  }
`
const render = () => (
  <Contact>
    <div class="img-center">
      <img class="pic" src={survey}/>
    </div>
    <div class="half">
      <div class="green">
        <div class="center">
          <div class="width">
            <div class="text">
              <h2>Contact us</h2>
              <h3>We'd love to hear from you</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div class="address">
                <div>123 Address, Delta BC
                  <FontAwesomeIcon class="icon" icon={faMapMarkerAlt}/>
                </div>
                <div>000-000-0000
                  <FontAwesomeIcon class="icon" icon={faPhoneAlt}/>
                </div>
                <div>email@address.com
                  <FontAwesomeIcon class="icon" icon={faEnvelope}/>
                </div>
                <img class="pic-small" src={survey}/>
              </div>
            </div>
            <form>
              <div>Email Address</div>
              <input type="text"/>
              <div>Project Type</div>
              <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
              <div>Write us a message</div>
              <textarea>
              </textarea>
              <input type="submit"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Contact>
)
export default render
