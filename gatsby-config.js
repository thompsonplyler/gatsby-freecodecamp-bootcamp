/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Princeton Sports Book Club',
    headline: 'Princeton Sports Book Club',
    author: 'Princeton Sports Book Club',
    description: 'A celebration of fatherhood and community-building through sports and literature.'
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {

        baseUrl: "http://localhost/wp-test",

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
          sourceUrl: "http://localhost/wp-test/",
          replacementUrl: "http://localhost:8000/",
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