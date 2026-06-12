import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "construction-surveys.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 550, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  `)
  const image = getImage(data.placeholderImage)
  return <GatsbyImage image={image} alt="" />
}

export default Image
