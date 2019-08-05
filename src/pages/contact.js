import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Hero from "../components/contact/hero"
import Feed from "../components/contact/feed"


const Render = () => (
  <Layout>
    <Header page="contact"/>
    <Hero/>
    <Feed/>
  </Layout>
)

export default Render
