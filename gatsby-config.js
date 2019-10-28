/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Full-Stack Bootcamp',
    headline: 'Thompson Plyler - Web Developer',
    author: 'Thompson Plyler',
    description: 'A test website using GatsbyJS'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }},
      'gatsby-transformer-remark'
  ]
}
