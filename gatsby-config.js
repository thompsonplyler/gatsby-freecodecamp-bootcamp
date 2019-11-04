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
    {
      resolve: "gatsby-source-wordpress",
      options: {

        baseUrl: "http://midamericarad.com/",

        protocol: "http",

        hostingWPCOM: false,

        useACF: true,

        acfOptionPageIds: [],
        auth: {
          htaccess_user: process.env.WORDPRESS_ADMIN,
          htaccess_pass: process.env.WORDPRESS_PASSWORD,
          htaccess_sendImmediately: true
        },

        cookies: {},

        verboseOutput: false,

        perPage: 100,

        searchAndReplaceContentUrls: {
          sourceUrl: "https://source-url.com",
          replacementUrl: "https://replacement-url.com",
        },
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
        excludedRoutes: ["**/posts/1456"],
        keepMediaSizes: false,
        normalizer: function ({ entities }) {
          return entities
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass'
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'src',
    //     path: `${__dirname}/src/`
    //   }
    // }
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     plugins: [
    //       'gatsby-remark-relative-images',
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           maxWidth: 750,
    //           linkImagesToOriginal: false
    //         }
    //       }
    //     ]
    //   }
    // }
    // {
    //   resolve: 'gatsby-source-contentful',
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    //   }
    // }
  ]
}