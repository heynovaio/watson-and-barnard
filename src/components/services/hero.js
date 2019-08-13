import React from "react"
import styled from "@emotion/styled"
import picture from "../../images/icon-group@3x.png"
import Circles from "../circles"
//font-family: metropolis, sans-serif;
//font-family: astoria, sans-serif;
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
    min-height: 53px;
    font-family: astoria, sans-serif;
    font-size: 100px;
    font-weight: 500;
    line-height: 0.53;
    letter-spacing: 0.4px;
    color: #eee4cb;
    margin: 0 0 39px;
    ${mq('small')}{
      min-height: 96px;
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
    max-width: 598px;
    min-height: 102px;
    font-size: 22px;
    line-height: 1.55;
    color: #ffffff;
    margin: 39px 0 0;
    ${mq('small')}{
      max-width: 304px;
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
  ${mq('small')}{
    left: 0;
    border-radius: 0 0 6px 0;
  }
`
const Center = styled.div`
  position: relative;
  max-width: 1204px;
  margin: auto;
  padding: 0 548px 0 59px;
  ${mq('small')}{
    padding: 0 20px 0;
  }
  img {
    position: absolute;
    bottom: -45px;
    right: 0px;
    max-width: 528px;
    ${mq('small')}{
      display: none;
    }
  }
`
const Content = styled.div`
  padding: 280px 0 20px;
  min-height: 622px;
  position: relative;
  ${mq('small')}{
    padding: 194px 0 40px;
    min-height: 705px;
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
      <img src={picture} alt=""/>
      <Content>
        <h1>Services</h1>
        <p>
          Hexagon fashion axe authentic chartreuse. Green juice kale chips
          irony chicharrones bicycle rights chartreuse, lo-fi put a bird on
          it marfa poke tousled.
        </p>
      </Content>
      <Mobile>
        <Circles/>
      </Mobile>
    </Center>
  </Hero>
)
