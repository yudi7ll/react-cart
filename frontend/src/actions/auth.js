'use strict';

const isLoading = {
  type: 'REQUEST_AUTH'
};

const authStatus = username => {
  return {
	type: 'AUTH_STATUS',
	username
  };
}

const logout = {
  type: 'LOGOUT'
};

const checkAuth = () => dispatch => {
  dispatch(isLoading);

  return fetch('/api/auth/isAuthenticated')
	.then(res => res.json())
	.then(res => {
	  console.log(res);
	  const username = res.username || null;
	  return dispatch(authStatus(username))
	});
}

export { checkAuth, authStatus, logout };
