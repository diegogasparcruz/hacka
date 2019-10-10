import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Box from './pages/Box';
import Doc from './pages/Doc';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Box} />
            <Route path="/audios/:id" component={ Doc } />
        </Switch>
    </BrowserRouter>
);

export default Routes;