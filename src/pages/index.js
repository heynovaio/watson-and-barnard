import React from "react"
import { Link } from "gatsby"

import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Feed from "../components/feed"

/*
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
*/

const Hero = styled.section`
`
const Associates = styled.section`
`
const Process = styled.section`
`
const Easy = styled.section`
`
const Testimonials = styled.section`
`
const Contact = styled.section`
`
const IndexPage = () => (
  <Layout>
    <Hero>
      <h1>Reliable Land Surveying & Engineering in Delta, BC</h1>
      <p>
        Hexagon fashion axe authentic chartreuse. Green juice kale chips
        irony chicharrones bicycle rights chartreuse, lo-fi put a bird on it marfa
        poke tousled.
      </p>
      <div>
        <div>
          <p>1 555 555 2525</p>
        </div>
        <div>
          <p>info@w&b.com</p>
        </div>
      </div>
    </Hero>
    <Associates>
      <h2>We Work With</h2>
      <div>
        <div>
          <h3>Architects</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod temp.
          </p>
        </div>
        <div>
          <h3>Home Owners</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod temp.
          </p>
        </div>
        <div>
          <h3>Developers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod temp.
          </p>
        </div>
        <div>
          <h3>Property Owners</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod temp.
          </p>
        </div>
      </div>
    </Associates>
    <Process>
      <h2>Information About the Process</h2>
      <div>
        <div>
          <h3>Step 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div>
          <h3>Step 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div>
          <h3>Step 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna.
          </p>
        </div>
      </div>
    </Process>
    <Easy>
      <h2>How we make it easier for you</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud.
      </p>
      <div>
        <h3>Educating and guiding</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation.
        </p>
        <h3>Other ways you help</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation.
        </p>
      </div>
    </Easy>
    <Testimonials>
      <h2>Testimonials</h2>
      <p>
      "Hexagon fashion axe authentic chartreuse. Green juice kale chips
      irony chicharrones bicycle rights chartreuse, lo-fi put a bird on it marfa
      poke tousled. Hammock narwhal heirloom asymmetrical fam, offal mustache
      brooklyn schlitz normcore edison bulb. Cred tofu dollar toast hot
      chicken."
      </p>
      <div></div>
    </Testimonials>
    <Feed/>
  </Layout>
)

export default IndexPage
