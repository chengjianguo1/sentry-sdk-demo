import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Link, matchPath } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

const history = createBrowserHistory();

const routes = [{ path: '/about' }, { path: '/user/:id' }, { path: '/' }];

Sentry.init({
  dsn: "http://356fd95472594d38bb91f9da6ff0f63a@39.105.175.193:9000/2",
  integrations: [new Integrations.BrowserTracing({
    routingInstrumentation: Sentry.reactRouterV5Instrumentation(history, routes, matchPath),
  })],
  environment: 'localhost',
  release: '0.0.1',
  // project: 'sentry-sdk-demo',
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const App = () => {
  function fn() {
    console.log(window.a.b);
  }
  return (
    <Router history={history}>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user/1">User1</Link>
            </li>
            <li>
              <Link to="/user/2">User2</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about" children={
            () => <div>about</div>
          } />
          <Route path="/user/:id" children={
            () => <div onClick={fn}>user</div>
          } />
          <Route exact path="/" children={
            () => <button onClick={fn}>Break the world</button>
          } />
        </Switch>
      </>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

