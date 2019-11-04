import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

//import './header.module.scss'
import headerStyles from './header.module.scss'



const Header = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title,
            headline
          }
        }
              allWordpressPage {
                  edges {
                      node{
                          title
                          slug
                      }
                    }
                }
                wordpressSiteMetadata{
                    name
                }
            }      
    `)

    const pageLinks = data.allWordpressPage.edges.map(edge=>{
        return <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to={edge.node.slug}>{edge.node.title}</Link> </li>
    })

    return (
        <header className={headerStyles.header}>
            <h1><Link className={headerStyles.title} to="/home">
                {data.wordpressSiteMetadata.name}
            </Link></h1>
            <nav>
                <ul className={headerStyles.navList}>
                    {/* <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li> */}
                    {pageLinks}
                </ul>
            </nav>
        </header >

    )

}

export default Header