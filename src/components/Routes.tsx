import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Overview from './Overview'
import RandomWord from './RandomWord'

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Overview />
            </Route>
            <Route exact path="/randomword">
                <RandomWord />
            </Route>
        </Switch>
    </Router>
)

export default Routes
