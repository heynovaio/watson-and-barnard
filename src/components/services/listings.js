import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { colors } from "../global.js"

import Pic1 from "./images/topographic-survey"
import Pic2 from "./images/construction-surveys"
import Pic3 from "./images/subdivisions-legal-surveys"
import Pic4 from "./images/strata-surveys"
import Pic5 from "./images/settlement-monitoring"
import Pic6 from "./images/uav-drone-surveys"
import Pic7 from "./images/laser-scanning"

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

const OuterContainer = styled.div`
  max-width: 1212px;
  padding:54px 10px;
  margin: auto;
  font-family: metropolis, sans-serif;
  p {
    font-size: 16px;
    line-height: 1.5;   
    color: ${colors.themeBlack};
  }
  h3{
    letter-spacing:0.05px;
    font-weight: 600;
    font-size: 22px;
    line-height: 132%;
    
    color: ${colors.themeBlack};
  }
  ${mq('tablet')}{
    padding: 54px 0;
  }
`
const Listings = styled.section`
  padding: 0 20px;
  
  margin: 40px 0 489px;
  position: relative;
  ${mq('tablet')}{
    margin: 24px 0 22px;
    padding: 5px;
  }
`
const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(363px, 1fr));
  row-gap:22px;
  ${mq('small')}{
    grid-template-columns:1fr;
  }
`
const ServiceCard = styled.div`
  max-width:363px;
  width:100%;
  background: #FFFFFF;
  box-shadow: -5px 6px 15px rgba(32, 62, 50, 0.05);
  border-radius: 6px;

  overflow:hidden;
  display:flex;
  flex-direction:column;
  margin: 0 auto;
  
`
const Content = styled.div`
  padding: 16px 20px 21px;
  width:100%;
  flex-grow:1;
  justify-content:space-between;
  display:flex;
  flex-direction:column;
  h3{
    margin-bottom: 11px;
  }
`
const LearnBtn = styled(Link)`
  max-width: 190px;
  width: 100%;
  background: ${colors.btnGold};
  border:none;
  border-radius: 5px;

  font-family: Metropolis;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  padding:11px 0;
  text-align:center;
  text-decoration:none;
  color: ${colors.themeBlack};
`
export default () => (
  <Listings>
    <OuterContainer>
      <Grid>
        <ServiceCard>
          <Pic1/>
          <Content>
            <h3>Topographic Survey</h3>
            <p>Understand the land. Topographic surveys provide vital information
                used in the design and approval process of land development.</p>
            <LearnBtn to='./architect/'>Learn More</LearnBtn>
          </Content>
        </ServiceCard>
        <ServiceCard>
          <Pic2/>
          <Content>
            <h3>Construction Survey</h3>
            <p>Accurate data, from start to finish. Construction surveys collect
                data to establish a preliminary survey control plan and inform on
                the accuracy of the work post-construction.</p>
            <LearnBtn to='./developer/'>Learn More</LearnBtn>
          </Content>
        </ServiceCard>
        <ServiceCard>
          <Pic3/>
          <Content>
            <h3>Subdivisions and Legal Surveys</h3>
            <p>Divide and conquer. Subdivision surveys establish new land
                parcel boundaries or adjust pre-existing parcels.</p>
            <LearnBtn to='./property/'>Learn More</LearnBtn>
          </Content>
        </ServiceCard>
        <ServiceCard>
          <Pic4/>
          <Content>
            <h3>Strata Surveys and Air Space Plans</h3>
            <p>Precise plans for distinct projects. Strata surveys define the nature and location of legal boundaries of buildings in your unique development plan.</p>
            <LearnBtn to='./home/'>Learn More</LearnBtn>
          </Content>
        </ServiceCard>
        <ServiceCard>
          <Pic5/>
          <Content>
            <h3>Settlement Monitorings</h3>
            <p>Build responsibly. Seismic monitoring is used to detect horizontal and vertical movement when working next to neighbouring strucutures.</p>
            <LearnBtn to='./settlement/'>Learn More</LearnBtn>
          </Content>
        </ServiceCard>
        <ServiceCard>
          <Pic6/>
          <Content>
            <h3>UAV Drone Surveys</h3>
            <p>Complete UAV solutions for surveying, mapping and other
                geospatial applications.</p>
            <LearnBtn to='./drone/'>Learn More</LearnBtn>
          </Content>
        </ServiceCard>
        <ServiceCard>
          <Pic7/>
          <Content>
            <h3>High Definition Laser Scanning</h3>
            <p>Achieve greater accuracy in all types of complicated environments, quickly and efficiently.</p>
            <LearnBtn to='./laser/'>Learn More</LearnBtn>
          </Content>
        </ServiceCard>
      </Grid>
    </OuterContainer>
  </Listings>
)
