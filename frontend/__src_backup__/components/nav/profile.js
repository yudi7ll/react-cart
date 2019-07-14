import React from 'react';
import { Link } from 'react-router-dom';

import { Login } from '../auth';

const UserProfile = () => {
  return (
	<li className="c-profile nav-item dropdown">
	  <div className="nav-link p-0">
		<Link
		  className="nav-link"
		  to="#"
		  data-toggle="dropdown"
		  aria-haspopup="true"
		  aria-expanded="false"
		>
		  <img 
			className="c-profile-image rounded-circle dropdown-toggle"
			id="c-img-profile"
			src="http://img01.deviantart.net/bcd2/i/2015/354/3/0/oliver_sykes_by_nheori-d9ks8r6.jpg"
			alt="Profile pictures" 
		  />
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
	</li>
  );
}

const GuestProfile = () => {
  return (
	<>
	<div className="c-profile nav-item dropdown">
	  <div className="nav-link px-1">
		<Link
		  role="button"
		  id="loginDropdown"
		  className="dropdown-toggle nav-link py-1 px-3 border btn-outline-light btn-sm font-weight-bold"
		  data-toggle="dropdown"
		  aria-haspopup="true"
		  aria-expanded="false"
		  to="#"
		>
		  Login
		</Link>
		<Login />
	  </div>
	</div>
	<div className="c-profile nav-item">
	  <div className="nav-link px-1">
		<Link
		  className="nav-link py-1 px-3 border btn-light btn-sm font-weight-bold"
		  to="/signup"
		>
		  Signup
		</Link>
	  </div>
	</div>
	</>
  );
}

export { UserProfile, GuestProfile };
