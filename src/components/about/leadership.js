import React from "react"
import styled from "@emotion/styled"
import { colors } from "../global.js"
import placeholder from "../../images/services_3@3x.jpg"
//font-family: metropolis, sans-serif;
//font-family: astoria, sans-serif;
const bp = {
  smaller: 300,
  small: 500,
  tablet: 768,
  medium: 850,
  large: 1200,
  regular: 1440,
  friendsFlex: 1180,
  compress: 590,
}
const mq = n => {
  const bpArray = Object.keys(bp).map(key => [key, bp[key]]);
  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (max-width: ${size}px)`];
    return acc;
  }, []);
  return result;
}

const Leadership = styled.section`
  font-family: metropolis, sans-serif;
`
const OuterContainer = styled.div`
  max-width: 1212px;
  padding:54px 10px;
  margin: auto;
  text-align:center;
  p {
    font-size: 16px;
    line-height: 1.5;   
    max-width:640px;
    width:100%;
    font-weight:300;
    color: ${colors.themeBlack};
  }
  h2{
    font-family: astoria, sans-serif;
    margin: 0 auto 14px;
    max-width:640px;
    width:100%;
    font-size: 50px;
    line-height: 60px;
    font-weight:400;
    color: ${colors.themeGreen};
  }
`
const Sub = styled.p`
  margin: 0 auto 72px;
`

const Grid = styled.div`
  display:grid;
  row-gap:59px;
  margin-bottom:190px;
  ${mq('compress')}{
    grid-template-columns:1fr;
  }
`
const LeaderGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  column-gap:80px;
`
const TeamGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap:40px;
`
const Card =styled.div`
  width:100%;
  background: #FFFFFF;
  box-shadow: -5px 6px 15px rgba(32, 62, 50, 0.05);
  border-radius: 6px;
  margin: 0 auto;

  text-align:left;
`
const LeaderCard = styled(Card)`
  max-width: 557px;
`
const TeamCard = styled(Card)`
  max-width: 373px;
`
const Content = styled.div`
  padding-bottom:25px;
  padding-left:20px;
  position:relative;
  a{
    text-decoration:none;
    color: ${colors.themeBlack};
    font-size: 16px;  
    font-weight:300;
  }
  h4,p{
    margin-bottom:18px;
  }
`
const ReadLink = styled.div`
  margin:0;
  padding:0;
  &:after{
    font-family:arial;
    content: '➔';
    font-size:16px;
    
    position: absolute;
    z-index: 3;
    padding-left:5px;
    padding-top:1px;
  }
`
const LinkA = styled(ReadLink)`
  position:absolute;
  top:-70px;
  right:30px;
`
const LinkB = styled(ReadLink)`
  position:relative;
`
export default () => (
  <Leadership>
    <OuterContainer>
      <h2>Our Leadership Team</h2>
      <Sub>Reprehenderit esse labore id veniam ut veniam non ex adipisicing</Sub>
      <LeaderGrid>
        <LeaderCard>
          <img src={placeholder} alt="John Doe"/>
          <Content>
            <h4>Position</h4>
            <h4>John Doe</h4>
            <p>Credentials | University Degree</p>
            <a href="#"><LinkA>Read more</LinkA></a>
          </Content> 
        </LeaderCard>
        <LeaderCard>
          <img src={placeholder} alt="John Doe"/>
          <Content>
            <h4>Position</h4>
            <h4>John Doe</h4>
            <p>Credentials | University Degree</p>
            <a href="#"><LinkA>Read more</LinkA></a>
          </Content> 
        </LeaderCard>
        <LeaderCard>
          <img src={placeholder} alt="John Doe"/>
          <Content>
            <h4>Position</h4>
            <h4>John Doe</h4>
            <p>Credentials | University Degree</p>
            <a href="#"><LinkA>Read more</LinkA></a>
          </Content> 
        </LeaderCard>
        <LeaderCard>
          <img src={placeholder} alt="John Doe"/>
          <Content>
            <h4>Position</h4>
            <h4>John Doe</h4>
            <p>Credentials | University Degree</p>
            <a href="#"><LinkA>Read more</LinkA></a>
          </Content> 
        </LeaderCard>
      </LeaderGrid>
      <h2>Our Technical Team</h2>
      <Sub>Reprehenderit esse labore id veniam ut veniam non ex adipisicing</Sub>
      <TeamGrid>
        <TeamCard>
          <img src={placeholder} alt="John Doe"/>
          <Content>
            <h4>Position</h4>
            <h4>John Doe</h4>
            <p>Credentials | University Degree</p>
            <a href="#"><LinkB>Read more</LinkB></a>
          </Content>
        </TeamCard>
        <TeamCard>
          <img src={placeholder} alt="John Doe"/>
          <Content>
            <h4>Position</h4>
            <h4>John Doe</h4>
            <p>Credentials | University Degree</p>
            <a href="#"><LinkB>Read more</LinkB></a>
          </Content>
        </TeamCard>
        <TeamCard>
          <img src={placeholder} alt="John Doe"/>
          <Content>
            <h4>Position</h4>
            <h4>John Doe</h4>
            <p>Credentials | University Degree</p>
            <a href="#"><LinkB>Read more</LinkB></a>
          </Content>
        </TeamCard>
        <TeamCard>
          <img src={placeholder} alt="John Doe"/>
          <Content>
            <h4>Position</h4>
            <h4>John Doe</h4>
            <p>Credentials | University Degree</p>
            <a href="#"><LinkB>Read more</LinkB></a>
          </Content>
        </TeamCard>
        <TeamCard>
          <img src={placeholder} alt="John Doe"/>
          <Content>
            <h4>Position</h4>
            <h4>John Doe</h4>
            <p>Credentials | University Degree</p>
            <a href="#"><LinkB>Read more</LinkB></a>
          </Content>
        </TeamCard>
        <TeamCard>
          <img src={placeholder} alt="John Doe"/>
          <Content>
            <h4>Position</h4>
            <h4>John Doe</h4>
            <p>Credentials | University Degree</p>
            <a href="#"><LinkB>Read more</LinkB></a>
          </Content>
        </TeamCard>
      </TeamGrid>
      <h2>Our Field Team</h2>
      <Sub>Reprehenderit esse labore id veniam ut veniam non ex adipisicing</Sub>
      <TeamGrid>
        <TeamCard>
          <img src={placeholder} alt="John Doe"/>
          <Content>
            <h4>Position</h4>
            <h4>John Doe</h4>
            <p>Credentials | University Degree</p>
            <a href="#"><LinkB>Read more</LinkB></a>
          </Content>
        </TeamCard>
        <TeamCard>
          <img src={placeholder} alt="John Doe"/>
          <Content>
            <h4>Position</h4>
            <h4>John Doe</h4>
            <p>Credentials | University Degree</p>
            <a href="#"><LinkB>Read more</LinkB></a>
          </Content>
        </TeamCard>
        <TeamCard>
          <img src={placeholder} alt="John Doe"/>
          <Content>
            <h4>Position</h4>
            <h4>John Doe</h4>
            <p>Credentials | University Degree</p>
            <a href="#"><LinkB>Read more</LinkB></a>
          </Content>
        </TeamCard>
        <TeamCard>
          <img src={placeholder} alt="John Doe"/>
          <Content>
            <h4>Position</h4>
            <h4>John Doe</h4>
            <p>Credentials | University Degree</p>
            <a href="#"><LinkB>Read more</LinkB></a>
          </Content>
        </TeamCard>
        <TeamCard>
          <img src={placeholder} alt="John Doe"/>
          <Content>
            <h4>Position</h4>
            <h4>John Doe</h4>
            <p>Credentials | University Degree</p>
            <a href="#"><LinkB>Read more</LinkB></a>
          </Content>
        </TeamCard>
      </TeamGrid>
    </OuterContainer>
  </Leadership>
)
