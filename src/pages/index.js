import React from 'react'
import {Link} from 'gatsby'

const Index = () => {
    return (
        <div>
            <h1>Hello!</h1>
            <h2>My name is Thompson. I'm a full-stack developer living in NYC.</h2>
            <p>Do you need a website developer? <Link to="/contact">Contact me here.</Link></p>
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