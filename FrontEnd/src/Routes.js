// Absolute imports
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Loaders
import About from './components/About/Loadable'
import Home from './components/Home/Loadable'
import Main from './components/Main/Loadable'
import APIPage from './components/APIPage/Loadable'

export default () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/main' component={Main} />
        <Route path='/about' component={About} />
        <Route path='/api' component={APIPage} />
    </Switch>
);