// Absolute imports
import React from 'react'

// Components
import Layout from '../Layout'

// Shared
import TodoPage from '@shared/TodoPage'

const Search = () => {
    return (
        <TodoPage/>
    )
}

export default Layout()(Search);