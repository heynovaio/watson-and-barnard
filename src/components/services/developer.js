import React from "react"
import pic from "../../images/services_2@3x.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styled from "@emotion/styled"
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
const Developer = styled.section`
  padding: 0 20px;
  font-family: metropolis, sans-serif;
  margin: 142px 0 94px;
  position: relative;
  ${mq('small')}{
    margin: 28px 0 22px;
    min-height: 761px;
  }
  h2 {
    min-height: 91.2px;
    font-family: astoria, sans-serif;
    font-size: 36px;
    font-weight: normal;
    line-height: 1.17;
    color: #34594c;
    margin: 0 0 -21.2px;
    ${mq('small')}{
      min-height: 89px;
      font-size: 36px;
      line-height: 1.17;
      margin-bottom: 5px;
      padding: 20px 0;
    }
  }
  p {
    min-height: 98px;
    font-size: 16px;
    line-height: 1.5;
    color: #172821;
    max-width: 428px;
    margin: -21.2px 0 20px;
    ${mq('small')}{
      min-height: 97px;
      margin: 5px 0 17px;
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
    left: 0;
    top: -31px;
    max-width: 555px;
    margin: 0;
    ${mq('small')}{
      top: auto;
      bottom: 0;
      height: 350px;
      max-width: auto;
      width: 100%;
    }
  }
`
const Box = styled.div`
  max-width: 566px;
  min-height: 563px;
  border-radius: 6px;
  box-shadow: 5px 5px 20px 0 rgba(9, 9, 9, 0.08);
  background-color: #ffffff;
  position: relative;
  padding: 0 20px 26px;
  margin: 0 0 0 auto;
  ${mq('small')}{
    min-height: 491px;
  }
`
const Content = styled.div`
  max-width: 494px;
  margin-left: auto;
  padding: 47px 0 0;
  ${mq('small')}{
    padding-top: 20px;
  }
`
const List = styled.div`
  position: relative;
  div {
    max-width: 503px;
    padding: 4px 9px 0 40px;
    font-size: 16px;
    line-height: 1.5;
  }
  div:first-child {
    margin: 20px 0 1.3px;
    min-height: 42.5px;
  }
  div:nth-child(2){
    margin: 1.3px 0 0;
    min-height: 68.1px;
  }
  div:nth-child(3){
    margin: 0 0 8.3px;
    min-height: 42.5px;
  }
  div:last-child{
    margin: 8.3px 0 21.8px;
    min-height: 42.5px;
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
  margin: 21.8px 0 0;
  ${mq('small')}{
    width: auto;
  }
`
export default () => (
  <Developer>
    <Center>
      <img src={pic} alt=""/>
      <Box>
        <Content>
          <h2>Construction Surveys</h2>
          <p>
            Accurate data, from start to finish. Construction surveys collect
            data to establish a preliminary survey control plan and inform on
            the accuracy of the work post-construction.
          </p>
          <List>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>
              Guaranteed timely turnarounds for standard layouts.
            </div>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>
              Our cutting edge technology is suitable for single-family lots
              to multi-hundred hectare properties
            </div>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>
              Excavation offsets and foundation layouts
            </div>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>
              As-built surveys to complete municipal form inspections
            </div>
          </List>
          <Button>ask us a question</Button>
        </Content>
      </Box>
    </Center>
  </Developer>
)
