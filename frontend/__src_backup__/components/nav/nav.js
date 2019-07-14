import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AuthConsumer } from '../../auth.context';

import { UserProfile, GuestProfile } from './profile';
import SearchBar from './searchbar';
import './nav.scss';

const Profile = props => {
  return props.isLoggedIn ? <UserProfile /> : <GuestProfile />;
}

export default class Nav extends Component {
  constructor(props)
  {
	super(props);

	this.state = {
	  profile: '',
	}
  }
  render() {
	return(
	  <AuthConsumer>
		{({ isLoggedIn, updateAuthStatus }) => (
		  <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
			<Link className="navbar-brand" to="/">Reactcart</Link>
			<button 
			  className="navbar-toggler" 
			  type="button" 
			  data-toggle="collapse" 
			  data-target="#c-navbar" 
			  aria-controls="c-navbar"
			  aria-expanded="false" 
			  aria-label="Toggle navigation"
			  >
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="c-navbar">
			  <div className="navbar-nav mr-auto">
				<div className="nav-item dropdown px-md-4">
				  <div 
					className="nav-link dropdown-toggle active c-nav-categories" 
					to="#" 
					data-toggle="dropdown" 
					role="button" 
					aria-haspopup="true" 
					aria-expanded="false"
					> 
					  Categories
				  </div>
				  <div className="dropdown-menu">
					<Link className="dropdown-item" to="/products">Electronics</Link>
				  </div>
				</div>
				<SearchBar isLoggedIn={isLoggedIn} />
			  </div>
			  {/* Right nav */}
			  <ul className="c-right-nav nav">
				<li className="c-cart-link nav-item my-auto">
				  <div className="nav-link py-0">
					<Link
					  className="nav-link fa fa-shopping-cart text-light fa-lg fa-fw"
					  to="/cart"
					  title="Cart"
					>
					</Link>
				  </div>
				</li>
				<Profile
				  isLoggedIn={isLoggedIn}
				  updateAuthStatus={() => updateAuthStatus()}
				/>
			  </ul>
			</div>
		  </nav>
		)}
	  </AuthConsumer>
	);
  }
}
