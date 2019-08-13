import React from "react"
import styled from "@emotion/styled"
import tower from "../../images/towers@3x.jpg"
import building from "../../images/912859458@3x.jpg"
import construction from "../../images/464959464@3x.jpg"
import residence from "../../images/984568356@3x.jpg"
const bp = {
  smaller: 300,
  small: 500,
  tablet: 768,
  medium: 1024,
  large: 1200,
  regular: 1440,
  friendsFlex: 1180,
  compress: 590,
}
const mq = n => {
  const bpArray = Object.keys(bp).map(key => [key, bp[key]]);
  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (max-width: ${size}px)`];
    return acc;
  }, []);
  return result;
}
const Friends = styled.section`
  font-family: metropolis, sans-serif;
  background-color: #f6f7fa;
  padding: 138px 10px 117px;
  ${mq('small')}{ padding: 41px 10px 73px }
  h2 {
    min-eight: 52px;
    font-size: 50px;
    line-height: 1.04;
    text-align: center;
    color: #172821;
    font-family: astoria, sans-serif;
    font-weight: 400;
    margin: 0 10px 22px;
    ${mq('small')}{
      font-size: 40px;
      line-height: 1.2;
      margin-bottom: 32px;
    }
  }
  p {
    max-width: 852px;
    min-height: 92px;
    font-size: 20px;
    line-height: 1.4;
    text-align: center;
    color: #172821;
    margin: 22px auto 26px;
  }
`
const Flex = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1220px;
  margin: auto;
`
const Item = styled.div`
  margin: 10px;
  max-width: 590px;
  border-radius: 4px;
  box-shadow: 2px 2px 13px 0 rgba(0, 0, 0, 0.03);
  background-color: #ffffff;
  img {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  div {
    margin: 0;
    padding: 30.5px 0 0;
    min-height: 102px;
    background-color: #ffffff;
    font-size: 22px;
    font-weight: bold;
    line-height: 1.41;
    text-align: center;
    color: #172821;
  }
`
export default () => (
  <Friends>
    <h2>Past Projects</h2>
    <p>
      We’re proud to play a small part in the livelihood of
      our community. Each project is a testament to our genuine
      client-focused approach and commitment to excellence.
    </p>
    <Flex>
      <Item><img src={tower} alt=""/><div>145 Store Street</div></Item>
      <Item><img src={building} alt =""/><div>368 Johnson Ave</div></Item>
      <Item><img src={construction} alt=""/><div>45 View Street</div></Item>
      <Item><img src={residence} alt=""/><div>5999 Main Street</div></Item>
      <Item><img src={residence} alt=""/><div>5999 Main Street</div></Item>
    </Flex>
  </Friends>
)
