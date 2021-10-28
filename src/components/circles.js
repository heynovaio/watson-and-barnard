import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import styled from "@emotion/styled"
const Circles = styled.div`
  width: 205px;
  margin: 0 auto;
  position: relative;
  bottom: -10px;
  a {
    width: 74px;
    height: 74px;
    border-radius: 50%;
    box-shadow: 0 2px 20px 0 rgba(97, 97, 97, 0.2);
    background-color: #ffffff;
    text-align: center;
    padding-top: 21px;
    color: #d3c190;
    position: absolute;
    font-size: 30px;
  }
  .icon {
    width: 30px;
    display: block;
    margin: auto;
  }
  a:first-child { left: 0 }
  a:last-child { right: 0 }
`
export default () => (
  <Circles>
    <a href="tel:604-943-9433"><FontAwesomeIcon class="icon" icon={faPhoneAlt}/></a>
    <a href="mailto:contact@wbsurveys.ca"><FontAwesomeIcon class="icon" icon={faEnvelope}/></a>
  </Circles>
)
