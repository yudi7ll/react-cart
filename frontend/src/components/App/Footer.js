import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => (
  <Container
	fluid
	className="text-danger mt-4 mb-0 p-3"
  >
	<Container>
	  <Row>
		<Col
		  lg={{
			span: 4,
			offset: 4
		  }}
		>
		  <div
			className="text-center d-flex justify-content-around"
			style={{
			  fontSize: '.8rem'
			}}
		  >
			<Link
			  to="/support/help"
			>
			  Help
			</Link>
			<Link
			  to="/support/terms"
			>
			  Terms
			</Link>
			<Link
			  to="/support/privacy"
			>
			  Privacy
			</Link>
			<Link
			  to="/support/contact"
			>
			  Contact
			</Link>
		  </div>
		</Col>
	  </Row>
	  <Row
		className="my-4"
	  >
		<Col>
		  <h6
			className="logo text-center text-secondary"
		  >
			Reactcart
		  </h6>
		</Col>
	  </Row>
	</Container>
  </Container>
);

export default Footer;
