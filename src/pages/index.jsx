import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home';
import './style.less'

export default class App extends Component {

    render() {
        return (
            <Router  basename='/'>
                <Switch>
                    <Route exact path='/'>
                        <Home></Home>
                    </Route>
                </Switch>
            </Router>
        )
    }
}
