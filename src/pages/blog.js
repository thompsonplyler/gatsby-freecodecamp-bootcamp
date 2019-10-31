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

    let bullets = data.allContentfulBlogPost.edges.map(item => {
        const { title, publishedDate, slug } = item.node
        return <li className={blogStyles.post}>
            <Link to={`/blog/${slug}`}>
                <h2>
                    {title}

                </h2    >
                <p>{publishedDate}</p>
            </Link>
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