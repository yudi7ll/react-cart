
const requestCategory = {
  type: 'REQUEST_CATEGORY'
}

const receiveCategory = (categories) => ({
  type: 'RECEIVE_CATEGORY',
  categories
});

const fetchCategory = () => dispatch => {
  dispatch(requestCategory);

  return fetch('/api/category')
	.then(res => res.json())
	.then(res => dispatch(receiveCategory(res)));
}

module.exports = fetchCategory;
