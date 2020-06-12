import { Link } from "gatsby"
import React from "react"
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Footer = styled.section`
  background-color: #ffffff;
  padding: 31px 20px 50px;
`
const Title = styled.h2`
  font-family: astoria, sans-serif;
  font-size: 36px;
  font-weight: normal;
  text-align: center;
  color: #505d68;
`
const Logos = styled.div`
  max-width: 565px;
  margin: 9px auto 25px;
`

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logos@3x.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 565) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 480px;
  margin: 0 auto;
`
const A = styled(Link)`
  font-family: metropolis, sans-serif;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: #505d68;
  text-decoration: none;
  display: block;
`
export default () => (
  <Footer>
    <Title>Watson and Barnard</Title>
    <Logos><Image/></Logos>
    <Nav>
      <A to='/'>HOME</A>
      <A to='/services/'>SERVICES</A>
      <A to='/about/'>ABOUT</A>
      <A to='/resources/'>RESOURCES</A>
      <A to='/contact/'>CONTACT</A>
    </Nav>
  </Footer>
)
