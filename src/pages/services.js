import React from "react"
import Layout from "../components/layout"
import Feed from "../components/feed"
import Hero from "../components/services/hero"
import Home from "../components/services/home"
import Architect from "../components/services/architect"
import Developer from "../components/services/developer"
import Property from "../components/services/property"
import Header from "../components/header"

const render = () => (
  <Layout>
    <Header/>
    <Hero/>
    <Architect/>
    <Developer/>
    <Property/>
    <Home/>
    <Feed/>
  </Layout>
)

export default render
