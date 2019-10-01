/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Font from "./font"
import "./layout.css"
import Footer from "./footer"
import SEO from "../components/seo"

const Layout = ({ children }) => {
  return (
    <>
      <SEO
        title="Watson &amp; Barnard Land Surveyors &amp; Engineers"
        description="We are a private land survey firm situated in Delta, BC, Canada that has been serving the Lower Mainland and surrounding areas including Washington State since 1989."
        keywords={[`land surveyors`,`Delta`,`engineers`,`land survey`,`Washington`,`BCLS`]}
      />
      <Font/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
