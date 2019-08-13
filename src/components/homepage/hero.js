import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import styled from "@emotion/styled"
import photo from "../../images/adobe-stock-4946677-preview@3x.jpg"
import arrow from "../../images/bitmap@3x.png"
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
  h1 {
    margin: 0 0 19px;
    min-height: 106px;
    font-size: 44px;
    line-height: 1.2;
    letter-spacing: -0.5px;
    color: #eee4cb;
    font-weight: 600;
    ${mq('small')}{
      font-size: 26px;
      line-height: 1.42;
      letter-spacing: -0.3px;
      min-height: 74px;
    }
  }
  p {
    margin: 19px 0 38px;
    max-width: 543px;
    min-height: 102px;
    font-size: 22px;
    line-height: 1.55;
    color: #ffffff;
    ${mq('small')}{
      font-size: 20px;
      line-height: 1.4;
    }
  }
`
const ImgContainer = styled.div`
  margin: auto;
  padding: 0 0 0 39px;
  max-width: 1440px;
  ${mq('small')}{ display: none }
  div {
    padding: 0 0 0 39px;
    max-width: 1366px;
    position: relative;
  }
  img {
    position: absolute;
    width: 707px;
    top: 115px;
    right: 0;
    box-shadow: -5px 6px 15px 0 rgba(32, 62, 50, 0.27);
  }
`
const OuterContainer = styled.div`
  max-width: 50%;
  position: relative;
  ${mq('regular')}{ max-width: 775px }
`
const GreenBox = styled.div`
  margin: 0 -55px 0 39px;
  padding: 236px 20px 20px;
  border-radius: 0 0 6px 6px;
  background-image: radial-gradient(circle at 21% 15%, #4e8672, #386656);
  min-height: 739px;
  ${mq('regular')}{ margin-right: 0 }
  ${mq('small')}{
    margin-left: 0;
    padding-top: 205px;
    min-height: 705px;
  }
`
const Align = styled.div`
  max-width: 626px;
  margin-left: auto;
`
const Button = styled.a`
  margin: 38px 0 0;
  padding: 22px 0 0 33px;
  display: block;
  width: 231px;
  height: 65px;
  box-shadow: 5px 2px 14px 0 rgba(23, 40, 33, 0.52);
  background-color: #172821;
  position: relative;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.1;
  color: #eee4cb;
`
/*_________________________Custom Arrow______________________________*/
const CustomArrow = () => (
  <CustomArrowStyle><div/><div/></CustomArrowStyle>
)
const CustomArrowStyle = styled.div`
  height: 20px;
  width: 40px;
  position: absolute;
  right: 27px;
  top: 22px;
  div:first-child {
    position: absolute;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    border-style: solid;
    border-width: 2px 2px 0 0;
    right: 1px;
    top: 5px;
  }
  div:last-child {
    width: 40px;
    height: 0px;
    border-style: solid;
    border-width: 1px 0 1px 0;
    position: absolute;
    right: 0;
    top: 9px
  }
`
const Mobile = styled.div`
  display: none;
  img {
    position: absolute;
    width: 28.9px;
    top: 36px;
    left: 21px;
  }
  ${mq('small')}{display: block}
`
export default () => (
  <Hero>
    <ImgContainer>
      <div><img src={photo} alt=""/></div>
    </ImgContainer>
    <OuterContainer>
      <GreenBox>
        <Align>
          <h1>Reliable Land Surveying & Engineering in Delta, BC</h1>
          <p>
            Hexagon fashion axe authentic chartreuse. Green juice kale
            chips irony chicharrones bicycle rights chartreuse, lo-fi
            put a bird on it marfa poke tousled.
          </p>
          <Button>Learn More<CustomArrow/></Button>
        </Align>
      </GreenBox>
    </OuterContainer>
    <Mobile>
      <img src={arrow} alt=""/>
      <Circles/>
    </Mobile>
  </Hero>
)
