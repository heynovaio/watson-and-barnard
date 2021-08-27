import React from "react"
import Layout from "../components/layout"
import Feed from "../components/feed"
import Header from "../components/header"
import Hero from "../components/about/hero"
import Team from "../components/about/team"
import Values from "../components/about/values"
import Leadership from "../components/about/leadership"
export default () => (
  <Layout>
    <Header page='about'/>
      <Hero/>
      <Team/>
      <Values/>
      <Leadership/>
    <Feed/>
  </Layout>
)
