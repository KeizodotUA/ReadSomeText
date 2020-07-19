import React, { Component } from "react";
import { Provider } from 'react-redux'
import store from './store/configureStore'
import Layout from  './components/Layout'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Layout />
            </Provider>   
        );
    }
}

export default App;