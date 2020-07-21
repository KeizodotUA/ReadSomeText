import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import MainContainer from './MainContainer'
import About from './About'

const Content = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/main' component={MainContainer}/>
                <Route path='/about' component={About}/>
            </Switch>
        </div>
    )
}

export default Content;