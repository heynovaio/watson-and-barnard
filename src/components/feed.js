import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import survey from "../images/survey.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


const Contact = styled.section`
  position: relative;
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -2;
    background-color: #f6f7fa;
  }
  .green-box {
    background-color: #34594c;
  }
  .flex {
    display: flex;
    max-width: 776px;
    justify-content: space-between;
    margin-right:auto;
  }
  .container {
    max-width: 347px;
  }
  h2 {
    min-height: 64px;
    font-family: canada-type-gibson, sans-serif;
    font-size: 50px;
    line-height: 1.28;
    color: #eee4cb;
    font-family: astoria, sans-serif;
    font-weight: 400;
  }
  h3 {
    min-height: 31px;
    font-family: canada-type-gibson, sans-serif;
    font-size: 21px;
    font-weight: 600;
    line-height: 1.48;
    color: #ffffff;
  }
  p {
    max-width: 347px;
    //min-height: 103px;
    font-family: canada-type-gibson, sans-serif;
    font-size: 18px;
    line-height: 1.33;
    color: #ffffff;
  }
  .pic {
    max-width: 313px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    margin-top: 61px;
  }
  .width {
    max-width: 1200px;
    position: relative;
    margin:auto;
  }
  .outer-box {
    max-width: 844px;
    background-color: #34594c;
    padding: 86px 0 152px 0;
  }
  textarea {
    width: 100%;
    height: 96px;
  }
  form {
    width: 360px;
    font-family: canada-type-gibson, sans-serif;;
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
  }
  .address {
    margin-top: 34px;
  }
  .address div {
    font-family: canada-type-gibson, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #ffffff;
  }
  .middle{
    margin-top: 22px;
    margin-bottom: 22px;
  }
  input[type="text"] {
    margin-bottom: 20px;
    width: 100%;
    border-radius: 2px;
    border: none;
  }
  select {
    margin-bottom: 20px;
    width: 100%;
    border-radius: 2px;
    border: none;
    height: 40px;
  }
  .strip {
    position: relative;
  }
  input[type="submit"]{
    width: 100%;
    height: 51px;
    background-color: #d3c190;
    border: none;
  }
  .plate {
    width: 50%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #34594c;
  }
  textarea {
    border-radius: 2px;
    border: none;
  }
`
const Feed = () => (
  <Contact>
    <div class="background"/>
    <div class="strip">
      <div class="plate"/>
      <div class="width">
        <div class="outer-box">
          <div class="flex">
            <div class="container">
              <h2>Contact us</h2>
              <h3>We'd love to hear from you</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div class="address">
                <div><FontAwesomeIcon icon={faMapMarkerAlt}/> 123 Address, Delta BC</div>
                <div class="middle"><FontAwesomeIcon icon={faPhoneAlt}/> 000-000-0000</div>
                <div><FontAwesomeIcon icon={faEnvelope}/> email@address.com</div>
              </div>
            </div>
            <div>
              <form>
                Email Address<br/>
                <input type="text" name="email" placeholder="email@example.com"/><br/>
                Project Type<br/>
                <select name="project">
                  <option selected>Select your Project Type</option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select><br/>
                Write us a message<br/>
                <textarea name="message" placeholder="Write Something..."/><br/>
                <input type="submit"/>
              </form>
            </div>
          </div>
        </div>
        <img class="pic" src={survey}/>
      </div>
    </div>
  </Contact>
)
export default Feed
