import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import {
  Navbar,
  Nav,
  NavDropdown
} from 'react-bootstrap';
import './NavBar.scss';

import { NavLogin, NavProfile } from './NavProfile';

const NavBar = () => {
  return(
	<Navbar bg="danger" expand="lg" variant="dark">
	  <LinkContainer to="/">
		<Navbar.Brand>Reactcart</Navbar.Brand>
	  </LinkContainer>
	  <Navbar.Toggle aria-controls="c-navbar" />
	  <Navbar.Collapse id="c-navbar">
		<Nav className="mr-auto">
		  <NavDropdown title="Categories" className="px-md-4">
			<LinkContainer to="/products">
			  <NavDropdown.Item> Electronics </NavDropdown.Item>
			</LinkContainer>
		  </NavDropdown>
		  {/* <SearchBar isLoggedIn={isLoggedIn} /> */}
		</Nav>

		{/* Right nav */}
		<Nav>
		  <LinkContainer to="/cart">
			<Nav.Link>
			  <i className="fa fa-shopping-cart fa-lg"></i>
			</Nav.Link>
		  </LinkContainer>
		  <NavLogin />
		</Nav>
	  </Navbar.Collapse>
	</Navbar>
  );
}

export default NavBar;
