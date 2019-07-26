import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Nav,
  NavDropdown,
  Button,
  Image,
  Dropdown
} from 'react-bootstrap';

const imgUrl = (image) => {
  return require('../../../public/assets/images/user/' + image);
}

const NavProfile = ({ auth }) => {
  return (
	<div>
	  <Image
		src={imgUrl(auth.image)}
	  />
	</div>
  );
}

const NavLogin = () => {
  return (
	<>
	<Nav.Item className="c-profile">
	  <LinkContainer to="/login">
		<Nav.Link>
		  <Button
			className="font-weight-bold px-3"
			type="button"
			variant="outline-light"
			size="sm"
		  >
			Login
		  </Button>
		</Nav.Link>
	  </LinkContainer>
	</Nav.Item>
	<Nav.Item className="c-profile">
	  <LinkContainer to="/signup">
		<Nav.Link>
		  <Button
			className="font-weight-bold px-3"
			type="button"
			variant="light"
			size="sm"
		  >
			Signup
		  </Button>
		</Nav.Link>
	  </LinkContainer>
	</Nav.Item>
	</>
  );
}

export { NavProfile, NavLogin };
