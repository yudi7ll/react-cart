import React from 'react';
import { connect } from 'react-redux';
import {
  Col,
  Row
} from 'react-bootstrap';

import { checkAuth } from '../../actions';

import LoginForm from './LoginForm';

const Login = ({ refreshAuth, log }) => {
  return (
	<>
	<Row
	  className="justify-content-center my-3"
	>
	  <h2> Login </h2>
	  <Col xs={12}>
		<Col lg={{
		  span: 6,
		  offset: 3
		}}
		>
		  <LoginForm />
		</Col>
	  </Col>
	  <button
		type="button"
		onClick={refreshAuth}
	  >
		Refresh Auth
	  </button>
	</Row>
	</>
  );
}

const mapDispatchToProps = dispatch => {
  return {
	refreshAuth: () => dispatch(checkAuth())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Login);
