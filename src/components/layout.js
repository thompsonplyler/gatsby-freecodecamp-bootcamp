import React from 'react'
import {
    Link
} from 'gatsby'
import Header from './header'
import Footer from './footer'
import "../styles/index.css"


const Layout = (props) => {
    return (<div>
        <Header /> {props.children} <Footer />
    </div>
    )
}

export default Layout