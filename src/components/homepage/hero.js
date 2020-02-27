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
    margin: 0 0 6px;
    min-height: 170px;
    font-size: 49px;
    line-height: 1.06;
    letter-spacing: -0.56px;
    color: #eee4cb;
    font-weight: 600;
    max-width: 590px;
    ${mq('tablet')}{
      font-size: 26px;
      line-height: 1.42;
      letter-spacing: -0.3px;
      min-height: 74px;
    }
  }
  p {
    margin: 4px 0 24px;
    max-width: 543px;
    min-height: 32px;
    font-size: 22px;
    line-height: 1.45;
    color: #ffffff;
    ${mq('tablet')}{
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
  padding: 232px 20px 20px;
  border-radius: 0 0 6px 6px;
  background-image: radial-gradient(circle at 21% 15%, #4e8672, #386656);
  min-height: 749px;
  ${mq('regular')}{ margin-right: 0 }
  ${mq('tablet')}{
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
  margin: 13px 0 0;
  padding: 22px 80px 0 33px;
  display: inline-block;
  height: 65px;
  box-shadow: 5px 2px 14px 0 rgba(23, 40, 33, 0.52);
  background-color: #172821;
  position: relative;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.1;
  color: #eee4cb;
  text-decoration: none;
  transition: all .25s;
  &:hover {
    background: #eee4cb;
    color: #396859;
    padding-right: 100px;
    div:last-child {
      width: 55px;
    }
  }
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
    transition: width .25s;
  }
`
const ImgPositionOuter = styled.div`
  margin: 0 auto;
  padding: 0 0 0 39px;
  max-width: 1440px;
  ${mq('tablet')}{display: none}
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
  border-radius: 6px;
  overflow: hidden;
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
  ${mq('tablet')}{display: block}
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
            Providing quality service in Delta and the Lower Mainland for over 45 years with a dynamic multidisciplinary team ready to take on any challenge.
          </p>
          <Button href="/services">Learn More<CustomArrow/></Button>
        </Align>
      </GreenBox>
    </OuterContainer>
    <Mobile><Circles/></Mobile>
  </Hero>
)
