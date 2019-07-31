import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Nav,
  Button,
  Image,
  Dropdown
} from 'react-bootstrap';

const imgUrl = (image) => {
  return require('../../../public/assets/images/user/' + image);
}

const NavProfile = ({ auth }) => {
  return (
	<Dropdown
	  style={{
		maxHeight: '25px',
		maxWidth: '25px'
	  }}
	  className="mx-3"
	  alignRight
	>
	  <Dropdown.Toggle
		as={Image}
		src={imgUrl(auth.image)}
		className="h-100 w-100"
		style={{
		  objectFit: 'cover',
		  cursor: 'pointer'
		}}
		roundedCircle
	  />
	  <Dropdown.Menu>
		<Dropdown.Item
		  as="div"
		>
		  <small>
			<strong>Halo</strong>
			, { auth.username }
		  </small>
		</Dropdown.Item>
		<hr/>
		<LinkContainer
		  to={ "/profile/" + auth.username }
		>
		  <Dropdown.Item>
			Profile
		  </Dropdown.Item>
		</LinkContainer>
		<Dropdown.Item
		  onClick={() => {
			
			fetch('/api/auth/logout', {
			  method: 'POST'
			})
			  .then(() => document.location.href = "/");

		  }}
		>
		  <span>Logout </span>
		  <i className="fa fa-sign-out fa-fw"></i>
		</Dropdown.Item>
	  </Dropdown.Menu>
	</Dropdown>
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
