import React from "react"
import Layout from "../components/layout"
import Feed from "../components/feed"
import Header from "../components/header"
import Hero from "../components/about/hero"
import Team from "../components/about/team"
export default () => (
  <Layout>
    <Header page='about'/>
      <Hero/>
      <Team/>
    <Feed/>
  </Layout>
)
