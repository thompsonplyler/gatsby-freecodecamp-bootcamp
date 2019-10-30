import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
        allMarkdownRemark{
            edges {
            node {
                frontmatter{
                title
                date
                }
                fields {
                    slug
                }
                excerpt
            }
            }
        }
        }     
    `)

    let bullets = data.allMarkdownRemark.edges.map(item => {
        const { title, date } = item.node.frontmatter
        const { slug } = item.node.fields
        return <li>
            <h2>
                <Link to={`/blog/${slug}`} >
                    {title}
                </Link>
            </h2>

            <p>
                {date}
            </p>
            <p>
                {item.node.excerpt}
            </p>
        </li>
    })

    return (

        <Layout>

            <h1>Blog</h1>
            {bullets}

        </Layout>

    )

}

export default BlogPage