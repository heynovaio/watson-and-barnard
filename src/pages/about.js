import React from "react"

import Layout from "../components/layout"
import styled from "@emotion/styled"
import Feed from "../components/feed"

const Hero = styled.section``
const History = styled.section``
const Different = styled.section``

const Render = () => (
  <Layout>
    <Hero>
      <h1>About Us</h1>
      <p>
        Hexagon fashion axe authentic chartreuse. Green juice kale chips
        irony chicharrones bicycle rights chartreuse, lo-fi put a bird on it marfa
        poke tousled.
      </p>
    </Hero>
    <History>
      <div>
        <h2>History & who you are</h2>
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
    </History>
    <Different>
      <div>
        <h2>Why you are different</h2>
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
    </Different>
    <Feed/>
  </Layout>
)
export default Render;
