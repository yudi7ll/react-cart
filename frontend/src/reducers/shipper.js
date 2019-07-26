
const shipper = (state = {
  isLoading: false,
  requestFail: false,
  items: []
}, action) => {
  switch (action.type) {
	case 'REQUEST_SHIPPER':
	  return Object.assign({}, state, {
		isLoading: true,
		requestFail: false
	  });

	case 'RECEIVE_SHIPPER':
	  return Object.assign({}, state, {
		isLoading: false,
		requestFail: false,
		items: action.shippers
	  });

	case 'REQUEST_FAIL':
	  return Object.assign({}, state, {
		isLoading: false,
		requestFail: true
	  });

	default:
	  return state;
  }
}

export default shipper;
