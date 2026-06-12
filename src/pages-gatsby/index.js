import React from "react"
import Layout from "../components/layout"
import Feed from "../components/feed"
import Header from "../components/header"
import Hero from "../components/homepage/hero"
import Clients from "../components/homepage/clients"
import Easy from "../components/homepage/easy"
import Past from "../components/homepage/past"


const IndexPage = () => (
  <Layout>
    <Header page='home'/>
    <Hero/>
    <Clients/>
    <Easy/>
    <Past/>
    <Feed/>
  </Layout>
)

export default IndexPage
