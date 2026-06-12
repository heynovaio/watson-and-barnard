import React from "react"
import Layout from "../components/layout"
import Feed from "../components/feed"
import Hero from "../components/services/hero"
import Listings from "../components/services/listings"
import Header from "../components/header"

const render = () => (
  <Layout>
    <Header page='services'/>
    <Hero/>
    <Listings/>
    <Feed/>
  </Layout>
)

export default render
