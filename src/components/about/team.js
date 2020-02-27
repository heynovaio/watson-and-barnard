import React from "react"
import styled from "@emotion/styled"
import helmetGeek from "../../images/about-icon.svg"
//font-family: metropolis, sans-serif;
//font-family: astoria, sans-serif;
const Team = styled.section`
  padding: 85px 20px 95px;
  font-family: metropolis, sans-serif;
  p {
    font-size: 20px;
    line-height: 1.35;
    color: #172821;
    margin: 0;
    padding-bottom: 30px;
  }
  span {
    font-size: 36px;
    letter-spacing: 0.14px;
    font-family: astoria, sans-serif;
    font-weight: 500;
    line-height: 1.35px;
  }
  img {
    position: absolute;
    top: 75px;
    left: 0;
    width: 457px;
  }
`
const OuterContainer = styled.div`
  max-width: 1206px;
  margin: auto;
`
const InnerContainer = styled.div`
  max-width: 1198px;
  margin: 0 0 0 auto;
  position: relative;
`
const Box = styled.div`
  max-width: 652px;
  padding: 78px 42px 45px;
  margin: 0 0 0 auto;
  border-radius: 4px;
  box-shadow: 2px 5px 16px 0 rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
  position: relative;
`
export default () => (
  <Team>
    <OuterContainer>
      <InnerContainer>
        <img src={helmetGeek} alt='helmet'/>
        <Box>
          <p>
            <span>Our team</span> of skilled survey experts, engineers and development
            consultants are by your side, from field to finish, and at the
            helm of the industry’s latest technology, will provide you with
            the most precise and comprehensive geomatics.<br/><br/>We are committed
            to providing surveying services to all related professionals with
            integrity, excellence and accuracy, and can be reached anytime
            over the phone, behind a screen or in person for guidance and
            project support.
          </p>
        </Box>
      </InnerContainer>
    </OuterContainer>
  </Team>
)
