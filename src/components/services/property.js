import React from "react"
import styled from "@emotion/styled"
import pic from "../../images/services_3@3x.jpg"
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
const Property = styled.section`
  padding: 0 20px;
  font-family: metropolis, sans-serif;
  margin: 94px 0 232px;
  position: relative;
  ${mq('small')}{
    margin: 28px 0 22px;
    min-height: 761px;
  }
  h2 {
    min-height: 72px;
    font-family: astoria, sans-serif;
    font-size: 36px;
    font-weight: normal;
    line-height: 1.17;
    color: #34594c;
    margin: 0 0 -2px;
    ${mq('small')}{
      min-height: 89px;
      font-size: 36px;
      line-height: 1.17;
      margin-bottom: 5px;
      padding: 20px 0;
    }
  }
  p {
    min-height: 56px;
    font-size: 16px;
    line-height: 1.5;
    color: #172821;
    max-width: 482px;
    margin: -2px 0 22px;
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
    bottom: -117px;
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
  min-height: 508px;
  border-radius: 6px;
  box-shadow: 5px 5px 20px 0 rgba(9, 9, 9, 0.08);
  background-color: #ffffff;
  position: relative;
  padding: 0 20px;
  ${mq('small')}{
    min-height: 491px;
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
  div {
    padding: 4px 9px 0 40px;
    font-size: 16px;
    line-height: 1.5;
    color: #172821;
    max-width: 503px;
  }
  div:first-child{
    min-height: 54px;
    margin: 22px 0 0px;
  }
  div:nth-child(2){
    min-height: 75px;
    margin: 0;
  }
  div:nth-child(3){
    min-height: 30px;
    margin: 0 0 16px;
  }
  div:last-child {
    min-height: 30px;
    margin: 16px 0 43px;
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
  margin: 43px 0 0;
  ${mq('small')}{
    width: auto;
  }
`
export default () => (
  <Property>
    <Center>
      <img src={pic} alt=""/>
      <Box>
        <Content>
          <h2>Subdivisions and Legal Surveys</h2>
          <p>
            Divide and conquer. Subdivision surveys establish new land
            parcel boundaries or adjust pre-existing parcels.
          </p>
          <List>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>
              We work closely with you to understand all aspects of your project
            </div>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>
              Posting plans for resolving boundary disputes and proper
              fence construction
            </div>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>
              Comprehensive subdivision plans
            </div>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>
              Detailed plans for right of ways and easements
            </div>
          </List>
          <Button>ask us a question</Button>
        </Content>
      </Box>
    </Center>
  </Property>
)
