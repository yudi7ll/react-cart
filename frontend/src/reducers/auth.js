'use strict';

const auth = (state = {
  username: null,
  image: null,
  isLoading: false,
  cartLength: 0
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
		  username: action.username,
		  image: action.image,
		  cartLength: action.cartLength
		});

	case 'LOGOUT':
	  return Object.assign({}, state,
		{
		  isLoading: false,
		  username: null,
		  image: null
		});

	default:
	  return state;
  }
}

export default auth;
