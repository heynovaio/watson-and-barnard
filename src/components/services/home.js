import React from "react"
import styled from "@emotion/styled"
import pic from "../../images/1055059750@3x.jpg"
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
const Home = styled.section`
  padding: 0 20px;
  font-family: metropolis, sans-serif;
  margin: 232px 0 84px;
  position: relative;
  ${mq('small')}{
    margin: 24px 0 22px;
    min-height: 760px;
  }
  h2 {
    min-height: 72px;
    font-family: astoria, sans-serif;
    font-size: 36px;
    font-weight: normal;
    line-height: 1.17;
    color: #34594c;
    margin: 0 0 28px;
    ${mq('small')}{
      min-height: 89px;
      font-size: 36px;
      line-height: 1.17;
      margin-bottom: 5px;
      padding: 20px 0;
    }
  }
  p {
    min-height: 73px;
    font-size: 16px;
    line-height: 1.5;
    color: #172821;
    max-width: 428px;
    margin: 28px 0 21px;
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
    top: -76px;
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
  min-height: 508px;
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
  padding: 39px 0 0;
  ${mq('small')}{
    padding-top: 20px;
  }
`
const List = styled.div`
  position: relative;
  div {
    padding: 4px 0 9px 40px;
    font-size: 16px;
    line-height: 1.5;
    color: #172821;
  }
  div:first-child {
    margin: 21px 0 12px;
    min-height: 30px;
  }
  div:nth-child(2){
    margin: 12px 0 12px;
    min-height: 48px;
  }
  div:last-child{
    margin: 12px 0 35px;
    min-height: 30px;
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
  margin: 35px 0 0;
  ${mq('small')}{
    width: auto;
  }
`
export default () => (
  <Home>
    <Center>
      <img src={pic} alt=""/>
      <Box>
        <Content>
          <h2>Strata Surveys and Air Space Plans</h2>
          <p>
            Precise plans for distinct projects. Strata surveys define
            the nature and location of legal boundaries of buildings
            in your unique development plan.
          </p>
          <List>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>
              We are familiar with municipal planning requirements and,
            </div>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>
              Current policies governing strata subdivisions and air space titles
            </div>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>
              Residential and commercial-scale projects
            </div>
          </List>
          <Button>ask us a question</Button>
        </Content>
      </Box>
    </Center>
  </Home>
)
