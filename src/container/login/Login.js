import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {toastr} from 'react-redux-toastr';
import * as ActionCreators from '../../store/actions';
import API from '../../apis/api';

class Login extends Component {
  renderInput = ({label, type, input, meta}) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} type={type} autoComplete='false'/>
      </div>
    );
  }

  login = values => {
    const {login} = this.props;
    API.login(values).then(user => {
      login();
    }).catch(error => {
      toastr.success('Message', error.message);
    });
  }

  render() {
    console.log(this.props);
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.login)}>
        <Field name='username' type='text' component={this.renderInput} label='Username'/>
        <Field name='password' type='password' component={this.renderInput} label='Password'/>
        <button type='submit'>Login</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'LoginForm'
})(connect(null, dispatch => {
  return {
    login: () => dispatch(ActionCreators.userLogin())
  };
})(Login));