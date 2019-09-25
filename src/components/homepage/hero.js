import React from "react"
import styled from "@emotion/styled"
import Circles from "../circles"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
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
  font-family: metropolis, sans-serif;
  position: relative;
  h1 {
    margin: 0 0 14px;
    min-height: 170px;
    font-size: 49px;
    line-height: 1.06;
    letter-spacing: -0.56px;
    color: #eee4cb;
    font-weight: 600;
    max-width: 590px;
    ${mq('small')}{
      font-size: 26px;
      line-height: 1.42;
      letter-spacing: -0.3px;
      min-height: 74px;
    }
  }
  p {
    margin: 14px 0 44px;
    max-width: 543px;
    min-height: 32px;
    font-size: 22px;
    line-height: 1.45;
    color: #ffffff;
    ${mq('small')}{
      font-size: 20px;
      line-height: 1.4;
    }
  }
`
const OuterContainer = styled.div`
  max-width: 50%;
  position: relative;
  ${mq('regular')}{ max-width: 775px }
`
const GreenBox = styled.div`
  margin: 0 -55px 0 39px;
  padding: 274px 20px 20px;
  border-radius: 0 0 6px 6px;
  background-image: radial-gradient(circle at 21% 15%, #4e8672, #386656);
  min-height: 749px;
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
  margin: 44px 0 0;
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
    border-style: solid;
    border-width: 2px 2px 0 0;
    right: 1px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
  div:last-child {
    width: 40px;
    height: 0px;
    border-style: solid;
    border-width: 1px 0 1px 0;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`
const ImgPositionOuter = styled.div`
  margin: 0 auto;
  padding: 0 0 0 39px;
  max-width: 1440px;
  ${mq('small')}{display: none}
`
const ImgPositionInner = styled.div`
  position: relative;
  max-width: 1364px;
`
const ImgContainer = styled.div`
  position: absolute;
  right: 0;
  width: 707px;
  top: 115px;
  box-shadow: -5px 6px 15px 0 rgba(32, 62, 50, 0.27);
`
const Photo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "tout-img@3x.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 707) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}
const Mobile = styled.div`
  display: none;
  ${mq('small')}{display: block}
`
export default () => (
  <Hero>
    <ImgPositionOuter><ImgPositionInner>
      <ImgContainer><Photo/></ImgContainer>
    </ImgPositionInner></ImgPositionOuter>
    <OuterContainer>
      <GreenBox>
        <Align>
          <h1>Land Surveying & Engineering with Integrity</h1>
          <p>
            We care about your project as much as you do. Proudly surveying
            Delta since 1989.
          </p>
          <Button>Learn More<CustomArrow/></Button>
        </Align>
      </GreenBox>
    </OuterContainer>
    <Mobile><Circles/></Mobile>
  </Hero>
)
