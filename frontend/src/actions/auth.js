'use strict';

const isLoading = {
  type: 'REQUEST_AUTH'
};

const authStatus = ({ username, image, cartLength }) => {
  return {
	type: 'AUTH_STATUS',
	username,
	image,
	cartLength
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
	  return dispatch(authStatus(res))
	});
}

export { checkAuth, authStatus, logout };
