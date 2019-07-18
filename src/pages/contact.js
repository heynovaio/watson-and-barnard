import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Header from "../components/homepage/header"

import Layout from "../components/layout"
import Hero from "../components/contact/hero"
import Feed from "../components/contact/feed"


const Render = () => (
  <Layout>
    <Header/>
    <Hero/>
    <Feed/>
  </Layout>
)

export default Render
