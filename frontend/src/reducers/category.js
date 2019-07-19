
const category = (state = {
  isLoading: false,
  items: []
}, action) => {
  switch (action.type) {
	case 'REQUEST_CATEGORY':
	  return Object.assign({}, state, {
		isLoading: true,
	  });

	case 'RECEIVE_CATEGORY':
	  return Object.assign({}, state, {
		isLoading: false,
		items: action.categories
	  });
	default:
	  return state;
  }
}

module.exports = category;
