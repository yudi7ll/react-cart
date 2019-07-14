import React, { Component } from 'react';

const LogggedContext = React.createContext();

export class AuthProvider extends Component {
  constructor(props)
  {
	super(props);

	this.state = {
	  isLoggedIn: false
	}
  }

  updateAuthStatus = () => {
	fetch('/api/auth/isAuthenticated')
	  .then(resp => resp.json())
	  .then(isLoggedIn => this.setState({ isLoggedIn }))
  }

  componentDidMount = () => {
	this.updateAuthStatus();
  }

  render() {
	return(
	  <LogggedContext.Provider value={{
		isLoggedIn: this.state.isLoggedIn,
		updateAuthStatus: this.updateAuthStatus
	  }}>
		{this.props.children}
	  </LogggedContext.Provider>
	);
  }
}

export const AuthConsumer = LogggedContext.Consumer;
