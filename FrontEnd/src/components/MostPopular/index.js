// Absolute imports
import React from 'react'

// Components
import Layout from '../Layout'

// Shared
import TodoPage from '@shared/TodoPage'

const MostPopular = () => {
    return (
        <TodoPage/>
    )
}

export default Layout()(MostPopular);