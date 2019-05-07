import React, {Component} from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class AuthRoute extends Component {
  render() {
    const {location: {pathname, state}, config, isLoggedIn} = this.props;
    const targetRoute = config.find(r => r.path === pathname);

    if (!targetRoute) {
      return <Redirect to='/404'/>;
    } else {
      if (!targetRoute.requiredAuth && !isLoggedIn) {
        return <Route path={pathname} component={withRouter(targetRoute.component)}/>;
      } else if (!targetRoute.requiredAuth && isLoggedIn) {
        if (pathname === '/login') {
          if(state) {
            return <Redirect to={{pathname:state.from}} />
          } else {
            return <Redirect to='/'/>;
          }
        } else {
          return <Route path={pathname} component={withRouter(targetRoute.component)}/>;
        }
      } else if (targetRoute.requiredAuth && !isLoggedIn) {
        return <Redirect to={{pathname: '/login', state: {from: pathname}}}/>;
      } else {
        return <Route path={pathname} component={withRouter(targetRoute.component)}/>;
      }
    }
  }
}

export default connect(({auth}) => {
  return {isLoggedIn: auth.isLoggedIn};
})(AuthRoute);

