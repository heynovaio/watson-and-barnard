import React from "react"
import { Link } from "gatsby"

import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Hero = styled.section``
const Feed = styled.section``

const Render = () => (
  <Layout>
    <Hero>
      <h1>Contact us</h1>
      <p>
        Hexagon fashion axe authentic chartreuse. Green juice kale chips irony
        chicharrones bicycle rights chartreuse, lo-fi put a bird on it marfa poke
        tousled.
      </p>
      <div>
        <div>
          <h3>Email</h3>
          <p>info@form.com</p>
        </div>
        <div>
          <h3>Phone</h3>
          <p>601-199-0349</p>
        </div>
        <div>
          <h3>Address</h3>
          <p>053 Braulio Field</p>
        </div>
        <div>
          <h3>Twitter</h3>
          <p>@user_name</p>
        </div>
        <div>
          <h3>Facebook</h3>
          <p>@user_name</p>
        </div>
      </div>
    </Hero>
    <Feed>
      <form>
        <input type="text"/><br/>
        <input type="text"/><br/>
        <input type="text"/><br/>
        <input type="submit"/><br/>
      </form>
    </Feed>
  </Layout>
)

export default Render
