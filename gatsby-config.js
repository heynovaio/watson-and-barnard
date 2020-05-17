module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Watson & Barnard Land Surveyors & Engineers`,
    description: `We are a private land survey firm situated in Delta, BC, Canada that has been serving the Lower Mainland and surrounding areas including Washington State since 1989.`,
    author: `@heynovaio`,
    keywords: `land surveyors,Delta,engineers,land survey,Washington,BCLS`,
    siteUrl: `http://www.wbsurveys.bc.ca/`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-159355492-1",
        head: false,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `watson-and-barnard`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        icon: `src/images/bitmap.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
