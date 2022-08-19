import React from "react"
import styled from "@emotion/styled"
import survey from "../../images/survey.svg"
import { navigate } from 'gatsby-link'

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

const Feed = styled.section`
  padding: 0 20px;
  font-family: metropolis, sans-serif;
`
const Center = styled.div`    padding: 75px 0 127px;
  max-width: 1064px;
  margin: 0 auto;
  position: relative;
  img {
    width: 313px;
    position: absolute;
    right: 0;
    top: 188px;
    margin: 0;
    ${mq('tablet')}{
      display: none;
    }
  }
`
const PushRight = styled.div`
  max-width: 432px;
  position: relative;
`
const FormStyle = styled.form`
  width: 360px;
  font-size: 16px;
  font-weight: 600;
  font-family: metropolis, sans-serif;
  padding: 197px 0 127px;
  margin: 0 0 0 auto;
  ${mq('tablet')}{
    padding-top: 0px;
  }
  input[type=email],
  input[type=text] {
    width: 100%;
    height: 40px;
    margin: 7px 0 20px;
    border-style: solid;
    border-color: #eee4cb;
    border-radius: 2px;
    display: block;
    border-width: 0.5px;
  }
  select {
    width: 100%;
    height: 40px;
    margin: 7px 0 20px;
    display: block;
    background-color: white;
    border-radius: 2px;
    border-style: solid;
    border-color: #eee4cb;
    border-width: 0.5px;
  }
  textarea {
    width: 100%;
    height: 96px;
    border-style: solid;
    border-color: #eee4cb;
    border-radius: 2px;
    display: block;
    margin: 7px 0 16px;
    border-width: 0.5px;
  }
  input[type=submit] {
    margin: 16px 0 0;
    width: 100%;
    height: 51px;
    background-color: #34594c;
    color: white;
    border-style: solid;
    border-color: #eee4cb;
    font-size: 20px;
    display: block;
    font-weight: 600;
  }
`

const Form = () => {

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  const [state, setState] = React.useState({})
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/en/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return(
  <FormStyle 
    /*action="https://formspree.io/contact@wbsurveys.bc.ca" */
    method="POST"
    netlify-honeypot="bot-field" 
    data-netlify="true" 
    name="contact"
    onSubmit={handleSubmit}
    action="/contact-thank-you/"
  >
    <label for="email">
      Email Address
    </label>
    <input name="email" type="email" id="email" onChange={handleChange}/>
    <label for="name">
      Name
    </label>
    <input id="name" name="name" type="text" onChange={handleChange}/>
    <label for="message">
      Write us a message
    </label>
    <textarea id="message" name="message" onChange={handleChange}></textarea>
    <input type="submit" value="submit" onChange={handleChange}/>
  </FormStyle>
)}
const MapStyle = styled.div`
  width: 100%;
  height: 500px;
  iframe {
    height: 100%;
    border: none;
  }
`
export default () => (
  <Feed>
    <Center>
      <img src={survey} alt=""/>
      <PushRight>
        <Form/>
      </PushRight>
    </Center>
    <MapStyle>
      <iframe title="Google Map" src="https://snazzymaps.com/embed/188647" width="100%"></iframe>
    </MapStyle>
  </Feed>
)
