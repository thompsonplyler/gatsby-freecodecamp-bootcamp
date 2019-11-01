import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const Index = () => {
    return (
        <div>
            <Layout>
                <Head title="Home"/>
                <h1>Hello!</h1>
                <h2>My name is Thompson. I'm a full-stack developer living in NYC.</h2>
                <p>Do you need a website developer? <Link to="/contact">Contact me here.</Link></p>
            </Layout>
        </div>
    )
}

export default Index

/*
 // Initial page setup:
 // ---------------------------
 import React from "react"
 export default () => <div>Hello world!</div>
*/