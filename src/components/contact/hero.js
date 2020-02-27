import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const bp = {
  smaller: 300,
  small: 500,
  tablet: 768,
  medium: 1024,
  large: 1200,
  regular: 1440,
}
const mq = n => {
  const bpArray = Object.keys(bp).map(key => [key, bp[key]]);
  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (max-width: ${size}px)`];
    return acc;
  }, []);
  return result;
}

const Hero = styled.section`
  position: relative;
  font-family: metropolis, sans-serif;
  z-index: 2;
  h1 {
    font-family: astoria, sans-serif;
    font-size: 100px;
    font-weight: 500;
    line-height: 0.53;
    letter-spacing: 0.4px;
    text-align: center;
    color: #eee4cb;
    margin: 0 0 40px;
    ${mq('tablet')}{
      font-family: metropolis, sans-serif;
      font-size: 44px;
      font-weight: 600;
      line-height: 1.09;
      letter-spacing: -0.5px;
      margin-bottom: 16px;
    }
  }
  p {
    max-width: 598px;
    font-size: 22px;
    line-height: 1.45;
    text-align: center;
    color: #ffffff;
    margin: 40px auto 0;
    ${mq('tablet')}{
      max-width: 304px;
      font-size: 20px;
      line-height: 1.4;
      color: #ffffff;
    }
  }
  svg {
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
  min-height: 636px;
  ${mq('regular')}{ margin-right: 0 }
  ${mq('tablet')}{
    max-width: 100%;
    min-height: 258px;
    font-size: 20px;
    line-height: 1.4;
    color: #ffffff;
    left: 0;
    text-align: center;
  }
`
const Container = styled.div`
  position: relative;
  padding: 303px 20px 130px;
  ${mq('tablet')}{
    padding: 194px 20px 40px;
  }
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
  top: -28px;
  flex-wrap: wrap;
  ${mq('tablet')}{
    position: relative;
    text-align: center;
    justify-content: center;
  }
`
const Item = styled.div`
  padding: 22px 10px 43px;
  min-height: 225px;
  a {
    text-decoration: none;
  }
  ${mq('tablet')}{
    min-height: 0;
    padding: 0px 24px 4a0px;
  }
`
const Circle = styled.a`
  display: block;
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
  ${mq('tablet')}{
    color: #fff;
  }
`
const Content = styled.a`
  max-width: 166px;
  min-height: 24px;
  font-size: 18px;
  line-height: 1.33;
  text-align: center;
  color: #172821;
  margin: 2px 0 0;
  ${mq('tablet')}{
    color: #fff;
  }
`
export default () => (
  <Hero>
    <GreenBox/>
    <Container>
      <h1>Contact Us</h1>
      <p>
        Contact us to learn more about our services, get expert advice or to request a quote.
      </p>
    </Container>
    <FlexContainer>
      <FlexBox>
        <Item>
          <Circle tabindex="-1" href="mailto:info@wbsurveys.bc.ca"><FontAwesomeIcon class="icon" icon={faEnvelope}/></Circle>
          <Title>Email</Title>
          <Content href="mailto:info@wbsurveys.bc.ca">info@wbsurveys.bc.ca</Content>
        </Item>
        <Item>
          <Circle href="tel:604.943.9433"><FontAwesomeIcon class="icon" icon={faPhoneAlt}/></Circle>
          <Title>Phone</Title>
          <Content href="tel:604.943.9433">604-943-9433</Content>
        </Item>
        <Item>
          <Circle><FontAwesomeIcon class="icon" icon={faMapMarkerAlt}/></Circle>
          <Title>Address</Title>
          <Content>1524 56 St, Delta, BC </Content>
        </Item>
      </FlexBox>
    </FlexContainer>
  </Hero>
)
