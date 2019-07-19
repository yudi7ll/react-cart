
import isLoading from './isLoading';

const requestProducts = {
  type: 'REQUEST_PRODUCTS'
};

const receiveProducts = items => ({
  type: 'RECEIVE_PRODUCTS',
  items
});

const resetProducts = {
  type: 'RESET_PRODUCTS'
};

const fetchProducts = () => dispatch => {
  dispatch(requestProducts);

  return fetch('/api/product')
	.then(res => res.json())
	.then(res => dispatch(receiveProducts(res)));
};

export { fetchProducts, resetProducts };
