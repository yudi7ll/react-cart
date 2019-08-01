const cart = (state = {
  isLoading: false,
  errors: false,
  items: []
}, action) => {
  switch (action.type) {
	case 'REQUEST_CART':
	  return Object.assign({}, state, {
		isLoading: true,
		errors: false
	  });

	case 'REQUEST_CART_FAIL':
	  return Object.assign({}, state, {
		isLoading: false,
		errors: true
	  });

	case 'RECEIVE_CART':
	  return Object.assign({}, state, {
		isLoading: false,
		errors: false,
		items: action.items
	  });

	default:
	  return state;
  }
}

export default cart;
