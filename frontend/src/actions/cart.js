const requestCart = {
  type: 'REQUEST_CART'
};

const errors = {
  type: 'REQUEST_CART_FAIL'
}

const receiveCart = items => ({
  type: 'RECEIVE_CART',
  items
});

const fetchCart = () => dispatch => {
  dispatch(requestCart);

  return fetch('/api/cart')
	.then(res => res.json())
	.then(res => dispatch(receiveCart(res)))
	.catch(err => errors(err));
}

export default fetchCart;
