import React from "react"
import Layout from "../components/layout"
import Feed from "../components/feed"
import Header from "../components/header"
import Hero from "../components/resources/hero"
import Links from "../components/resources/links"
export default () => (
  <Layout>
    <Header page='resources'/>
      <Hero/>
      <Links/>
    <Feed/>
  </Layout>
)
