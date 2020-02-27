import React from "react"
import styled from "@emotion/styled"
//font-family: metropolis, sans-serif;
//font-family: astoria, sans-serif;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Links = styled.section`
  padding: 52px 20px 84px;
  font-family: metropolis, sans-serif;
  h2 {
    min-height: 52px;
    font-size: 36px;
    font-weight: normal;
    letter-spacing: 0.14px;
    text-align: center;
    color: #172821;
    font-family: astoria, sans-serif;
    margin: 0 0 56px;
  }
  a {
    text-decoration: none;
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: 0.1px;
    text-align: center;
    color: #386656;
  }
`
const Box = styled.div`
  padding: 65px 20px 30px;
  min-height: 455px;
  max-width: 1200px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 2px 5px 16px 0 rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
`
const Container = styled.div`
  min-height: 252px;
  margin: 56px 0 0;
  position: relative;
  div {
    text-align: center;
    height: 84px;
  }
`
export default () => (
  <Links>
    <Box>
      <h2>Check out these helpful links:</h2>
      <Container>
        <div><a href="#"><FontAwesomeIcon icon={faLink}/> Association of BC Land Surveyors</a></div>
        <div><a href="#"><FontAwesomeIcon icon={faLink}/> Engineers & Geoscientists British Columbia</a></div>
        <div><a href="#"><FontAwesomeIcon icon={faLink}/> Association of Canada Lands Surveyors</a></div>
      </Container>
    </Box>
  </Links>
)
