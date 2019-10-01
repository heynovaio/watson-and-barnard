import React from "react"
import styled from "@emotion/styled"
import handShake from "../../images/handshake.jpg"
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
  h2 {
    max-width: 474px;
    font-size: 50px;
    line-height: 1.17;
    color: #ffffff;
    font-family: astoria, sans-serif;
    font-weight: 400;
    margin: 0 0 34px;
    ${mq('small')}{
      min-height: 96px;
      font-size: 40px;
      line-height: 1.2;
      max-width: 335px;
      margin-bottom: 18px;
    }
  }
  p {
    max-width: 555px;
    min-height: 381px;
    font-size: 16px;
    line-height: 1.5;
    color: #ffffff;
    margin: 34px 0 0;
    ${mq('small')}{
      margin: 18px 0 0;
    }
  }
  span {
    font-weight: 800;
  }
`
const Center = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`
const ImgContainer = styled.div`
  position: relative;
  width: 585px;
  margin-right: 615px;
  ${mq('small')}{ display:none }
`
const Visible = styled.div`
  width: 100%;
  height: 593px;
  position: absolute;
  overflow: hidden;
  bottom: -29px;
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
  z-index: 2;
`
const UpperImgContainer = styled.div`
  position: relative;
  width: 50vw;
  display: none;
  ${mq('small')}{ display:block }
  img {
    width: 100%;
    margin: 0;
  }
`
export default () => (
  <Easy>
    <UpperImgContainer><img src={handShake} role="presentation" alt="Handshake"/></UpperImgContainer>
    <Center>
      <TxtContainer>
        <h2>How we Make it Easier For You</h2>
        <p>
          We could tell you that we’ve been servicing Delta
          and the Lower Mainland for over 40 years. We could tell
          you that our team of survey experts, engineers and development
          consultants are highly-skilled, friendly and professional.
          We could tell you that we understand and apply the most
          current technology and equipment in our practice. We could
          tell you that we have a deep understanding of local development
          and building permit processes. But we’ll simply tell you
          that <span>we genuinely care about your project.</span><br/><br/>
          Our team is committed to providing surveying services to all related
          professionals with integrity, excellence and accuracy, and can
          be reached anytime over the phone, behind a screen or in person
          for guidance and project support.
        </p>
      </TxtContainer>
      <ImgContainer>
        <Visible>
          <div><img src={handShake} role="presentation" alt="Handshake"/></div>
        </Visible>
      </ImgContainer>
    </Center>
  </Easy>
)
