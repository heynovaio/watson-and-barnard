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
const Settlement = styled.section`
  padding: 0 20px;
  font-family: metropolis, sans-serif;
  margin: 84px 0 266px;
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
    letter-spacing: normal;
    color: #34594c;
    margin: 0 0 -12px;
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
    margin: -12px 0 21px;
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
    bottom: -124px;
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
  }
  div:first-child{
    margin: 21px 0 6px;
    min-height: 56px;
  }
  div:nth-child(2){
    min-height: 58px;
    margin: 6px 0 9px;
  }
  div:last-child{
    margin: 9px 0 23px;
    min-height: 55px;
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
  margin: 23px 0 0;
  ${mq('small')}{
    width: auto;
  }
`
export default () => (
  <Settlement>
    <Center>
      <img src={pic} alt=""/>
      <Box>
        <Content>
          <h2>Settlement Monitoring</h2>
          <p>
            Build responsibly. Seismic monitoring is used to detect
            horizontal and vertical movement when working next to
            neighbouring structures.
          </p>
          <List>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>
              Our state-of-the-art equipment performs based on your
              unique project requirements.
            </div>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>
              Minimizing the risk of claims and upset neighbours with
              vibration and sound monitoring.
            </div>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>
              Geotechnical engineer consult to establish a thorough
              control plan
            </div>
          </List>
          <Button>ask us a question</Button>
        </Content>
      </Box>
    </Center>
  </Settlement>
)
