import React, {Component} from "react";
import {Switch} from 'react-router-dom';
import routes from './routes';
import Header from './components/header/Header'

import AuthRoute from './container/auth/AuthRoute';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <AuthRoute config={routes} />
        </Switch>
      </div>
    );
  }
}

export default App;
