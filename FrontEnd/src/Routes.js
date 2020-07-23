import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Main from './components/Main'
import APIPage from './components/APIPage'

export default () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/main' component={Main} />
        <Route path='/about' component={About} />
        <Route path='/api' component={APIPage} />
    </Switch>
);