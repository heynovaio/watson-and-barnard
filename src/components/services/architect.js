import React from "react"
import styled from "@emotion/styled"
import pic from "../../images/services_1@3x.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
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
const Architect = styled.section`
  padding: 0 20px;
  font-family: metropolis, sans-serif;
  margin: 82px 0 142px;
  position: relative;
  ${mq('small')}{
    margin-bottom: 24px;
    min-height: 756px;
  }
  h2 {
    min-height: 72px;
    font-family: astoria, sans-serif;
    font-size: 36px;
    font-weight: normal;
    line-height: 1.17;
    letter-spacing: normal;
    color: #34594c;
    margin: 0 0 -2px;
    ${mq('small')}{
      min-height: 88px;
      font-size: 40px;
      line-height: 1.1;
      margin: 0 0 6px;
    }
  }
  p {
    min-height: 98px;
    font-size: 16px;
    line-height: 1.5;
    color: #172821;
    max-width: 428px;
    margin: -2px 0 -4px;
    ${mq('small')}{
      min-height: 97px;
      margin: 6px 0 18px;
    }
  }
`
const Center = styled.div`
  max-width: 1200px;
  margin: auto;
  position: relative;
  padding: 0;
  ${mq('small')}{position: static}
  img {
    position: absolute;
    right: 0;
    bottom: -63px;
    max-width: 555px;
    margin: 0;
    ${mq('small')}{
      bottom: 0;
      height: 350px;
      max-width: auto;
      width: 100%;
    }
  }
`
const Box = styled.div`
  max-width: 566px;
  min-height: 572px;
  border-radius: 6px;
  box-shadow: 5px 5px 20px 0 rgba(9, 9, 9, 0.08);
  background-color: #ffffff;
  position: relative;
  padding: 0 20px 26px;
  ${mq('small')}{
    min-height: 486px;
  }
`
const Content = styled.div`
  max-width: 494px;
  margin-left: auto;
  padding: 39px 0 0;
  ${mq('small')}{
    padding-top: 20px;
  }
`
const List = styled.div`
  position: relative;
  line-height: 1.5;
  font-size: 16px;
  div:first-child {
    max-width: 479px;
    min-height: 84px;
    padding:4px 9px 8px 40px;
    margin: -4px 0 -3px;
  }
  div:nth-child(2){
    max-width: 503px;
    min-height: 53px;
    padding: 4px 9px 1px 40px;
    margin: -3px 0 8px;
  }
  div:nth-child(3){
    max-width:503px;
    min-height: 47px;
    padding: 4px 9px 0px 40px;
    margin: 8px 0 19px;
  }
  div:last-child{
    max-width: 503px;
    min-height: 30px;
    padding: 4px 9px 2px 40px;
    margin: 19px 0 37px;
  }
  .mark {
    position: absolute;
    left: 0;
    max-width: 24px;
  }
`
const Button = styled.a`
  display: block;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.4px;
  text-align: center;
  color: #ffffff;
  width: 248px;
  background-color: #172821;
  padding: 14px 0 0;
  height: 54px;
  margin: 37px 0 0;
  ${mq('small')}{
    width: auto;
  }
`
export default () => (
  <Architect>
    <Center>
      <img src={pic} alt=""/>
      <Box>
        <Content>
          <h2>Topographic Survey</h2>
          <p>
            Understand the land. Topographic surveys provide vital information
            used in the design and approval process of land development.
          </p>
          <List>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>
              We use Leica survey equipment in conjunction with
              MicroSurvey and AutoDesk drafting software to provide
              accurate measurements
            </div>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>
              Determine elevation contours, the location of natural and
              man-made land attributes, and legal boundaries
            </div>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>
              A crucial tool when presenting plans to a buyer or
              municipal approving authorities
            </div>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>
              What charges are impacting the land?
            </div>
          </List>
          <Button>ask us a question</Button>
        </Content>
      </Box>
    </Center>
  </Architect>
)
