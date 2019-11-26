import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost {
          edges {
            node {
              title
              slug
              date(formatString:"MMMM Do, YYYY")
            }
          }
        }
      }  
      `)

  let bullets = data.allWordpressPost.edges.map(item => {
    const { title, date, slug } = item.node
    return <li className={blogStyles.post}>
      <Link to={`/blog/${slug}`}>
        <h2>
          {title}

        </h2    >
        <p>{date}</p>
      </Link>
    </li>
  })

  return (

    <Layout>
      <Head title="Blog" />

      <h1>PSBC News</h1>
      <ol className={blogStyles.posts}>
        {bullets}
      </ol>

    </Layout>

  )

}

export default BlogPage