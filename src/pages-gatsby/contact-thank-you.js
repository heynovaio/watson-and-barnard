import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Wrap = styled.div`
  max-width: 820px;
  margin:0 auto;
  padding: 100px 20px;
  text-align:center;
`
const ContactThankYou = () => (
  <Layout>
    <SEO title="Thank You" />
    <Wrap>
      <h1>Thank You for contacting us!</h1>
      <p>We will get back to you as soon as we can!</p>
    </Wrap>
  </Layout>
)

export default ContactThankYou
