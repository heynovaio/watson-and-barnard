import React from "react"
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
const Process = styled.section`
  font-family: metropolis, sans-serif;
  background-color: #eee4cb;
  padding: 80px 0 41px;
  ${mq('small')}{ padding: 51px 20px 76px }
  h2 {
    font-size: 50px;
    line-height: 1.28;
    text-align: center;
    color: #172821;
    font-family: astoria, sans-serif;
    font-weight: 400;
    margin: 0 auto 40px;
    ${mq('small')}{
      font-size: 40px;
      line-height: 1.2;
      min-height: 48px;
      margin-bottom: 29.5px;
    }
  }
  h3 {
    font-size: 21px;
    font-weight: bold;
    line-height: 1.48;
    text-align: center;
    color: #172821;
    margin: 0 0 7px;
    ${mq('small')}{ margin-bottom: 3px }
  }
  p {
    max-width: 346px;
    min-height: 98px;
    font-size: 16px;
    line-height: 1.44;
    text-align: center;
    color: #172821;
    margin: 7px 0 0;
    ${mq('small')}{
      min-height: 81px;
      margin-top: 3px;
    }
  }
`
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0 0;
  ${mq('small')}{
    flex-direction: column;
    margin-top: 29.5px;
  }
`
const Item = styled.div`
  max-width: 384px;
  border-radius: 4px;
  box-shadow: 2px 2px 13px 0 rgba(0, 0, 0, 0.03);
  background-color: #ffffff;
  margin: 0 12px 0;
  padding: 213px 19px 0;
  ${mq('small')}{
    margin: 12.5px auto;
    padding: 174px 16px 0;
    max-width: 335px;
  }
`
const Button = styled.a`
  width: 186px;
  background-color: #172821;
  margin: 37px auto 0;
  padding: 12px 0 0;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  display: block;
  min-height: 51px;
  ${mq('small')}{
    margin: 48.5px auto 0;
  }
`
export default () => (
  <Process>
    <h2>Our Process</h2>
    <FlexContainer>
      <Item>
        <h3>Step 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          temp.
        </p>
      </Item>
      <Item>
        <h3>Step 2</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          temp.
        </p>
      </Item>
      <Item>
        <h3>Step 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          temp.
        </p>
      </Item>
    </FlexContainer>
    <Button>Button</Button>
  </Process>
)
