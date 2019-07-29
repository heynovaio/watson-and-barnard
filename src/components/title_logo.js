import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
const Title = styled.div`
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
    top: 40.9px;
    left: 60px;
  }
  div:nth-child(2){ /*atson*/
    width: 78px;
    height: 27px;
    font-size: 34.5px;
    line-height: 0.78;
    letter-spacing: -1.06px;
    color: #ffffff;
    top:41px;
    left: 103px;
  }
  div:nth-child(3){ /*and*/
    width: 30px;
    height: 27px;
    font-size: 19.2px;
    line-height: 1.41;
    letter-spacing: -0.92px;
    color: #ffffff;
    top:64.9px;
    left: 120.1px;
  }
  div:nth-child(4){ /*B*/
    width: 48px;
    height: 27px;
    font-size: 37.8px;
    line-height: 0.71;
    letter-spacing: -1.62px;
    color: #ffffff;
    top: 87.9px;
    left: 76px;
  }
  div:last-child{ /*arnard*/
    width: 95px;
    height: 27px;
    font-size: 34.5px;
    line-height: 0.78;
    letter-spacing: -0.87px;
    color: #ffffff;
    top: 87.4px;
    left: 111.7px;
  }
`
export default () => (
  <Title>
    <div>W</div><div>atson</div>
    <div>and</div>
    <div>B</div><div>arnard</div>
  </Title>
)
