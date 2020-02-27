import React from "react"
import styled from "@emotion/styled"
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
    height: 53px;
    margin: 0 auto 40px;
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
    font-size: 22px;
    line-height: 1.45;
    text-align: center;
    color: #ffffff;
    max-width: 624px;
    margin: 40px auto 0;
    min-height: 96px;
    ${mq('tablet')}{
      max-width: 304px;
      min-height: 258px;
      font-size: 20px;
      line-height: 1.4;
      color: #ffffff;
    }
  }
`
const Green = styled.div`
  border-radius: 0 0  0 6px;
  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.07);
  background-image: linear-gradient(to bottom, #4e8672, #386656);
  position: absolute;
  left: 39px;
  top: 0;
  bottom: 0;
  right: 0;
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
const Content = styled.div`
  position: relative;
  padding: 303px 0 20px;
  min-height: 636px;
  ${mq('tablet')}{
    padding: 194px 20px 40px;
    min-height: 520px;
  }
`
export default () => (
  <Hero>
    <Green/>
    <Content>
      <h1>Resources</h1>
      <p>
        Through our network of professionals, we can guide you in locating
        architects, house designers, arborists, archeologists, geotechnical
        and civil mechanical engineers.
      </p>
    </Content>
  </Hero>
)
