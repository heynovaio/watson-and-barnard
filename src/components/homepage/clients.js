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
  small: 720,
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
  padding: 105px 10px 53px;
  font-family: metropolis, sans-serif;
  text-align: center;
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
    font-family: metropolis, sans-serif;
    font-size: 21px;
    font-weight: bold;
    line-height: 1.33;
    text-align: center;
    color: #172821;
    margin: 18px 0 9px;
  }
`
const ItemGallery = styled.div`
  max-width: 1260px;
  margin: 0 auto;
`
const ItemContainer = styled.div`
  display: inline-block;
  position: relative;
  padding: 30px;
  width: 33%;
  vertical-align: top;
  ${mq('medium')}{
    width: 50%;
  }
  ${mq('small')}{
    width: 100%;
    padding: 10px;
  }
`
const Item = styled.div`
  margin: 0 auto;
  min-height: 387px;
  background-color: #ffffff;
  padding: 35px 26px 0;
  max-height: 100%;
  ${mq('small')}{
    min-height:
  }
`
const LilPar = styled.p`
  font-family: metropolis, sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.44;
  text-align: center;
  color: #172821;
`
const BigPar = styled.p`
  font-family: metropolis, sans-serif;
  font-size: 18px;
  font-weight: normal;
  line-height: 1.44;
  text-align: center;
  color: #172821;
`
const ImageContainer = styled.div`
  height: 148px;
  text-align: center;
  position: relative;
  img {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    <ItemGallery>
      <ItemContainer>
        <Item>
          <ImageContainer><img src={helmetLogo} alt='HelmetLogo'/></ImageContainer>
          <h3>Developers</h3>
          <BigPar>Not knowing your land’s potential is your only obstacle.</BigPar>
        </Item>
      </ItemContainer>
      <ItemContainer>
        <Item>
          <ImageContainer><img src={homeLogo} alt='homeLogo'/></ImageContainer>
          <h3>Residential and Urban Construction</h3>
          <LilPar>
            Start off effectively right from the start  — ensure you meet all
            criteria and requirements.
          </LilPar>
        </Item>
      </ItemContainer>
      <ItemContainer>
        <Item>
          <ImageContainer><img src={archLogo} alt='archLogo'/></ImageContainer>
          <h3>Architects</h3>
          <BigPar>Design courageously by knowing your limits and land restrictions.</BigPar>
        </Item>
      </ItemContainer>
      <ItemContainer>
        <Item>
          <ImageContainer><img src={buildingsLogo} alt='buildingsLogo'/></ImageContainer>
          <h3>Municipalities and Government</h3>
          <BigPar>Build to ensure a safe and functional community. </BigPar>
        </Item>
      </ItemContainer>
      <ItemContainer>
        <Item>
          <ImageContainer><img src={fenceLogo} alt='fenceLogo'/></ImageContainer>
          <h3>Home/Property Owners</h3>
          <BigPar>“Good fences make good neighbors.” Be a good neighbor. </BigPar>
        </Item>
      </ItemContainer>
      <ItemContainer>
        <Item>
          <ImageContainer><img src={scrollLogo} alt='scrollLogo'/></ImageContainer>
          <h3>First Nations</h3>
          <LilPar>
            We are familiar with, and sensitive to, the legislature and
            agreements involved in the management of lands belonging to
            the Musqueam and Tsawwassen First Nations.
          </LilPar>
        </Item>
      </ItemContainer>
    </ItemGallery>
    <Button>View Services</Button>
  </Associates>
)
