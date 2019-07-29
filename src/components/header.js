import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
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
  background-color: black;
  position: relative;
  z-index: +1;
`
const Desktop = styled.div`
  display: block;
  img {
    max-width: 48px;
    position: absolute;
    top: 20px;
    left: 15px;
  }
  ${mq('small')}{display: none}
`
const PhoneLogo = styled.div`
  width: 39px;
  position: absolute;
  text-align: center;
  top: 234px;
  color: #d3c190;
`
const Phone = styled.div`
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
  width: 39px;
  position: absolute;
  text-align: center;
  top: 435px;
  color: #d3c190;
`
const Email = styled.div`
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
/*Watson and Barnard logo*/
const TitleStyle = styled.div`
  font-family: astoria, sans-serif;
  position: absolute;
  top: 0;
  display: block;
  ${mq('small')}{ display: none }
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
  }
`
const Title = () => (
  <TitleStyle>
    <div>W</div><div>atson</div>
    <div>and</div>
    <div>B</div><div>arnard</div>
  </TitleStyle>
)
/**/
const CenterMenu = styled.div`
  max-width: 1440px;
  margin: auto;
`
const MenuWidth = styled.div`
  max-width: 628px;
  margin-left: 775px;
  position: relative;
`
const Menu = styled.nav`
  width: 100%;
  position: absolute;
  padding-top: 43px;
  .link {
    width: 142px;
    text-align: center;
    font-family: metropolis, sans-serif;
    font-weight: 600;
    color: ${props => props.home ? '#172821': 'white'};
    font-size: 16px;
    text-decoration: none;
    display: inline-block;
    width: 25%;
  }
  .services:hover ~ hr {
    margin-left: 0%;
  }
  .about:hover ~ hr {
    margin-left: 25%;
  }
  .resources:hover ~ hr {
    margin-left: 50%;
  }
  .contact:hover ~ hr {
    margin-left: 75%;
  }
  hr {
    background: black;
    width: 25%;
    transition: .3s ease-in-out;
    height: 7px;
    margin: 0;
    border: none;
  }
`
const Mobile = styled.div`
  display: none;
  position: fixed;
  height: 100vh;
  width: 100vw;
  ${mq('small')}{display: block}
`
const Hamburger = () => (
  <HamburgerStyle id="open" onClick={showDrop}>
    <div/><div/><div/>
  </HamburgerStyle>
)
const HamburgerStyle = styled.div`
  display: block;
  width: 42px;
  height: 24px;
  position: absolute;
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
const Exit = () => (
  <ExitStyle onClick={hideDrop}>
    <div/><div/>
  </ExitStyle>
)
const ExitStyle = styled.div`
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
const DropDown = styled.nav`
  display: none;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(23, 40, 33, 0.91);
`
const VerticalMenu = styled.div`
  max-width: 158px;
  height: 330px;
  margin: 122px auto 61px;
  text-align: center;
  font-family: metropolis, sans-serif;
  font-size: 26px;
  font-weight: 600;
  line-height: 2.54;
  letter-spacing: -0.3px;
  color: #ffffff;
`
const ContactStyle = styled.div`
  width: 205px;
  margin: 0 auto;
  position: relative;
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
export default props => (
  <Header>
    <Desktop>
      <img src={arrow} alt=""/>
      <Title/>
      <PhoneLogo><FontAwesomeIcon icon={faPhoneAlt}/></PhoneLogo>
      <Phone>1 555 555 2525</Phone>
      <MailLogo><FontAwesomeIcon icon={faEnvelope}/></MailLogo>
      <Email>info@w&b.com</Email>
      <CenterMenu>
        <MenuWidth>
          <Menu home={props.home}>
            <Link class="link home" to="/" activeStyle={{display: "none"}}>Home</Link>
            <Link class="link services" to="/services/" activeStyle={{display: "none"}}>Our Services</Link>
            <Link class="link about" to="/about/" activeStyle={{display: "none"}}>About Us</Link>
            <Link class="link resources" to="/resources/" activeStyle={{display: "none"}}>Resources</Link>
            <Link class="link contact" to="/contact/" activeStyle={{display: "none"}}>Contact Us</Link>
            <hr/>
          </Menu>
        </MenuWidth>
      </CenterMenu>
    </Desktop>
    <Mobile>
      <Hamburger/>
      <DropDown id="drop">
        <Exit/>
        <VerticalMenu>
          Home<br/>
          Our Services<br/>
          About Us<br/>
          Resources<br/>
          Contact<br/>
        </VerticalMenu>
        <Contact/>
      </DropDown>
    </Mobile>
  </Header>
)
