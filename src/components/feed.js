import React from "react"
import styled from "@emotion/styled"
import survey from "../images/survey.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const bp = {
  smaller: 300,
  small: 680,
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
const Feed = styled.section`
  font-family: metropolis, sans-serif;
  background-color: #f6f7fa;
  h2 {
    min-height: 64px;
    font-size: 50px;
    line-height: 1.28;
    color: #eee4cb;
    font-family: astoria, sans-serif;
    font-weight: 400;
    margin: 0 0 4px;
    ${mq('small')}{
      text-align: center;
      min-height: 48px;
      font-size: 40px;
      line-height: 1.2;
    }
  }
  h3 {
    min-height: 31px;
    font-weight: 600;
    line-height: 1.48;
    color: #ffffff;
    margin: 4px 0 14px;
    ${mq('small')}{
      font-size: 21px;
      min-height: 31px;
      margin-top: 36px;
    }
  }
  p {
    max-width: 347px;
    min-height: 103px;
    font-size: 18px;
    line-height: 1.33;
    color: #ffffff;
    margin: 14px 0 34px;
    ${mq('small')}{ margin-bottom: 37px }
  }
`
const Half = styled.div`
  max-width: 50%;
  position: relative;
  ${mq('regular')}{ max-width: 965px}
`
const GreenBox = styled.div`
  margin: 0 -244px -52px 0;
  padding: 0 20px 20px 0;
  background-color: #34594c;
  background-color: #34594c;
  min-height: 600px;
  ${mq('regular')}{ margin-right: 0 }
  ${mq('small')}{ min-height: 948px }
`
const Center = styled.div`
  max-width: 846px;
  margin: 0 0 0 auto;
  padding: 0 0 0 20px;
`
const Width = styled.div`
  max-width: 776px;
  position: relative;
`
const TextContainer = styled.div`
  padding-top:83px;
  margin-right: 380px;
  ${mq('small')}{
    padding-top: 43px;
    margin-right: 0;
  }
`
const Address = styled.div`
  margin: 34px 0 0;
  position: relative;
  max-width: 335px;
  img {
    display: none;
    width: 93px;
    position: absolute;
    top: 0;
    right: 0;
    ${mq('small')}{ display: block }
  }
`
const AddressItem = styled.div`
  height: 24px;
  font-size: 16px;
  line-height: 1.5;
  color: #ffffff;
  padding-left: 40px;
  position: relative;
  margin: 23px 0;
  svg {
    position: absolute;
    max-width: 22px;
    max-height: 22px;
    left: 5px;
    text-align: center;
    color: #eee4cb;
  }
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #d3c190;
    }
  }
`
const FormStyle = styled.form`
  width: 360px;
  position: absolute;
  right: 0;
  top: 86px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  ${mq('small')}{
    position: relative;
    width: auto;
    top: 0;
    margin-top: 58px;
  }
  input[type=email],
  input[type=text] {
    width: 100%;
    height: 40px;
    margin: 7px 0 20px;
    border-style: none;
    border-radius: 2px;
    display: block;
  }
  select {
    width: 100%;
    height: 40px;
    margin: 7px 0 20px;
    display: block;
    background-color: white;
    border-radius: 2px;
    border-style: none;
  }
  textarea {
    width: 100%;
    height: 96px;
    border-style: none;
    border-radius: 2px;
    display: block;
    margin: 7px 0 16px;
  }
  input[type=submit] {
    margin: 16px 0 0;
    width: 100%;
    height: 51px;
    background-color: #d3c190;
    color: black;
    border-style: none;
    font-size: 20px;
    display: block;
    font-weight: 600;
  }
`
const Form = () => (
  <FormStyle action="https://formspree.io/contact@wbsurveys.ca" method="POST">
    <div>
      <label for="email">
        Email Address
      </label>
      <input name="email" type="email" id="email" />
    </div>
    <div>
      <label for="name">
        Name
      </label>
      <input id="name" name="name" type="text"/>
    </div>
    <div>
      <label for="message">
        Write us a message
      </label>
      <textarea id="message" name="message"></textarea>
    </div>
    <input type="submit" value="submit" />

  </FormStyle>
)
const ImgContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  position: relative;
  img {
    position: absolute;
    right: 0;
    top: 61px;
  }
`
const MapStyle = styled.div`
  width: 100%;
  height: 432px;
  overflow: hidden;
  iframe {
    border: none;
    height: 100%;
  }
`
export default () => (
  <Feed>
    <ImgContainer><img src={survey} alt=""/></ImgContainer>
    <Half>
      <GreenBox>
        <Center>
          <Width>
            <TextContainer>
              <h2>Contact us</h2>
              <h3>We'd love to hear from you</h3>
              <p>
                Contact us to learn more about our services, get expert
                advice or to request a quote.
              </p>
              <Address>
                <AddressItem>
                  1524 56 St, Delta, BC
                  <FontAwesomeIcon class="icon" icon={faMapMarkerAlt}/>
                </AddressItem>
                <AddressItem>
                  <a href="tel:604.943.9433">
                    604-943-9433
                  </a>
                  <FontAwesomeIcon class="icon" icon={faPhoneAlt}/>
                </AddressItem>
                <AddressItem>
                  <a href="mailto:contact@wbsurveys.ca">
                    contact@wbsurveys.ca
                  </a>
                  <FontAwesomeIcon class="icon" icon={faEnvelope}/>
                </AddressItem>
                <img src={survey} alt=""/>
              </Address>
            </TextContainer>
            <Form/>
          </Width>
        </Center>
      </GreenBox>
    </Half>
    <MapStyle>
      <iframe title="Google Map" src="https://snazzymaps.com/embed/188647" width="100%"></iframe>
    </MapStyle>

  </Feed>
)
