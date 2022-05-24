import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import arrow from "../images/bitmap@3x.png";
import {PopupButton} from 'react-calendly'

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
const Header = styled.header`
  position: absolute;
  z-index: 3;
  width: 100%;
  font-family: metropolis, sans-serif;
`
const ArrowLogo = styled.img`
  position: absolute;
  max-width: 48px;
  top: 20px;
  left: 15px;
  ${mq('medium')}{
    width: 28.9px;
    top: 26px;
    left: 21px;
  }
`
/*Making title logo section*/
const Title = () => (
  <Link to="/">
    <TitleStyle>
      <div>W</div><div>atson</div>
      <div>and</div>
      <div>B</div><div>arnard</div>
    </TitleStyle>
  </Link>
)
const TitleStyle = styled.a`
  font-family: astoria, sans-serif;
  position: absolute;
  top: -10px;
  div {
    color: #ffffff;
    position: absolute;
    text-align: center;
  }
  div:first-child{ /*W*/
    width: 48px;
    height: 81px;
    font-size: 37.8px;
    line-height: 0.71;
    letter-spacing: -1.62px;
    top: 43.9px;
    left: 90px;
    ${mq('medium')}{
      top: 40.9px;
      left: 60px;
    }
  }
  div:nth-child(2){ /*atson*/
    width: 78px;
    height: 27px;
    font-size: 34.5px;
    line-height: 0.78;
    letter-spacing: -1.06px;
    color: #ffffff;
    top:44px;
    left: 133px;
    ${mq('medium')}{
      top:41px;
      left: 103px;
    }
  }
  div:nth-child(3){ /*and*/
    width: 30px;
    height: 27px;
    font-size: 19.2px;
    line-height: 1.41;
    letter-spacing: -0.92px;
    color: #ffffff;
    top:70px;
    left: 150.1px;
    ${mq('medium')}{
      top:64.9px;
      left: 120.1px;
    }
  }
  div:nth-child(4){ /*B*/
    width: 48px;
    height: 27px;
    font-size: 37.8px;
    line-height: 0.71;
    letter-spacing: -1.62px;
    color: #ffffff;
    top: 90.9px;
    left: 106px;
    ${mq('medium')}{
      top:87.9px;
      left: 76px;
    }
  }
  div:last-child{ /*arnard*/
    width: 95px;
    height: 27px;
    font-size: 34.5px;
    line-height: 0.78;
    letter-spacing: -0.87px;
    color: #ffffff;
    top: 90.4px;
    left: 141.7px;
    ${mq('medium')}{
      top: 87.4px;
      left: 111.7px;
    }
  }
`
/*End of title logo section*/

