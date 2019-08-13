import React from 'react'
import styled from "@emotion/styled"
import archLogo from "../../images/architect.svg"
import homeLogo from "../../images/house-icon.svg"
import helmetLogo from "../../images/construction.svg"
import fenceLogo from "../../images/shape.svg"
import scrollLogo from "../../images/scroll.svg"
import buildingsLogo from "../../images/buildings.svg"
const bp = {
  smaller: 300,
  small: 500,
  tablet: 768,
  medium: 1024,
  large: 1200,
  regular: 1440,
  flex: 728,
}
const mq = n => {
  const bpArray = Object.keys(bp).map(key => [key, bp[key]]);
  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (max-width: ${size}px)`];
    return acc;
  }, []);
  return result;
}
const Associates = styled.section`
  background-color: #f6f7fa;
  padding: 105px 20px 53px;
  font-family: metropolis, sans-serif;
  text-align: center;
  ${mq('small')}{ padding: 83px 0 62px }
  h2 {
    font-size: 50px;
    line-height: 1.28;
    color: #34594c;
    min-height: 64px;
    font-family: astoria, sans-serif;
    font-weight: 400;
    margin: 0;
    ${mq('small')}{
      font-size: 40px;
      line-height: 1.2;
      margin: 0 0 28px;
    }
  }
  h3 {
    font-size: 21px;
    font-weight: bold;
    line-height: 1.33;
    color: #172821;
    margin: 0 0 8px;
  }
  p {
    font-size: 16px;
    line-height: 1.44;
    color: #172821;
    margin: 0;
  }
`
const Developers = styled.div`
  padding: 52px 10px 0;
  img {
    max-width: 139px;
    margin: 0 auto 22px;
  }
  h3 {
    min-height: 65px;
    margin: 22px 0 -8px auto;
    padding-top: 15px;
  }
  p {
    min-height: 133px;
    max-width: 298px;
    margin: -8px auto 0 auto;
    font-size: 18px;
  }
`
const Residential = styled.div`
  padding: 35px 10px 0;
  img {
    max-width: 127px;
    margin: 0 auto 18px;
  }
  h3 {
    margin: 8px auto 9px auto;
    max-width: 285px;
    min-height: 65px;
  }
  p {
    max-width: 256.7px;
    margin: 9px auto 0 auto;
  }
`
const Architects = styled.div`
  padding: 54px 10px 0;
  img {
    max-width: 134px;
    margin: 0 auto 15px;
  }
  h3 {
    max-width: 308px;
    min-height: 65px;
    margin: 0 auto -8px auto;
    padding-top: 15px;
  }
  p {
    margin: -8px auto 0 auto;
    max-width: 298px;
    font-size: 18px;
  }
`
const Municipalities = styled.div`
  padding: 44px 10px 0;
  img {
    max-width: 102px;
    margin: 0 auto 23.5px auto;
  }
  h3 {
    max-width: 307.8px;
    min-height: 65px;
    margin: 23.5px auto 4px auto;
  }
  p {
    max-width: 298.2px;
    margin: 4px auto 0 auto;
    font-size: 18px;
  }
`
const Home = styled.div`
  padding: 62px 10px 0;
  img {
    max-width: 151px;
    margin: 0 auto 27px;
  }
  h3 {
    max-width: 308px;
    margin: 27px auto -8px auto;
    min-height: 65px;
    padding-top: 15px;
  }
  p {
    max-width: 298px;
    margin: -8px auto 0 auto;
    font-size: 18px;
  }
`
const Nations = styled.div`
  padding: 51px 10px 0;
  img {
    max-width: 161px;
    margin: 0 auto 20.9px auto;
  }
  h3 {
    max-width: 285px;
    margin: 0 auto -8px auto;
    min-height: 65px;
    padding: 15px 0 0;
  }
  p {
    margin: -8px auto 0 auto;
    max-width: 298px;
  }
`
const Flex = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  div {
    width: 360px;
    height: 387px;
    border-radius: 4px;
    box-shadow: 2px 2px 13px 0 rgba(0, 0, 0, 0.03);
    background-color: #ffffff;
    margin: 30px;
    ${mq('small')}{
      margin: 10px;
      height: 365px;
    }
    img {
      display: block;
    }
  }
`
const Button = styled.a`
  width: 200px;
  height: 62px;
  display: block;
  background-color: #172821;
  padding: 17px 0 0;
  margin: 11px auto 0;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  ${mq('small')}{
    margin: 41px auto 0;
  }
`
export default () => (
  <Associates>
    <h2>We Work With</h2>
    <Flex>
      <Developers>
        <img src={helmetLogo}/>
        <h3>Developers</h3>
        <p>
          Not knowing your land’s potential is your only obstacle.
        </p>
      </Developers>
      <Residential>
        <img src={homeLogo}/>
        <h3>Residential and Urban Construction</h3>
        <p>
          Start off effectively right from the start
          — ensure you meet all criteria and requirements.
        </p>
      </Residential>
      <Architects>
        <img src={archLogo}/>
        <h3>Architects</h3>
        <p>
          Design courageously by knowing your limits and land restrictions.
        </p>
      </Architects>
      <Municipalities>
        <img src={buildingsLogo}/>
        <h3>Municipalities and Government</h3>
        <p>
          Build to ensure a safe and functional community.
        </p>
      </Municipalities>
      <Home>
        <img src={fenceLogo}/>
        <h3>Home/Property Owners</h3>
        <p>“Good fences make good neighbors.” Be a good neighbor.</p>
      </Home>
      <Nations>
        <img src={scrollLogo}/>
        <h3>First Nations</h3>
        <p>
          We are familiar with, and sensitive to, the legislature
          and agreements involved in the management of lands belonging
          to the Musqueam and Tsawwassen First Nations.
        </p>
      </Nations>
    </Flex>
    <Button>View Services</Button>
  </Associates>
)
