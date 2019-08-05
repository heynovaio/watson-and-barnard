import React from "react"
import styled from "@emotion/styled"
import survey from "../../images/survey.svg"
import Map from "../GoogleMapWithMarker.js"
const Feed = styled.section`
  padding: 0 20px;
  font-family: metropolis, sans-serif;
`
const Center = styled.div`
  max-width: 1064px;
  margin: 0 auto;
  position: relative;
  img {
    width: 313px;
    position: absolute;
    right: 0;
    top: 188px;
    margin: 0;
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
const Form = () => (
  <FormStyle>
    Email Address
    <input type="text"/>
    Project Type
    <select>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="fiat">Fiat</option>
      <option value="audi">Audi</option>
    </select>
    Write us a message
    <textarea/>
    <input type="submit"/>
  </FormStyle>
)
const MapStyle = styled.div`
  width: 100vw;
  height: 432px;
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
      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key="
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </MapStyle>
  </Feed>
)
