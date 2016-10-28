import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-router';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import MasterPage from './pages/MasterPage'
import IndexPage from './pages/IndexPage'
import Register from './pages/Register'
import LoginPage from './pages/LoginPage'

ReactStormpath.init();

ReactDOM.render(
  <Router history={browserHistory} >
    <HomeRoute path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={LoginPage} />
    </HomeRoute>
  </Router>,
  document.getElementById('app-container')
);
