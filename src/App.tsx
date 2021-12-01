import React from 'react';
import { Router } from 'react-router-dom';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import './App.css';

import routes from './router/index';
import RouteWithSubRoutes from './router/RouteWithSubRoutes';

export const history = createHashHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
          {/* <Route path="/" component={HomePage} /> */}
          <RouteWithSubRoutes route={routes} />
      </Router>
    </Provider>
  )
}

export default App
