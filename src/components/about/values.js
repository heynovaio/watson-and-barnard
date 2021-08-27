import React from "react"
import styled from "@emotion/styled"
import { colors } from "../global.js"
import Medal from "../../images/medal.svg"
import Chart from "../../images/chart.svg"
import Convo from "../../images/convo.svg"
import Exp from "../../images/experience.svg"

const Values = styled.section`
  padding: 85px 0 95px;
  font-family: metropolis, sans-serif;
  background: ${colors.themeBlue}; 
`
const OuterContainer = styled.div`
  max-width: 1212px;
  padding:0 10px;
  margin: auto;
  color:#ffffff;
  text-align:center;
  p {
    font-size: 16px;
    line-height: 1.5;   
    max-width:640px;
    width:100%;
    font-weight:300;
  }
  h2{
    font-family: astoria, sans-serif;
    margin: 0 auto 14px;
    padding-bottom:15px;
    max-width:640px;
    width:100%;
    font-size: 50px;
    line-height: 60px;
    font-weight:400;
  }
`
const Sub = styled.p`
  margin: 0 auto 65px;
`
const Grid = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
  row-gap:65px;
`
const Card = styled.div`
  color:#172821;
  background: #ffffff;
  box-shadow: -5px 6px 15px rgba(32, 62, 50, 0.05);
  border-radius: 6px;
  max-width:450px;
  width:100%;
  padding:30px 40px 42px; 
  align-items:center;
  display:flex;
  flex-direction:column;
  text-align:center;
  justify-content: space-between;
  img{
    margin-bottom:12px;
  }
  h4{
    margin-bottom:36px;
    font-weight: 600;
    font-size: 22px;
    line-height: 1.32;
  }
  p{
    margin:0 0 0;
    padding-bottom:0;
    
  }
`

export default () => (
  <Values>
    <OuterContainer>
      <h2>Our Values</h2>
      <Sub>Reprehenderit esse labore id veniam ut veniam non ex adipisicing</Sub>
      <Grid>
        <Card>
          <img src={Medal} alt="Medal" role="presentation"/>
          <h4>Quality</h4>
          <p>amet nostrud quis commodo do sunt aute nulla ad aute minim duis 
          duis sit et culpa consectetur et enim mollit</p>
        </Card>
        <Card>
          <img src={Chart} alt="Chart" role="presentation"/>
          <h4>Guidance/Advising</h4>
          <p>amet nostrud quis commodo do sunt aute nulla ad aute minim duis 
          duis sit et culpa consectetur et enim mollit</p>
        </Card>
        <Card>
          <img src={Convo} alt="Convo" role="presentation"/>
          <h4>Communication</h4>
          <p>amet nostrud quis commodo do sunt aute nulla ad aute minim duis 
          duis sit et culpa consectetur et enim mollit</p>
        </Card>
        <Card>
          <img src={Exp} alt="Exp" role="presentation"/>
          <h4>Reliability/Experience</h4>
          <p>amet nostrud quis commodo do sunt aute nulla ad aute minim duis 
          duis sit et culpa consectetur et enim mollit</p>
        </Card>
      </Grid>
    </OuterContainer>
  </Values>
)
