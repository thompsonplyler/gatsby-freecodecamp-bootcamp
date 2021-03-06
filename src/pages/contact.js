import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const Contact = () => {
    return (
        <Layout >
            <Head title="Contact"/>
            <h1>This is a contact page!</h1>
            <p>The best way to contact me is a message <a href="http://twitter.com/thompsonplyler" target="_blank" rel="noopener noreferrer">@thompsonplyler on Twitter</a></p>
        </Layout >
    )
}

export default Contact