import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/scss/font-awesome.scss';
import './main.scss';
import NavBar from '../Nav';
import Footer from './Footer';
import Routes from './Routes';

class App extends Component {
  constructor(props) {
	super(props);
  }

  render() {
	return (
	  <Router>
		<NavBar />
		<Routes />
		<Footer />
	  </Router>
	);
  }
}

export default App;
