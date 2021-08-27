import React from "react"
import styled from "@emotion/styled"
import placeholder from "../../images/hand.jpg"
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
  
`
const OuterContainer = styled.div`
  max-width: 1206px;
  margin: auto;
`
const InnerContainer = styled.div`
  max-width: 1198px;
  margin: 0 0 0 auto;
  position: relative;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
  gap:10%;
  img{
    max-width: 476px;
    width:100%;
  }
`
const Box = styled.div`
  max-width: 502px;
  width:100%;
  padding: 78px 0 45px;
  position: relative;
  flex:1 400px;
`
export default () => (
  <Team>
    <OuterContainer>
      <InnerContainer>
        <img src={placeholder} alt='placeholder' role="presentation"/>
        <Box>
          <p>
            Our team of skilled survey experts, engineers and development
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
