import React from "react"
import styled from "@emotion/styled"
import Image1 from "./past-images/first-nation"
import Image2 from "./past-images/spot-air-space-plan"
import Image3 from "./past-images/surrey-3cp-air-space-plan"
import Image4 from "./past-images/tsawwassen-mills"
import Image5 from "./past-images/tsawwassen-springs"

const bp = {
  smaller: 300,
  small: 500,
  tablet: 768,
  medium: 850,
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
  padding: 138px 20px 117px;
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
const Gallery = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const ItemContainer = styled.div`
  width: 50%;
  display: inline-block;
  margin: 7.5px 0;
  &:nth-child(2n + 1) {
    padding-right: 10px;
    ${mq('medium')}{
      position: block;
      padding: 0;
      width: 100%;
    }
  }
  &:nth-child(2n + 0) {
    padding-left: 10px;
    ${mq('medium')}{
      position: block;
      padding: 0;
      width: 100%;
    }
  }
  &:last-child {
    display: block;
    padding: 0 5px;
    margin: auto;
    ${mq('medium')}{
      position: block;
      padding: 0;
      width: 100%;
    }
  }
`
const Item = styled.div`
  max-width: 590px;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 2px 5px 16px 0 rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
`
const ImgContainer = styled.div`
  width: 100%;
`
const TitleContainer = styled.div`
  height: 102px;
  background-color: #ffffff;
  position: relative;
`
const Title = styled.h3`
  font-size: 22px;
  font-weight: bold;
  line-height: 1.41;
  text-align: center;
  color: #172821;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 0 20px;
`
export default () => (
  <Friends>
    <h2>Past Projects</h2>
    <p>
      We’re proud to play a small part in the livelihood of
      our community. Each project is a testament to our genuine
      client-focused approach and commitment to excellence.
    </p>
    <Gallery>
      <ItemContainer><Item><ImgContainer><Image1/></ImgContainer><TitleContainer><Title>Tsawwassen First Nation</Title></TitleContainer></Item></ItemContainer>
      <ItemContainer><Item><ImgContainer><Image2/></ImgContainer><TitleContainer><Title>The Spot Air Space Plan (12th and Cambie)</Title></TitleContainer></Item></ItemContainer>
      <ItemContainer><Item><ImgContainer><Image3/></ImgContainer><TitleContainer><Title>Surrey 3CP Air Space Plan</Title></TitleContainer></Item></ItemContainer>
      <ItemContainer><Item><ImgContainer><Image4/></ImgContainer><TitleContainer><Title>Tsawwassen Mills</Title></TitleContainer></Item></ItemContainer>
      <ItemContainer><Item><ImgContainer><Image5/></ImgContainer><TitleContainer><Title>Tsawwassen Springs Development</Title></TitleContainer></Item></ItemContainer>
    </Gallery>

  </Friends>
)
