// Absolute imports
import React from "react";
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

// Store
import store from './store/configureStore'

// Components
import Routes from './Routes'

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Provider>
    )
}

export default App;