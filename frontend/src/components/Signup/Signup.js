import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Container
} from 'react-bootstrap';

import SignupForm from './SignupForm.js';

const Signup = () => {
  return (
	<Container
	  className="my-3"
	>
	  <Row
		className="my-3"
	  >
		<Col>
		  <h2
			className="text-center"
		  >
			Join <span className="logo">Reactcart</span>
		  </h2>
		</Col>
	  </Row>
	  <Row>
		<Col lg={{
			span: 6,
			offset: 3
		  }}
		  className="bg-white p-4 box-shadow rounded"
		>
		  <SignupForm />
		</Col>
	  </Row>
	  <Row
		className="my-4"
	  >
		<Col lg={{
			span: 6,
			offset: 3
		  }}
		  className="bg-white p-4 box-shadow rounded text-center"
		>
		  Already have an account? 
		  <Link
			to="/login"
			className="text-primary font-weight-bold"
		  > Login
		  </Link>
		</Col>
	  </Row>
	</Container>
  );
}

export default Signup;
