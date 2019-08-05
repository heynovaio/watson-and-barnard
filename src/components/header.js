import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import arrow from "../images/bitmap@3x.png"
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
  position: relative;
  z-index: 1;
  font-family: metropolis, sans-serif;
`
const ArrowLogo = styled.img`
  position: absolute;
  max-width: 48px;
  top: 20px;
  left: 15px;
  ${mq('small')}{
    width: 28.9px;
    top: 36px;
    left: 21px;
  }
`
/*Making title logo section*/
const Title = () => (
  <TitleStyle>
    <div>W</div><div>atson</div>
    <div>and</div>
    <div>B</div><div>arnard</div>
  </TitleStyle>
)
const TitleStyle = styled.div`
  font-family: astoria, sans-serif;
  position: absolute;
  top: 0;
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
    ${mq('small')}{
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
    ${mq('small')}{
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
    ${mq('small')}{
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
    ${mq('small')}{
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
    ${mq('small')}{
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
  max-width: 628px;
  margin-left: 775px;
  position: relative;
  ${mq('small')}{
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(23, 40, 33, 0.91);
    max-width: auto;
    margin: 0;
  }
`
const Menu = styled.nav`
  width: 100%;
  position: absolute;
  padding-top: 43px;
  ${mq('small')} {
    width: auto;
    max-height: 330px;
    margin: 122px auto 61px;
    position: relative;
    padding: 0;
  }
  div {
    text-align: center;
    width: 25%;
    ${mq('small')}{
      width: 100%;
      height: 20%;
      padding: 19px;
    }
    a {
      color: ${props => props.page === 'home' ? '#172821': 'white'};
      text-align: center;
      font-family: metropolis, sans-serif;
      font-weight: 600;
      font-size: 16px;
      text-decoration: none;
      ${mq('small')}{
        color: white;
        font-size: 26px;
        line-height: 2.54px;
        letter-spacing: -0.3px;
      }
    }
  }
  div:first-child {
    display: ${props => (props.page === 'home') ? 'none' : 'inline-block'};
    ${mq('small')}{ display: block }
    &:hover ~ hr {
      margin-left: 0;
    }
  }
  div:nth-child(2) {
    display: ${props => props.page === 'services' ? 'none' : 'inline-block'};
    ${mq('small')}{ display: block }
    &:hover ~ hr {
      margin-left: ${props => props.page === 'home' ? '0' : '25%'};
    }
  }
  div:nth-child(3) {
    display: ${props => props.page === 'about' ? 'none' : 'inline-block'};
    ${mq('small')}{ display: block }
    &:hover ~ hr {
      margin-left: ${props => props.page === 'home' || props.page ==='services' ? '25%' : '50%'};
    }
  }
  div:nth-child(4) {
    display: ${props => props.page === 'resources' ? 'none' : 'inline-block'};
    ${mq('small')}{ display: block }
    &:hover ~ hr {
      margin-left: ${props => props.page !== 'contact'  ? '50%' : '75%'};
    }
  }
  div:nth-child(5){
    display: ${props => props.page === 'contact' ? 'none' : 'inline-block'};
    ${mq('small')}{ display: block }
    &:hover ~ hr {
      margin-left: 75%;
    }
  }
  hr {
    background-color: ${props => (props.page === 'home') ? '#172821': 'white'};
    width: 25%;
    transition: .3s ease-in-out;
    height: 7px;
    margin: 0;
    border: none;
    ${mq('small')}{ display: none }
  }
`
const Exit = () => (
  <ExitStyle onClick={hideDrop}>
    <div/><div/>
  </ExitStyle>
)
const ExitStyle = styled.div`
  display: none;
  ${mq('small')}{display: block}
  div {
    position: absolute;
    top: 38px;
    right: 22px;
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
  display: none;
  ${mq('small')}{display: block}
  width: 42px;
  height: 24px;
  position: fixed;
  top: 28px;
  right: 23px;
  div {
    position: absolute;
    background-color: white;
  }
  div:first-child {
    width: 42px;
    height: 4px;
    top: 0;
  }
  div:nth-child(2) {
    width: 42px;
    height: 4px;
    top: 10px;
  }
  div:last-child {
    width: 42px;
    height: 4px;
    top: 20px;
  }
`
const ContactStyle = styled.div`
  width: 205px;
  margin: 0 auto;
  position: relative;
  display: none;
  ${mq('small')}{display: block}
  div {
    width: 74px;
    height: 74px;
    border-radius: 50%;
    box-shadow: 0 2px 20px 0 rgba(97, 97, 97, 0.2);
    background-color: #ffffff;
    text-align: center;
    padding-top: 21px;
    color: #d3c190;
    position: absolute;
  }
  .icon {
    width: 30px;
    display: block;
    margin: auto;
  }
  div:first-child { left: 0 }
  div:last-child { right: 0 }
`
const Contact = () => (
  <ContactStyle>
    <div><FontAwesomeIcon class="icon" icon={faPhoneAlt}/></div>
    <div><FontAwesomeIcon class="icon" icon={faEnvelope}/></div>
  </ContactStyle>
)
const PhoneLogo = styled.div`
  display: block;
  ${mq('small')}{display: none}
  width: 39px;
  position: absolute;
  text-align: center;
  top: 234px;
  color: #d3c190;
`
const Phone = styled.div`
  display: block;
  ${mq('small')}{display: none}
  transform: rotate(270deg);
  position: absolute;
  left: -46px;
  bottom: 390px;
  height: 39px;
  top: 310px;
  padding-top: 12px;
  font-family: metropolis, sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.7px;
`
const MailLogo = styled.div`
  display: block;
  ${mq('small')}{display: none}
  width: 39px;
  position: absolute;
  text-align: center;
  top: 435px;
  color: #d3c190;
`
const Email = styled.div`
  display: block;
  ${mq('small')}{display: none}
  transform: rotate(270deg);
  position: absolute;
  left: -44px;
  height: 39px;
  top: 510px;
  padding-top: 9px;
  font-family: metropolis, sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.7px;
`
export default props => (
  <Header>
    <ArrowLogo src={arrow} alt="main logo"/>
    <Title/>
    <PhoneLogo><FontAwesomeIcon icon={faPhoneAlt}/></PhoneLogo>
    <Phone>1 555 555 2525</Phone>
    <MailLogo><FontAwesomeIcon icon={faEnvelope}/></MailLogo>
    <Email>info@w&b.com</Email>
    <Hamburger/>
    <MenuContainerOuter>
      <MenuContainerInner id="drop">{/*whole drop down*/}
        <Exit/>
        <Menu page={props.page}>
          <div><Link to="/" >Home</Link></div>
          <div><Link to="/services/" >Our Services</Link></div>
          <div><Link to="/about/" >About Us</Link></div>
          <div><Link to="/resources/" >Resources</Link></div>
          <div><Link to="/contact/" >Contact Us</Link></div>
          <hr/>
        </Menu>
        <Contact/>
      </MenuContainerInner>
    </MenuContainerOuter>
  </Header>
)
