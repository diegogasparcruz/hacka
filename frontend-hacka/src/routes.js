import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Box from './pages/Box';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Box} />
        </Switch>
    </BrowserRouter>
);

export default Routes;