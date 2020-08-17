// Absolute imports
import React from "react";
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

// Store
import store from './store/configureStore'

// Components
import Routes from './Routes'

// Helpers
import MyThemeProvider from './helpers/MyThemeProvider'

const App = () => {
    return (
        <Provider store={store}>
            <MyThemeProvider>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </MyThemeProvider>            
        </Provider>
    )
}

export default App;