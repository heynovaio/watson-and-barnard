import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Feed from "../components/feed"


const Hero = styled.section``
const Architect = styled.section``
const Home = styled.section``
const Developer = styled.section``
const Property = styled.section``

const SecondPage = () => (
  <Layout>
    <Hero>
      <h1>Services</h1>
      <p>
        Hexagon fashion axe authentic chartreuse. Green juice kale chips
        irony chicharrones bicycle rights chartreuse, lo-fi put a bird on it marfa
        poke tousled.
      </p>
    </Hero>
    <Architect>
      <div>
        <h2>Architect</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>
      </div>
    </Architect>
    <Home>
      <div>
        <h2>Homeowner</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>
      </div>
    </Home>
    <Developer>
      <div>
        <h2>Developer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>
      </div>
    </Developer>
    <Property>
      <div>
        <h2>Property Owners</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>
      </div>
    </Property>
    <Feed/>
  </Layout>
)

export default SecondPage
