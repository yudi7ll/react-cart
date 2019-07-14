'use strict';

const auth = (state = {
  username: null,
  isLoading: false
}, action) => {
  switch (action.type) {
	case 'REQUEST_AUTH':
	  return Object.assign({},
		state,
		{
		  isLoading: true
		});

	case 'AUTH_STATUS':
	  return Object.assign({}, state,
		{
		  isLoading: false,
		  username: action.username
		});

	case 'LOGOUT':
	  return Object.assign({}, state,
		{
		  isLoading: false,
		  username: null
		});

	default:
	  return state;
  }
}

export default auth;
