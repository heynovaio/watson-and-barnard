import React from "react"
import styled from "@emotion/styled"
import survey from "../../images/survey.svg"

const Feed = styled.div`
  background-color: #f6f7fa;
  margin: 0;
  .center {
    max-width: 1064px;
    margin: 0 auto;
    position: relative;
    border-style: solid;
    border-color: #f6f7fa;
  }
  .pushRight {
    max-width: 432px;
    position: relative;
    nargin: 0;
  }
  form {
    width: 361px;
    margin: 197px 0 127px auto;
    position: relative;
    z-index: +2;
  }
  input[type=text] {
    width: 100%;
    height: 40px;
    margin: 7px 0 20px;
    display: block;
    border-style: solid;
    border-color: #eee4cb;
    border-radius: 2px;
    border-width: 0.5px;
  }
  select {
    width: 100%;
    height: 40px;
    margin: 7px 0 20px;
    display: block;
    border-style: solid;
    border-color: #eee4cb;
    border-radius: 2px;
  }
  textarea {
    width: 100%;
    height: 96px;
    display: block;
    margin: 7px 0 16px;
    border-style: solid;
    border-color: #eee4cb;
    border-radius: 2px;
  }
  input[type=submit] {
    width: 100%;
    height: 51px;
    background-color: #172821;
    color: white;
    border-style: none;
    font-size: 20px;
    display: block;
    font-family: metropolis, sans-serif;
    font-weight: 600;
  }
  form div {
    margin: 0;
    font-family: metropolis, sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #172821;
  }
  .img {
    width: 313px;
    position: absolute;
    right: 0;
    top: 188px;
    margin: 0;
  }
`
const render = () => (
  <Feed>
    <div class="center">
      <img class="img" src={survey} alt=""/>
      <div class="pushRight">
        <form>
          <div>Email Address</div>
          <input type="text"/>
          <div>Project Type</div>
          <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
          <div>Write us a message</div>
          <textarea>
          </textarea>
          <input type="submit"/>
        </form>
      </div>
    </div>
  </Feed>
)
export default render
