import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Layout from './Layout'
import rootReducer from './reducers'
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer)
window.store = store

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </Provider>
    )
}

export default App;