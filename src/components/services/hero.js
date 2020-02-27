import React from "react"
import styled from "@emotion/styled"
import picture from "../../images/icon-group@3x.png"
import Circles from "../circles"
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
  background-color: #f6f7fa;
  font-family: metropolis, sans-serif;
  position: relative;
  padding: 0 0 0;
  h1 {
    min-height: 87px;
    font-family: astoria, sans-serif;
    font-size: 74px;
    font-weight: 500;
    line-height: 1.18;
    letter-spacing: 0.3px;
    color: #eee4cb;
    margin: 0 0 7px;
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
    font-family: metropolis, sans-serif;
    max-width: 609px;
    min-height: 192px;
    font-size: 22px;
    line-height: 1.45;
    color: #ffffff;
    margin: 7px 0 0;
    ${mq('tablet')}{
      max-width: 100%;
      min-height: 258px;
      font-size: 20px;
      line-height: 1.4;
      color: #ffffff;
    }
  }
`
const GreenBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 39px;
  border-radius: 0 0 0 6px;
  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.07);
  background-image: linear-gradient(to bottom, #4e8672, #386656);
  min-height: 636px;
  ${mq('tablet')}{
    left: 0;
    border-radius: 0;
  }
`
const Center = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  ${mq('large')}{
    padding-left: 70px;
  }
  ${mq('tablet')}{display: block; padding-left: 0; text-align: center;}
`
const ImgContainer = styled.div`
  width: 50%;
  margin-top: 130px;
  text-align: right;
  img {
    width: 100%;
    max-width: 524px;
  }
  ${mq('tablet')}{
    display: none;
  }
`

const Content = styled.div`
  padding: 246px 0 75px;
  min-height: 622px;
  position: relative;
  ${mq('tablet')}{
    padding: 194px 20px 40px;
    min-height: 650px;
  }
`
const Mobile = styled.div`
  display: none;
  ${mq('small')}{
    display: block
  }
`

export default () => (
  <Hero>
    <GreenBox/>
    <Center>
      <Content>
        <h1>Areas of Expertise</h1>
        <p>
          Our team of skilled survey experts, engineers and development
          consultants are by your side, from field to finish, and, at
          the helm of the industry’s latest technology, will provide
          you with the most precise and comprehensive geomatics.
        </p>
      </Content>
      <ImgContainer>
        <img src={picture} alt="engineering graphic" role="presentation" />
      </ImgContainer>
      <Mobile>
        <Circles/>
      </Mobile>
    </Center>
  </Hero>
)
