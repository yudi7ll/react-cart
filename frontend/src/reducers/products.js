
const products = (state = {
  isLoading: false,
  requestFail: false,
  items: []
}, action) => {
  switch (action.type) {
	case 'RESET_PRODUCTS':
	  return {
		isLoading: false,
		requestFail: false,
		items: []
	  };
	case 'REQUEST_PRODUCTS':
	  return Object.assign({},
		state,
		{
		  isLoading: true,
		  requestFail: false
		}
	  );

	case 'REQUEST_FAIL':
	  return Object.assign({},
		state,
		{
		  isLoading: false,
		  requestFail: true
		}
	  );

	case 'RECEIVE_PRODUCTS':
	  return Object.assign({}, 
		state,
		{
		  isLoading: false,
		  requestFail: false,
		  items: action.items
		}
	  );

	case 'RESET_PRODUCTS':
	  return Object.assign({}, state, {
		isLoading: false,
		items: []
	  });

	default:
	  return state;
  }
}

export default products;
