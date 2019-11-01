const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // 'The resolve function itself is going to add everything up front
  // to create an asbolute path from the root of the hard drive.
  const blogTemplate = path.resolve(`./src/templates/blog.js`)

  // contrast this with the graphql we import from in header.js
  // this is a function into which we pass a graphql query
  // this function returns a promise
  // we could use .then, but instead the parent createPages became async
  // and the response below (res) was made into the expected return of the promise
  // await graphql()

  const res = await graphql(`
        query {
          allWordpressPost{
            edges{
              node{
               slug
              }
            }
          }
        }
      `)

  res.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}