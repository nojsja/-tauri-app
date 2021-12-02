import React from 'react';
import { render } from 'react-dom';

import './src/styles/public.css';
import './src/styles/public.less';
import './src/styles/font/iconfont.css';
import 'antd/dist/antd.css';

const rootDOMNode = document.getElementById('root');

let App;
function renderRoot() {
  App = require('./src/App').default; // we have to re-require this every time it changes otherwise we are rendering the same old app.
  render(<App/>, rootDOMNode);
}
renderRoot();

if (module.hot) {
  module.hot.accept('./src/App.tsx', () => {
    console.log('Accepting the updated module');
    renderRoot();
  });
}