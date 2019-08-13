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
  margin: 271px 0 84px;
  position: relative;
  ${mq('small')}{
    margin: 28px 0 22px;
    min-height: 761px;
  }
  h2 {
    min-height: 52px;
    font-family: astoria, sans-serif;
    font-size: 50px;
    font-weight: normal;
    line-height: 1.04;
    letter-spacing: normal;
    color: #34594c;
    margin: 0 0 15px;
    ${mq('small')}{
      min-height: 89px;
      font-size: 36px;
      line-height: 1.17;
      margin-bottom: 5px;
      padding: 20px 0;
    }
  }
  p {
    min-height: 78px;
    font-size: 16px;
    line-height: 1.5;
    color: #172821;
    max-width: 482px;
    margin: 15px 0 15px;
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
    top: -96px;
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
  max-width: 464px;
  margin: auto;
  padding: 47px 0 0;
  ${mq('small')}{
    padding-top: 20px;
  }
`
const List = styled.div`
  position: relative;
  margin: 15px 0 39px;
  div {
    padding: 4px 0 0 40px;
    min-height: 30px;
    margin: 8px 0;
    font-size: 16px;
    line-height: 1.5;
    color: #172821;
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
  width: 206px;
  background-color: #172821;
  padding: 14px 0 0;
  height: 54px;
  margin: 39px 0 0;
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
          <h2>Developers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing edivt, sed do eiusmod
            tempor incididunt ut labore et dolore magna adivqua.
          </p>
          <List>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>Lorem ipsum dolor sit amet</div>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>Lorem ipsum dolor sit amet</div>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>Lorem ipsum dolor sit amet</div>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>Lorem ipsum dolor sit amet</div>
          </List>
          <Button>ask us a question</Button>
        </Content>
      </Box>
    </Center>
  </Developer>
)