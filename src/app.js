import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-router';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import MasterPage from './pages/MasterPage'
import IndexPage from './pages/IndexPage'
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'

ReactStormpath.init();

ReactDOM.render(
  <Router history={browserHistory} >
    <HomeRoute path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
      <Route path='/register' component={RegistrationPage} />
      <Route path='/login' component={LoginPage} />
      <AuthenticatedRoute>
        <HomeRoute path='/profile' component={ProfilePage} />
      </AuthenticatedRoute>
    </HomeRoute>
  </Router>,
  document.getElementById('app-container')
);