/*Acts as Center for desktop*/
const MenuContainerOuter = styled.div`
  max-width: 1440px;
  margin: auto;
`
/*Acts as Width for desktop*/
const MenuContainerInner = styled.div`
  max-width: 724px;
  margin: 0 auto;
  position: relative;
  ${mq('large')}{
    width: 100%;
  }
  ${mq('medium')}{
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(23, 40, 33, 1);
    width: 100%;
    margin: 0;
  }
`
const Menu = styled.nav`
  width: 100%;
  position: absolute;
  overflow: hidden;
  padding-top: 40px;
  ${mq('medium')} {
    width: auto;
    max-height: 330px;
    margin: 122px auto 61px;
    position: relative;
    padding: 0;
  }
  div {
    text-align: center;
    width: 25%;
    margin-bottom: 8px;
    ${mq('medium')}{
      width: 100%;
      height: 20%;
      padding: 19px;
    }
    a {
      color: #ffffff;
      text-align: center;
      font-family: metropolis, sans-serif;
      font-weight: 600;
      font-size: 16px;
      text-decoration: none;
      ${mq('medium')}{
        color: white;
        font-size: 26px;
        line-height: 2.54px;
        letter-spacing: -0.3px;
      }
      &:hover {
        color: #d3c190;
      }
    }
  }
  div:first-child {
    display: none;
    ${mq('medium')}{ display: block }
  }
  div:nth-child(2) {
    display: inline-block;
    ${mq('medium')}{ display: block }
  }
  div:nth-child(3) {
    display: inline-block;
    ${mq('medium')}{ display: block }
  }
  div:nth-child(4) {
    display: inline-block;
    ${mq('medium')}{ display: block }
  }
  div:nth-child(5){
    display:inline-block;
    ${mq('medium')}{ display: block }
  }
`
const Exit = () => (
  <ExitStyle onClick={hideDrop}>
    <div/><div/>
  </ExitStyle>
)
const ExitStyle = styled.div`
  display: none;
  ${mq('medium')}{display: block}
  div {
    position: absolute;
    top: 50px;
    right: 30px;
    width: 42px;
    height: 4px;
    background-color: #ffffff;
  }
  div:first-child { transform: rotate(44deg) }
  div:last-child { transform: rotate(-44deg) }
`
const showDrop = () => {
  document.getElementById("drop").style.display = "block";
  document.getElementById("open").style.display = "none";
}
const hideDrop = () => {
  document.getElementById("drop").style.display = "none";
  document.getElementById("open").style.display = "block";
}
const Hamburger = () => (
  <HamburgerStyle id="open" onClick={showDrop}>
    <div/><div/><div/>
  </HamburgerStyle>
)
const HamburgerStyle = styled.div`
  width: 60px;
  height: 60px;
  position: fixed;
  top: 28px;
  right: 20px;
  background: #ede4cb;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 5px 2px 14px 0 rgba(23, 40, 33, 0.52);
  display: none;
  ${mq('medium')}{display: block}
  div {
    position: absolute;
    background-color: #172821;
  }
  div:first-child {
    width: 40px;
    height: 5px;
    top: 17px;
  }
  div:nth-child(2) {
    width: 40px;
    height: 5px;
    top: 27px;
  }
  div:last-child {
    width: 40px;
    height: 5px;
    top: 37px;
  }
`
const ContactStyle = styled.div`
  width: 205px;
  margin: 0 auto;
  position: relative;
  display: none;
  ${mq('medium')}{display: block}
  a {
    display: block;
    text-decoration: none;
    width: 74px;
    height: 74px;
    border-radius: 50%;
    box-shadow: 0 2px 20px 0 rgba(97, 97, 97, 0.2);
    background-color: #ffffff;
    text-align: center;
    padding-top: 21px;
    color: #d3c190;
    display: inline-block;
    margin: 0 10px;
    font-size: 30px;
  }
  svg {
    width: 30px;
    display: block;
    margin: auto;
  }
  div:first-child { left: 0 }
  div:last-child { right: 0 }
`
const Contact = () => (
  <ContactStyle>
    <a href="tel:604-943-9433"><FontAwesomeIcon className="icon" icon={faPhoneAlt}/></a>
    <a href="mailto:contact@wbsurveys.ca"><FontAwesomeIcon className="icon" icon={faEnvelope}/></a>
  </ContactStyle>
)
const VerticalContainer = styled.div`
  top: 275px;
  left: 0;
  position: absolute;
  ${mq('tablet')}{display: none}
`
const PhoneLogo = styled.div`
  display: block;
  width: 39px;
  text-align: center;
  color: #d3c190;
  padding: 9px 9px 110px;
`
const Phone = styled.a`
  display: block;
  color: #172821;
  text-decoration: none;
  transform: rotate(270deg);
  font-family: metropolis, sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.7px;
  position: absolute;
  left: -40px;
  top: 90px;
`
const MailLogo = styled.div`
  display: block;
  width: 39px;
  text-align: center;
  margin-top: 30px;
  color: #d3c190;
  padding: 9px 9px 90px 6px;
`
const Email = styled.a`
  display: block;
  color: #172821;
  text-decoration: none;
  font-family: metropolis, sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.7px;
  transform: rotate(270deg);
  position: absolute;
  left: -79px;
`
const ConsultButton = styled(PopupButton)`
  margin: 13px 0 0;
  padding: 25px 26px 30px;
  outline: none;
  border: none;
  display: inline-block;
  box-shadow: 5px 2px 14px 0 rgba(23, 40, 33, 0.52);
  background-color: #172821;
  position: fixed;
  top: 5px;
  right: 70px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.1;
  color: #eee4cb;
  cursor: pointer;
  &:hover {
    background: #eee4cb;
    color: #396859;
  }
  ${mq('regular')}{
    right: 20px;
  }
  ${mq('medium')}{
    bottom: 10px;
    right: 10px;
    font-size: 14px;
    top: auto;
    padding: 16px 18px;
  }
`

export default props => (
  <Header>
    <ArrowLogo src={arrow} alt="main logo"/>
    <Title/>
    <VerticalContainer>
      <PhoneLogo><FontAwesomeIcon icon={faPhoneAlt}/></PhoneLogo>
      <Phone href="tel:604-943-9433">604.943.9433</Phone>
      <MailLogo><FontAwesomeIcon icon={faEnvelope}/></MailLogo>
      <Email href="mailto:contact@wbsurveys.ca">contact@wbsurveys.ca</Email>
    </VerticalContainer>
    <Hamburger/>
    <MenuContainerOuter>
      <MenuContainerInner id="drop">{/*whole drop down*/}
        <Exit/>
        <Menu page={props.page}>
          <div><Link to="/">Home</Link></div>
          <div><Link to="/services/">Our Services</Link></div>
          <div><Link to="/about/">About Us</Link></div>
          <div><Link to="/resources/">Resources</Link></div>
          <div><Link to="/contact/">Contact Us</Link></div>
        </Menu>
        <Contact/>
      </MenuContainerInner>
    </MenuContainerOuter>
    <ConsultButton
      text="Book a free consult"
      url="https://calendly.com/wbls/consult30min"
    />
  </Header>
)
