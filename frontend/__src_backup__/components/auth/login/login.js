import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import './login.scss';
import { AuthConsumer } from '../../../auth.context';
import * as api from './login.api';

export default class Login extends Component {

  constructor(props)
  {
	super(props);

	this.state = {
	  username: '',
	  password: ''
	}
  }

  onSubmitHandler(e, updateAuthStatus)
  {
	e.preventDefault();

	const data = {
	  username: this.state.username,
	  password: this.state.password
	}

	api.onSubmit(data, resp => {

	  if(resp.data.authenticated)
		updateAuthStatus();
	  else
		alert('Username or Password doesn\'t exists!');

	});
  }

  onChangeHandler(e)
  {
	this.setState({
	  username: e.target.id == 'username' ? e.target.value : this.state.username,
	  password: e.target.id == 'password' ? e.target.value : this.state.password
	});
  }

  render() {
	return (
	  <AuthConsumer>
		{({isLoggedIn, updateAuthStatus}) => (
		  <div className="c-login dropdown-menu-right dropdown-menu">
			<Form className="px-4 py-3"
			  onSubmit={e => this.onSubmitHandler(e, updateAuthStatus)}
			  onChange={e => this.onChangeHandler(e)}
			  action="/" method="post"
			>
			  <Form.Group>
				<input
				  type="text"
				  className="form-control"
				  id="username"
				  placeholder="Username"
				  autoFocus={true}
				  required={true}
				/>
			  </Form.Form.Group>
			  <div className="form-group">
				<input
				  type="password"
				  className="form-control"
				  id="password"
				  placeholder="Password"
				  required={true}
				/>
			  </div>
			  <div className="form-group form-check">
				<input
				  type="checkbox"
				  className="form-check-input"
				  id="remember"
				/>
				<label
				  className="form-check-label"
				  htmlFor="remember"
				>
				  Remember me
				</label>
			  </div>
			  <button
				type="submit"
				className="btn btn-danger container-fluid"
			  >
				<span>Login <i className="fa fa-sign-in fa-lg-fa-fw"></i></span>
			  </button>
			</Form>
		  </div>
		)}
	  </AuthConsumer>
	);
  }
}
