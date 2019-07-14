import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/scss/font-awesome.scss';
import './main.scss';
import NavBar from '../Nav';
import Routes from './Routes';

class App extends Component {
  constructor(props) {
	super(props);
  }

  render() {
	return (
	  <Router>
		<NavBar />
		<main>
		  <Routes />
		</main>
	  </Router>
	);
  }
}

export default App;
