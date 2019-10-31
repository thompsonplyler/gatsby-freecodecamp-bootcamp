import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (
          sort:{
            fields: publishedDate,
            order:DESC
            }
        )
         {
          edges {
            node {
              title
              slug
              publishedDate(formatString:"MMMM Do,YYYY")
            }
          }
        }
      }  
    `)

    console.log(data.allContentfulBlogPost.edges)
    let bullets = data.allContentfulBlogPost.edges.map(item => {
        const { title, publishedDate, slug } = item.node
        return <li className={blogStyles.post}>
            <h2>
                <Link to={`/blog/${slug}`}>
                    {title}
                </Link>
            </h2>
        </li>
    })

    return (

        <Layout>

            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {bullets}
            </ol>

        </Layout>

    )

}

export default BlogPage