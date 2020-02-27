import React from "react"
import styled from "@emotion/styled"
import Pic from "./images/settlement-monitoring"
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
const Laser = styled.section`
  padding: 0 20px;
  font-family: metropolis, sans-serif;
  margin: 82px 0 182px;
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
      font-size: 36px;
      line-height: 1.17;
      margin-bottom: 5px;
      padding: 20px 0;
    }
  }
  p {
    font-size: 16px;
    line-height: 1.5;
    color: #172821;
    max-width: 428px;
    margin: 0 0 20px;
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
    right: 0;
    bottom: -124px;
    max-width: 555px;
    margin: 0;
    ${mq('tablet')}{
      bottom: 0;
      height: 350px;
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
  ${mq('tablet')}{
    width: auto;
  }
`
const ImgContainer = styled.div`
  max-width: 550px;
  width: 100%;
  position: absolute;
  right: 0;
  top: 40px;
  ${mq('tablet')}{
    bottom: 0;
    top: auto;
  }
`
export default () => (
  <Laser>
    <Center>
      <ImgContainer>
        <Pic/>
      </ImgContainer>
      <Box>
        <Content>
          <h2>High Definition Laser Scanning</h2>
          <p>
            Achieve greater accuracy in all types of complicated environments, quickly and efficiently.
          </p>
          <List>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>
              Our industry-leading laser scanning equipment generates precise 3D models.
            </div>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>
              Used for creating accurate measurements of complicated environments or those with limited access such as heritage sites.
            </div>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>
              Creates highly accurate three-dimensional images for use in many digital formats for Architects and Engineers.
            </div>
            <div><FontAwesomeIcon class="mark" icon={faCheckCircle}/>
              Performs traditional land surveying services more quickly and accurately
            </div>
          </List>
          <Button href="/contact">Learn More</Button>
        </Content>
      </Box>
    </Center>
  </Laser>
)
