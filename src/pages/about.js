import React from 'react'
import { Link } from 'gatsby'
import Head from '../components/head'

import Layout from '../components/layout'
const About = () => {
    return (
        <div>
            <Layout>
                <Head title="About"/>
                <h1>About Me</h1>
                <p>I'm a full-stack developer living in NYC. I grew up in Florida, but don't hold that against me. Before I fell in love with making websites,
                I was a Marine, a stand-up comedian, a dating coach, and a personal trainer.</p>

                <p>I love building websites, and if you want me to build a website for you, don't hesitate to <Link to="/contact">
                    get in touch!
                </Link></p>
            </Layout>
        </div>
    )
}

export default About