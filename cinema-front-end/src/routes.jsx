import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './routes/Home'
import Showings from './routes/Showings'
import Confirm from './routes/Confirm'

const Routes = () => {
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/showings/:filmId" component={Showings} />
        <Route path="/confirm/:showingId" component={Confirm} />

        <Route render={() => <Redirect to="/" />} />
    </Switch>
}

export default Routes
