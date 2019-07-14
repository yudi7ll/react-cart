
const isLoggedIn = (state = false, action) => {
  switch (action.type) {
	case 'CHECK_AUTH':
	  return action.isLoggedIn;
	default:
	  return state;
  }
}

export default isLoggedIn;
