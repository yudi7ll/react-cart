
const requestShipper = {
  type: 'REQUEST_SHIPPER'
};

const requestFail = {
  type: 'REQUEST_FAIL'
};

const receiveShipper = shippers => ({
  type: 'RECEIVE_SHIPPER',
  shippers
});

const fetchShipper = () => dispatch => {
  dispatch(requestShipper);

  return fetch('/api/shipper')
  .then(res => res.json())
  .then(res => {
	if (res.errors)
	  return dispatch(requestFail);

	return dispatch(receiveShipper(res))
  })
  .catch(() => dispatch(requestFail));
}

export default fetchShipper;
