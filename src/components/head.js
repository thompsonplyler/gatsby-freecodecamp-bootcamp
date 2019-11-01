import React from 'react'
import {Helmet} from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'


const Head = ({title}) => {
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title
            }
        }
    }
    `)

    const pageTitle = data.site.siteMetadata.title

    return (
        <Helmet title={`${title} | ${pageTitle}`}/>
    )
}

export default Head