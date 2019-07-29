import React from "react"
import styled from "@emotion/styled"
import handShake from "../../images/rectangle@3x.jpg"
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
const Easy = styled.section`
  background-color: #092146;
  font-family: metropolis, sans-serif;
  padding-right: 20px;
  h2 {
    max-width: 474px;
    font-size: 50px;
    line-height: 1.04;
    color: #eee4cb;
    font-family: astoria, sans-serif;
    font-weight: 400;
    margin: 0 0 14px 0;
    ${mq('small')}{
      min-height: 96px;
      font-size: 40px;
      line-height: 1.2;
      max-width: 335px;
      margin-bottom: 18px;
    }
  }
  h2 + p {
    max-width: 555px;
    font-size: 16px;
    line-height: 1.5;
    color: #ffffff;
    min-height: 78px;
    margin: 14px 0 12px;
    ${mq('small')}{
      margin-top: 18px;
    }
  }
  h3 {
    font-size: 20px;
    font-weight: bold;
    line-height: 1.2;
    color: #ffffff;
    margin: 0 0 10px;
  }
  h3 + p {
    max-width: 466px;
    font-size: 16px;
    line-height: 1.31;
    color: #ffffff;
    margin: 10px 0 0;
  }
`
const Center = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`
const ImgContainer = styled.div`
  position: relative;
  max-width: 585px;
  margin-right: 615px;
  ${mq('small')}{ display:none }
`
const Visible = styled.div`
  width: 100%;
  height: 593px;
  position: absolute;
  overflow: hidden;
  bottom: -29px;
  div { width: 997.2px }
  img { width: 100% }
`
const TxtContainer = styled.div`
  max-width: 575px;
  min-height: 600px;
  margin-left: auto;
  padding: 67px 0 20px 20px;
  ${mq('small')}{
    padding-top: 46px;
    min-height: 724px;
    margin-right: auto;
  }
  position: relative;
  background-color: #092146;
  div:nth-of-type(1) {
    min-height: 116px;
    margin: 12px 0 30px;
  }
  div:nth-of-type(2) {
    min-height: 126px;
    margin: 30px 0 0;
  }
`
const UpperImgContainer = styled.div`
  position: relative;
  width: 100vw;
  display: none;
  ${mq('small')}{ display:block }
  img {
    width: 100%;
    margin: 0;
  }
`
export default () => (
  <Easy>
    <UpperImgContainer><img src={handShake} alt=""/></UpperImgContainer>
    <Center>
      <TxtContainer>
        <h2>How we Make it Easier For You</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
        </p>
        <div>
          <h3>Educating and guiding</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation.
          </p>
        </div>
        <div>
          <h3>Other ways you help</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation.
          </p>
        </div>
      </TxtContainer>
      <ImgContainer>
        <Visible>
          <div><img src={handShake} alt=""/></div>
        </Visible>
      </ImgContainer>
    </Center>
  </Easy>
)
