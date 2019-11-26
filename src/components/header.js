import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

//import './header.module.scss'
import headerStyles from './header.module.scss'
import PsbcLogo from '../assets/images/psbc.svg'



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
                          wordpress_id
                          wordpress_parent
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

    const pageLinks = data.allWordpressPage.edges.map(edge => {
        let { wordpress_parent, wordpress_id, title } = edge.node
        console.log("Wordpress ID: ", wordpress_id, "\n", "Wordpress Title: ", title)
        return (title === "ABOUT") ?
            null :
            (title === "NEWS") ?
                <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">NEWS</Link>
                </li> :
                (wordpress_parent < 1) ?
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to={edge.node.slug}>{edge.node.title}</Link>
                    </li>
                    : null
    })

    return (
        <header className={headerStyles.header}>
            <h1><Link className={headerStyles.title} to="/about">
                <PsbcLogo className={headerStyles.logo}></PsbcLogo>
                {/* {data.wordpressSiteMetadata.name} */}
            </Link></h1>
            <nav>
                <ul className={headerStyles.navList}>
                    {pageLinks}
                </ul>
            </nav>
        </header >

    )

}

export default Header