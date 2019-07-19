import React from 'react';
import {
  Col,
  Row,
  Container
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const Login = () => {
  return (
	<Container>
	  <Row>
		<Col>
		  <h2
			className="text-center my-4"
		  >
			Sign in to
			<span className="logo"> Reactcart</span>
		  </h2>
		</Col>
	  </Row>
	  <Row>
		<Col
		  lg={{
			span: 4,
			offset: 4
		  }}
		  className="bg-white p-4 mb-4 box-shadow"
		>
		  <LoginForm />
		</Col>
	  </Row>
	  <Row
	  >
		<Col
		  lg={{
			span: 4,
			offset: 4
		  }}
		  className="bg-white p-4 box-shadow"
		>
		  Doesn't have an account?
		  <Link
			to="/signup"
			className="text-primary font-weight-bold"
		  > Create an account
		  </Link>
		</Col>
	  </Row>
	</Container>
  );
}

export default Login;
