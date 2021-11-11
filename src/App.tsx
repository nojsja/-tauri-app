import React from 'react';
import { Router } from 'react-router-dom';
import { createHashHistory } from 'history';

import './App.css';

import routes from './router/index';
import RouteWithSubRoutes from './router/RouteWithSubRoutes';

export const history = createHashHistory();

function App() {
  return (
    <Router history={history}>
        {/* <Route path="/" component={HomePage} /> */}
        <RouteWithSubRoutes route={routes} />
    </Router>
  )
}

export default App
