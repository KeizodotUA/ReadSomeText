import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Main from './components/Main'

export default () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/main' component={Main} />
        <Route path='/about' component={About} />
    </Switch>
);