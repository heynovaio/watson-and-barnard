import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Hero = styled.section`
  position: relative;
  font-family: metropolis, sans-serif;
  h1 {
    font-family: astoria, sans-serif;
    font-size: 100px;
    font-weight: 500;
    line-height: 0.53;
    letter-spacing: 0.4px;
    text-align: center;
    color: #eee4cb;
    margin: 0 0 40px;
  }
  p {
    max-width: 598px;
    min-height: 96px;
    font-size: 22px;
    line-height: 1.45;
    text-align: center;
    color: #ffffff;
    margin: 40px auto 0;
  }
  .icon {
    max-height: 36px;
    margin: auto;
    display: block;
    color: #34594c;
  }
`
const GreenBox = styled.div`
  top:0;
  bottom: 0;
  left: 39px;
  right: 0;
  position: absolute;
  border-radius: 0 0 0 6px;
  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.07);
  background-image: linear-gradient(to bottom, #4e8672, #386656);
`
const Container = styled.div`
  position: relative;
  padding: 303px 20px 130px;
`
const FlexContainer = styled.div`
  position: relative;
  max-width: 608px;
  margin: 0 auto;
`
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 100%;
  position: absolute;
  top: -83px;
`
const Item = styled.div`
  padding: 22px 10px 43px;
  min-height: 225px;
`
const Circle = styled.div`
  width: 87px;
  height: 87px;
  box-shadow: 0 2px 4px 0 rgba(78, 78, 78, 0.11);
  background-color: #ffffff;
  border-radius: 50%;
  margin: 0 auto 17px;
  padding: 25.5px 0;
`
const Title = styled.div`
  font-size: 26px;
  font-weight: 600;
  line-height: 1.38;
  text-align: center;
  color: #505d68;
  margin: 17px 0 2px;
`
const Content = styled.div`
  max-width: 166px;
  min-height: 24px;
  font-size: 18px;
  line-height: 1.33;
  text-align: center;
  color: #172821;
  margin: 2px 0 0;
`
export default () => (
  <Hero>
    <GreenBox/>
    <Container>
      <h1>Contact Us</h1>
      <p>
        Hexagon fashion axe authentic chartreuse. Green juice kale chips
        irony chicharrones bicycle rights chartreuse, lo-fi put a bird
         on it marfa poke tousled.
      </p>
    </Container>
    <FlexContainer>
      <FlexBox>
        <Item>
          <Circle><FontAwesomeIcon class="icon" icon={faEnvelope}/></Circle>
          <Title>Email</Title>
          <Content>info@form.com</Content>
        </Item>
        <Item>
          <Circle><FontAwesomeIcon class="icon" icon={faPhoneAlt}/></Circle>
          <Title>Phone</Title>
          <Content>601-199-0349</Content>
        </Item>
        <Item>
          <Circle><FontAwesomeIcon class="icon" icon={faMapMarkerAlt}/></Circle>
          <Title>Address</Title>
          <Content>053 Braulio Field</Content>
        </Item>
      </FlexBox>
    </FlexContainer>
  </Hero>
)
