
import isLoading from './isLoading';

const requestProducts = {
  type: 'REQUEST_PRODUCTS'
};

const requestFail = {
  type: 'REQUEST_FAIL'
}

const receiveProducts = items => ({
  type: 'RECEIVE_PRODUCTS',
  items
});

const resetProducts = {
  type: 'RESET_PRODUCTS'
};

const fetchProducts = (id = '') => dispatch => {
  dispatch(requestProducts);

  return fetch('/api/product/' + id)
	.then(res => res.json())
	.then(res => {
	  if (res.errors)
		return dispatch(requestFail);

	  return dispatch(receiveProducts(res));
	})
	.catch(() => dispatch(requestFail))
};

export { fetchProducts, resetProducts };
