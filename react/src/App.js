import React, { Component } from 'react';

import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Login from './component/login'
import Home from './component/home'
import Error from './component/error'
import Navigate from './component/navigate'
import Routing from './component/routing'
import User from './component/users'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
          <Navigate/>
          <Switch>
              <Route path="/" component={Login} exact/>
              <Route path="/login" component={Login} exact/>
              <Route path='/admin' component={Routing} />
              <Route path='/user/:id' component={User} />
              <Route component={Error}/>
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
} 

export default App;
