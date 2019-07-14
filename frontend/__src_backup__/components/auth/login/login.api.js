'use strict';

import axios from 'axios';


export const onSubmit = (data, callback) => {
  axios.post('/api/auth/login', data)
	.then(res => callback(res))
	.catch(err => callback(err));
}
