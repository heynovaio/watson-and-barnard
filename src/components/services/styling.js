import styled from "@emotion/styled";
import { colors } from "../global.js"
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

export const Wrapper = styled.div`
  h2{
    min-height: 64px;
    font-size: 50px;
    line-height: 1.28;
    color: ${colors.themeGreen};
    font-family: astoria,sans-serif;
    font-weight:400;
  }
  h3{
    font-family: Metropolis;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 132%;
    letter-spacing: 0.05px;
  }
  p{
    font-family: Metropolis;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
  }
`

export const OuterContainer = styled.div`
  max-width:1220px;
  width:100%;
  margin: 0 auto;
  display:block;
  padding: 0 10px;
`

export const Hero = styled.section`
  position: relative;
  font-family: metropolis, sans-serif;

`
export const Green = styled.div`
  border-radius: 0 0  0 6px;
  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.07);
  background-image: linear-gradient(to bottom, #4e8672, #386656);
  position: absolute;
  left: 39px;
  top: 0;
  bottom: 0;
  right: 0;
  ${mq('regular')}{ margin-right: 0 }
  ${mq('tablet')}{
    max-width: 100%;
    min-height: 258px;
    font-size: 20px;
    line-height: 1.4;
    color: #ffffff;
    left: 0;
    text-align: center;
  }
`
export const Content = styled.div`
  position: relative;
  padding: 250px 0 20px;
  min-height: 639px;
  text-align:center;
  ${mq('tablet')}{
    padding: 194px 20px 40px;
    min-height: 520px;
  }
  h1 {
    font-family: astoria, sans-serif;
    font-size: 100px;
    font-weight: 500;
    line-height: 0.53;
    letter-spacing: 0.4px;
    text-align: center;
    color: #eee4cb;
    height: 53px;
    margin: 0 auto 40px;
    ${mq('tablet')}{
      font-family: metropolis, sans-serif;
      font-size: 44px;
      font-weight: 600;
      line-height: 1.09;
      letter-spacing: -0.5px;
      margin-bottom: 0;
    }
  }
  p {
    font-family: metropolis, sans-serif;
    font-size: 22px;
    line-height: 1.45;
    text-align: center;
    color: #ffffff;
    max-width: 533px;
    width:100%;
    margin: 40px auto 0;
    min-height: 96px;
    ${mq('tablet')}{
      max-width: 304px;
      min-height: 258px;
      font-size: 20px;
      line-height: 1.4;
      color: #ffffff;
      padding-top:20px;
    }
  }
  a{
    text-decoration:none;
    
  }
  h4,a{
    color:white;
  }
  h4{
    font-family: Metropolis;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    margin-bottom:60px;
  }
  span{
    color:${colors.lightGold};
  }
`
export const Overview = styled.section`
  padding:105px 0;
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
  div{
    max-width: 683px;
    width:100%;
    flex:1 300px;
  }
  ${mq('tablet')}{
    justify-content:center;
  }
  
`

export const Details = styled.section`
  position:relative;
`
export const InnerContainer = styled.div`
  max-width:1220px;
  width:100%;
  padding: 0 10px;
  margin:0 auto;
  display:flex;
  justify-content:space-between;
  flex-wrap: wrap-reverse;
  color: white;
  ul{
    padding:65px 0;
    margin: auto 0;
    max-width:464px;
    width:100%;
    list-style-type:none;
    flex: 1 300px;
  }
  li{
    
    margin-bottom: 40px;
  }
  h3{
    margin-bottom:20px;
  }
  p{
    margin-bottom:0;
  }
  div{
    max-width:617px;
    width:100%;
    margin: auto 0;
    border-radius:5px;
    overflow:hidden;
    flex: 1 450px;
  }
  ${mq('tablet')}{
    justify-content:center;
    ul{
      padding: 35px 0 85px;
    }
    li{
      margin
    }
  }
`
export const Blue = styled.div`
  background-color: ${colors.themeBlue};
  position: absolute;
  left: 0;
  top: 50px;
  bottom: 50px;
  right: 0;
  z-index:-1;
  
`
export const Applications = styled.section`
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  padding:163px 0 129px;
  ul{
    display:grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-auto-flow: column;
    list-style-type: none; 
    column-gap: 20px;
    justify-content:space-between;
    width:45%;
    margin: auto 0;
  }
  li{
    font-family: Metropolis;
    font-weight: 600;
    font-size: 22px;
    line-height: 132%;
    letter-spacing: 0.05px;
    color:${colors.themeBlack};
    margin: 0 auto;
    padding:0 0 29px;
  }
  h2{
    margin-bottom:20px;
  }
  p{
    margin-bottom:40px;
  }
  ${mq('tablet')}{
    justify-content:center;
    ul{
      padding-top:60px;
      width:100%;
      justify-content:space-evenly;
    }
    li{
      margin:0;
    }
  }

`
export const Copy = styled.div`
  max-width:480px;
  width:100%;
  p{
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    
  }
`
export const CTA = styled.button`
  background: ${colors.btnGold};
  border:none;
  border-radius: 5px;

  font-family: Metropolis;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  padding:11px 15px;
  text-align:center;
  text-decoration:none;
  color: ${colors.themeBlack};
`

export const Projects = styled.section`
  text-align:center;
  padding-bottom:200px;
`
export const CardRow = styled.div`
  display:flex;
  flex-wrap:wrap;
  row-gap:20px;
  margin-top:70px;
  div{
    max-width:369px;
    width:100%;
    background: #FFFFFF;
    box-shadow: -5px 6px 15px rgba(32, 62, 50, 0.05);
    border-radius: 6px;

    overflow:hidden;
    display:flex;
    flex-direction:column;
    margin: 0 auto;
    padding-bottom: 50px;
  }
  div:nth-child(2){
    transform:translateY(45px);
    ${mq('large')}{
      transform:translateY(0);
    }
  }
  h3,p{
    text-align:left;
    padding-left: 10px;
  }
  h3{
    padding:30px 0 15px 10px;
    margin-bottom:0;
  }
`