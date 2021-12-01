import React, { useEffect } from 'react';
import { getCurrent, WebviewWindow } from '@tauri-apps/api/window';
import { Event } from '@tauri-apps/api/event';
import { invoke, event } from '@tauri-apps/api';

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

  useEffect(() => {
    // emit an event that are only visible to the current window
    const current = getCurrent();
    current.listen('communication', (event: Event<unknown>) => {
      console.log(event.payload);
    });
    current.emit('communication', 'Tauri is awesome!(frontend)');

  }, [])

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
