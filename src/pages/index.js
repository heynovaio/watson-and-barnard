import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import Feed from "../components/feed"
import Header from "../components/homepage/header"
import Hero from "../components/homepage/hero"
import Associates from "../components/homepage/associates"
import Easy from "../components/homepage/easy"
import Process from "../components/homepage/process"
import Friends from "../components/homepage/friends"


const IndexPage = () => (
  <Layout>
    <Header/>
    <Hero/>
    <Associates/>
    <Easy/>
    <Process/>
    <Friends/>
    <Feed/>
  </Layout>
)

export default IndexPage
