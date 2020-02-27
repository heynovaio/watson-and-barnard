import React from "react"
import Pic from "./images/construction-surveys"
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
  margin: 82px 0;
  position: relative;
  ${mq('tablet')}{
    margin: 28px 0 22px;
    min-height: 761px;
  }
  h2 {
    font-family: astoria, sans-serif;
    font-size: 36px;
    font-weight: normal;
    line-height: 1.17;
    letter-spacing: normal;
    color: #34594c;
    margin-bottom: 0;
    padding-bottom: 10px;
    ${mq('tablet')}{
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
    margin: 0 0 20px;
    ${mq('tablet')}{
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
  ${mq('tablet')}{position: static; display: block;}
  img {
    position: absolute;
    left: 0;
    top: -31px;
    max-width: 555px;
    margin: 0;
    ${mq('tablet')}{
      top: auto;
      bottom: 0;
      max-width: auto;
      width: 100%;
    }
  }
`
const Box = styled.div`
  max-width: 566px;
  border-radius: 6px;
  box-shadow: 5px 5px 20px 0 rgba(9, 9, 9, 0.08);
  background-color: #ffffff;
  position: relative;
  padding: 35px;
  margin: 0 0 0 auto;
  ${mq('tablet')}{
    min-height: 491px;
  }
`
const Content = styled.div`
  max-width: 494px;
  margin-left: 0;
  ${mq('small')}{
    padding-top: 20px;
  }
`
const List = styled.div`
  position: relative;
  line-height: 1.5;
  font-size: 16px;
  > div{
    max-width: 479px;
    padding:4px 9px 12px 40px;
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
  margin: 20px 0 0;
  text-decoration: none;
  transition: all .25s;
  &:hover {
    background: #396859;
  }
  ${mq('small')}{
    width: auto;
  }
`
const ImgContainer = styled.div`
  max-width: 550px;
  width: 100%;
  position: absolute;
  left: 0;
  top: -40px;
  ${mq('tablet')}{
    bottom: 0;
    top: auto;
  }
`
export default () => (
  <Developer>
    <Center>
      <ImgContainer>
        <Pic/>
      </ImgContainer>
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
          <Button href="/contact">Learn More</Button>
        </Content>
      </Box>
    </Center>
  </Developer>
)
