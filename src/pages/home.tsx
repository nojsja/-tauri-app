import React from 'react';
import { RouteConfig } from '../types';
import RouteWithSubRoutes from '../router/RouteWithSubRoutes';

import logo from '../logo.svg';
import tauriCircles from '../tauri.svg';
import tauriWord from '../wordmark.svg';
import { history } from '../App';

type AppProps = {
  routes: RouteConfig[]
}

export default function Home(props: AppProps) {

  const { routes } = props;

  return (
    <div className="App">
      <header className="App-header">
        <div className="inline-logo">
          <img src={tauriCircles} className="App-logo rotate" alt="logo" />
          <img src={tauriWord} className="App-logo smaller" alt="logo" />
        </div>
        <a
          className="App-link"
          href="https://tauri.studio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Tauri
        </a>
        <img src={logo} className="App-logo rotate" alt="logo" />
        <button
          className="App-link"
          onClick={() => { history.push('/page1'); }}
        >
          Go to page 1
        </button>
        <button
          className="App-link"
          onClick={() => { history.push('/'); }}
        >
          Home
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          {
            routes && routes.map((route, i) =>
              <RouteWithSubRoutes key={`${route.path}_${i}`} route={route} />
            )
          }
        </p>
      </header>
    </div>
  )
}
