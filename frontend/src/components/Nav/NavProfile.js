import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Nav,
  NavDropdown,
  Button,
  Image,
  Dropdown
} from 'react-bootstrap';


const NavProfile = ({ isLoggedIn }) => {
  return (
	<>
	<Dropdown>
	  <Image 
		className="dropdown-toggle"
		height="30px"
		src="http://img01.deviantart.net/bcd2/i/2015/354/3/0/oliver_sykes_by_nheori-d9ks8r6.jpg"
		roundedCircle
	  />
	</Dropdown>
	{/*
	<NavDropdown className="c-profile nav-item dropdown">
	  <LinkContainer to="#">
		<NavDropdown.Link>
		  <Image 
			src="http://img01.deviantart.net/bcd2/i/2015/354/3/0/oliver_sykes_by_nheori-d9ks8r6.jpg"
			roundedCircle
		  />
		</NavDropdown.Link>
	  </LinkContainer>
	  <div className="nav-link p-0">
		<Link
		  className="nav-link"
		  to="#"
		  data-toggle="dropdown"
		  aria-haspopup="true"
		  aria-expanded="false"
		>
		</Link>
		<div className="dropdown-menu dropdown-menu-right" aria-labelledby="c-img-profile">
		  <Link className="dropdown-item" to="#">Profile</Link>
		  <Link className="dropdown-item" to="/seller/register">Start Selling</Link>
		  <Link
			className="dropdown-item"
			to="/logout"
		  >
			Logout
		  </Link>
		</div>
	  </div>
	</NavDropdown>
	*/}
	</>
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
