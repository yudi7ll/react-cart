
const products = (state = {
  isLoading: false,
  items: []
}, action) => {
  switch (action.type) {
	case 'REQUEST_PRODUCTS':
	  return Object.assign({},
		state,
		{
		  isLoading: true
		}
	  );

	case 'RECEIVE_PRODUCTS':
	  return Object.assign({}, 
		state,
		{
		  isLoading: false,
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
