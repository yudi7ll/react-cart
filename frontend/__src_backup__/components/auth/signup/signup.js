import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthConsumer } from '../../../auth.context';
import * as api from './signup.api';

class Signup extends Component {
  constructor(props) {
	super(props);

	this.state = {
	  unameAvail: {
		status: '',
		msg: ''
	  },
	  passInvalid: ''
	};
  }

  onSubmitHandler = e => {
	e.preventDefault();

	const data = {
	  name: this.state.name,
	  username: this.state.username,
	  password: this.state.password,
	  birthDate: this.state.birthDate 
	}

	api.onSubmit(data, resp => {
	  if (!resp.errors)
		return alert('Welcome ' + resp.name);

	  alert('You are already registered, please login to continue!');
	  this.props.history.replace('/login');
	});
  }

  onChangeHandler = e => {
	const { id, value } = e.target;
	const { name, username, password, birthDate } = this.state;

	this.setState({
	  name: id == 'name' ? value : name,
	  username: id == 's-username' ? value : username,
	  password: id == 's-password' ? value : password,
	  birthDate: id == 'date' ? value : birthDate
	});
  }

  usernameAvailable = e => {
	const usernameClass = document.querySelector('#s-username');
	const usernameFeedback = document.querySelector('#username-feedback');

	const usernameValidation = () => {
	  if (this.state.unameAvail.status) {
		usernameClass.className = "form-control is-valid";
		usernameFeedback.className = "valid-feedback";
	  } else {
		usernameClass.className = "form-control is-invalid";
		usernameFeedback.className = "invalid-feedback";
	  }
	}

	const setUnameAvailState = (status, msg) => {
	  this.setState({
		unameAvail: {
		  status, msg
		}
	  }, usernameValidation);
	}

	if (e.target.value.length <= 4)
	  return setUnameAvailState(false, 'Minimum 5 characters');

	api.unameCheck(e, userNotFound => {
	  if (!userNotFound)
		return setUnameAvailState(false, 'Username is already used!');

	  return setUnameAvailState(true, 'Looks Good!');
	});
  }

  passwordValidate = e => {
	if (this.state.password.length >= 8)
	  return e.target.className = 'is-valid form-control';

	e.target.className = 'is-invalid form-control';
	this.setState({ passInvalid: 'Minimum 8 characters' });

	return false;
  }

  passMatch = e => {
	if (this.state.password == e.target.value && this.passwordValidate(e))
	  e.target.className = "is-valid form-control";
	else
	  e.target.className = "is-invalid form-control";
  }

  render() {
	return (
	  <div className="c-register row mt-4">
		<div className="col-lg-4 bg-white pb-4 mx-auto">
		  <h1 className="my-4 text-center">Signup</h1>
		  <form
			onSubmit={e => this.onSubmitHandler(e)}
			onChange={e => this.onChangeHandler(e)}
			action="/"
			method="post"
		  >
			<div className="form-group">
			  <label htmlFor="name">Name</label>
			  <input
				type="text"
				className="form-control"
				id="name"
				placeholder="Enter Name"
				autoFocus={true}
				required={true}
			  />
			</div>
			<div className="form-group">
			  <label htmlFor="username">Username</label>
			  <input
				type="text"
				className="form-control"
				id="s-username"
				placeholder="Enter Username"
				required={true}
				onChange={e => this.usernameAvailable(e)}
				autoComplete="off"
			  />
			  <div id="username-feedback">
				{ this.state.unameAvail.msg }
			  </div>
			</div>
			<div className="form-group">
			  <label htmlFor="password">Password</label>
			  <input type="password"
				className="form-control"
				id="s-password"
				placeholder="Enter Password"
				required={true}
				onKeyUp={e => this.passwordValidate(e)}
			  />
			  <div className="invalid-feedback">
				{ this.state.passInvalid }
			  </div>
			</div>
			<div className="form-group">
			  <label htmlFor="password2">Confirm Password</label>
			  <input
				type="password"
				className="form-control"
				id="password2"
				placeholder="Enter Password"
				required={true} 
				onChange={e => this.passMatch(e)}
			  />
			  <div className="invalid-feedback">
				Password didn't match
			  </div>
			  <div className="valid-feedback">
				Looks good
			  </div>
			</div>
			<div className="form-group">
			  <label htmlFor="date">Birth Date</label>
			  <input
				type="date"
				className="form-control"
				id="date"
				placeholder="Enter Date"
				required={true}
			  />
			</div>
			<button type="submit" className="btn btn-primary">Signup</button>
		  </form>
		</div>
	  </div>
	);
  }
}

export default () => {
  return(
	<AuthConsumer>
	  { ({ isLoggedIn }) => ( 
		<React.Fragment>
		  {isLoggedIn ? <Redirect to="/" /> : <Signup /> }
		</React.Fragment>
	  ) }
	</AuthConsumer>
  );
}
