import React, { Component} from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import MainConteiner from './MainContainer'
import rootReducer from './reducers'

const store = createStore(rootReducer)
window.store = store

export default class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <MainConteiner/>
            </Provider>            
        )
    }
}