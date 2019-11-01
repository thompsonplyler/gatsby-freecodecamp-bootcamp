import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
const NotFound = () => {
    return (
        <Layout>
            <header><h1>Page not found</h1></header>
            <p><Link to="/">Head home</Link></p>
        </Layout>
    )
}

export default NotFound