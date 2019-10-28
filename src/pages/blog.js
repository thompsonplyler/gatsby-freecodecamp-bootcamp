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
                html
                excerpt
            }
            }
        }
        }     
    `)
    
        let bullets = data.allMarkdownRemark.edges.map(item => {
            const {title, date} = item.node.frontmatter
            return <li><h2>{title}</h2><p>{date}</p><p>{item.node.excerpt}</p></li>
        })

    return (
        
        <Layout>

            <h1>Blog</h1>
            {bullets}
            <p>Posts will show up here later.</p>

        </Layout>

    )

}

export default BlogPage