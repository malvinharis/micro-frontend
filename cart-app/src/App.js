import React from 'react';
import { Switch, Route, Router } from 'react-router-dom'
import { Cart } from './components'

export default ({ history }) => {
    return <div>
        <Router history={history}>
            <Switch>
                <Route path="/" component={Cart} />
            </Switch>
        </Router>
    </div>
}