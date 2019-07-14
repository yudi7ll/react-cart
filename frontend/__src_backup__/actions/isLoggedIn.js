
const checkAuthAction = (isLoggedIn) => {
  return {
	type: 'CHECK_AUTH',
	isLoggedIn
  };
}

const checkAuth = () => dispatch => {
  return fetch('/api/auth/isAuthenticated')
	.then(res => res.json())
	.then(res => dispatch(checkAuthAction(res)))
}

export default checkAuth;
