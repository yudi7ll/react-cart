import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import {
  Navbar,
  Nav,
  NavDropdown
} from 'react-bootstrap';
import './NavBar.scss';

import { NavLogin, NavProfile } from './NavProfile';
import SearchBar from './searchBar';

const NavBar = ({ auth, isLoading, categories }) => {
  const NavItems = () => {
	return categories.map(category => (
	  <LinkContainer
		key={category._id}
		to={ '/category/' + category.name }
	  >
		<NavDropdown.Item
		>
		  { category.name }
		</NavDropdown.Item>
	  </LinkContainer>
	));
  };

  return(
	<Navbar
	  bg="danger"
	  expand="lg"
	  variant="dark"
	>
	  <LinkContainer
		to="/"
	  >
		<Navbar.Brand>Reactcart</Navbar.Brand>
	  </LinkContainer>
	  <Navbar.Toggle
		aria-controls="c-navbar"
	  />
	  <Navbar.Collapse
		id="c-navbar"
	  >
		<Nav>
		  <NavDropdown
			title={ isLoading
				? 'Loading...'
				: 'Categories'
			}
			className="px-md-4"
		  >
			<LinkContainer
			  to={'/products'}
			>
			  <NavDropdown.Item>
				All Products
			  </NavDropdown.Item>
			</LinkContainer>
			<NavItems />
		  </NavDropdown>
		  {/* <SearchBar isLoggedIn={isLoggedIn} /> */}
		</Nav>
		<Nav
		  className="ml-auto"
		>
		  <SearchBar />
		</Nav>
		{/* Right nav */}
		<Nav
		  className="ml-auto"
		>
		  <LinkContainer to="/notification">
			<Nav.Link>
			  <i className="fa fa-bell fa-lg"></i>
			</Nav.Link>
		  </LinkContainer>
		  <LinkContainer to="/cart">
			<Nav.Link>
			  <i className="fa fa-shopping-cart fa-lg"></i>
			</Nav.Link>
		  </LinkContainer>
		</Nav>
		<Nav>
		  {
			auth.username
			  ? <NavProfile
				  auth={auth}
				/>
			  : <NavLogin />
		  }
		</Nav>
	  </Navbar.Collapse>
	</Navbar>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  isLoading: state.category.isLoading,
  categories: state.category.items
});

export default connect(
  mapStateToProps
)(NavBar);
