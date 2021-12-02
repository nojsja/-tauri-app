import React from 'react';
import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux'

import store from './stores/store'

import { createHashHistory } from 'history';
import RouteWithSubRoutes from './router/RouteWithSubRoutes';
import routes from './router/index';

import './App.css';
import './index.css';

/* ------------------- global history ------------------- */
export const history = createHashHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Router history={history}>
          <RouteWithSubRoutes route={routes} />
        </Router>
      </Router>
    </Provider>
  );
}

/* ------------------- export provider ------------------- */
export default App;
