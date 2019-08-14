import { Link } from "gatsby"
import React from "react"
import styled from '@emotion/styled'

const Footer = styled.section``
const Title = styled.div``
const Logos = styled.div``
const Nav = styled.nav``
export default () => (
  <Footer>
    <Title>Watson and Barnard</Title>
    <Logos/>
    <Nav>
      <Link to='/index/'>Home</Link>
      <Link to='/services/'>Services</Link>
      <Link to='/about/'>About</Link>
      <Link to='/resources/'>Resources</Link>
      <Link to='/contact/'>Contact</Link>
    </Nav>
  </Footer>
)
