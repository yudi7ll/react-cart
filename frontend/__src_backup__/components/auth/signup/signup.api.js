'use strict';

import axios from 'axios';

export const unameCheck = (e, callback) => {
  axios.get('/api/user/' + e.target.value)
	.then(resp => callback(!!resp.data.errors))
	.catch(err => callback(err));
}

export const onSubmit = (data, callback) => {
  axios.post('/api/auth/signup', data)
	.then(resp => callback(resp.data))
	.catch(err => callback(err));
}
