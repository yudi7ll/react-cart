import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './scss/main.scss';
import 'font-awesome/scss/font-awesome.scss';
import { AuthProvider } from '../auth.context';

import Nav from './nav';
import Home from './home';
import { Productlist, ProductDetails } from './products';
import Cart from './cart';
import { Signup, Logout } from './auth';
// import NotFound from './not-found.component';


class App extends Component {
  render(){
	return(
	  <AuthProvider>
		<BrowserRouter>
		  <div className="app">
			<Nav />
			<div className="c-main container">
			  <Route exact path="/" component={Home} />
			  <Route path="/products" component={Productlist} />
			  <Route path="/signup" component={Signup} />
			  <Route path="/cart" component={Cart} />
			  <Route path="/logout" component={Logout}/>
			  <Route path="/product/:id" component={ProductDetails} />
			  {/*
			  <Route path="*" exact={true} component={NotFound} />
			  */}
			</div>
		  </div>
		</BrowserRouter>
	  </AuthProvider>
	);
  }
}

export default App;
