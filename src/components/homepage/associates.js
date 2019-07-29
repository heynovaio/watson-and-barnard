import React from "react"
import styled from "@emotion/styled"
import archLogo from "../../images/architect.svg"
import homeLogo from "../../images/house-icon.svg"
import helmetLogo from "../../images/construction.svg"
import fenceLogo from "../../images/shape.svg"
const bp = {
  smaller: 300,
  small: 500,
  tablet: 768,
  medium: 1024,
  large: 1200,
  regular: 1440,
  flex: 728,
};
const mq = n => {
  const bpArray = Object.keys(bp).map(key => [key, bp[key]]);
  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (max-width: ${size}px)`];
    return acc;
  }, []);
  return result;
};
const Associates = styled.section`
  background-color: #f6f7fa;
  padding: 95px 0 53px;
  font-family: metropolis, sans-serif;
  text-align: center;
  ${mq('small')}{ padding: 83px 0 62px }
  h2 {
    font-size: 50px;
    line-height: 1.28;
    color: #34594c;
    min-height: 64px;
    font-family: astoria, sans-serif;
    font-weight: 400;
    ${mq('small')}{
      font-size: 40px;
      line-height: 1.2;
      min-height: 48px;
    }
  }
  h3 {
    font-size: 21px;
    font-weight: bold;
    line-height: 1.48;
    color: #172821;
    min-height: 31px;
    margin: 0 0 8px;
  }
  p {
    min-height: 102px;
    font-size: 16px;
    line-height: 1.44;
    color: #172821;
    margin: 0;
  }
`
const OuterFlex = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  margin: 30px 0 41px;
  font-family: metropolis, sans-serif;
  ${mq('flex')}{
    flex-wrap: wrap;
    margin: 25px 0 38px;
  }
`
const InnerFlex = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  ${mq('small')}{ flex-flow: column wrap }
`
const Container = styled.div`
  max-width: 285px;
  min-width: 167px;
  border-radius: 4px;
  box-shadow: 2px 2px 13px 0 rgba(0, 0, 0, 0.03);
  background-color: #ffffff;
  margin: 10px; /*revisit*/
  padding: 0 14px;
  ${mq('small')}{
    max-width: 334px;
    margin: 13px 20px;
  }
`
const ArchitectImg = styled.img`
  width:134px;
  margin: 54px auto 52px;
  display: block;
`
const HouseImg = styled.img`
  width:127px;
  margin: 35px auto 40px;
  display: block;
`
const HelmetImg = styled.img`
  width:139px;
  margin: 62px auto 59px;
  display: block;
`
const FenceImg = styled.img`
  width: 139px;
  margin: 70px auto 56px;
  display: block;
`
const Button = styled.a`
  width: 200px;
  height: 62px;
  display: block;
  background-color: #172821;
  padding: 17px 0 0;
  margin: auto;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
`
export default () => (
  <Associates>
    <h2>We Work With</h2>
    <OuterFlex>
      <InnerFlex>
        <Container>
          <ArchitectImg src={archLogo}/>
          <h3>Architects</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod temp.
          </p>
        </Container>
        <Container>
          <HouseImg src={homeLogo}/>
          <h3>Home Owners</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod temp.
          </p>
        </Container>
      </InnerFlex>
      <InnerFlex>
        <Container>
          <HelmetImg src={helmetLogo}/>
          <h3>Developers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod temp.
          </p>
        </Container>
        <Container>
          <FenceImg src={fenceLogo}/>
          <h3>Property Owners</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod temp.
          </p>
        </Container>
      </InnerFlex>
    </OuterFlex>
    <Button>View Services</Button>
  </Associates>
)
