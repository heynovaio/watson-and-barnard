import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import styled from "@emotion/styled"
const Circles = styled.div`
  width: 205px;
  margin: 0 auto;
  position: relative;
  bottom: 37px;
  div {
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
  .icon {
    width: 30px;
    display: block;
    margin: auto;
  }
  div:first-child { left: 0 }
  div:last-child { right: 0 }
`
export default () => (
  <Circles>
    <div><FontAwesomeIcon class="icon" icon={faPhoneAlt}/></div>
    <div><FontAwesomeIcon class="icon" icon={faEnvelope}/></div>
  </Circles>
)
