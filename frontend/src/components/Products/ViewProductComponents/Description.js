import React from 'react';
import {
  Col,
} from 'react-bootstrap';

const Description = ({ description }) => {
  return (
	<Col>
	  <h4
		className="title"
	  >
		Description
	  </h4>
	  <hr/>
	  <p>
		{ description }
	  </p>
	</Col>
  );
}

export default Description;
