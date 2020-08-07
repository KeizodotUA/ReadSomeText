// Absolute imports
import React from 'react'

// Components
import Layout from '../Layout'

const Text = (props) => {
    return (
        <div>
            <h3>TEXT {props.match.params.textId}</h3>
        </div>
    )
}

export default Layout()(Text);