import React, { Component } from 'react';
import axios from 'axios';

const Logout = () => {
  axios.post('/api/auth/logout')
	.then(() => {
	  document.location.href="/";
	})
	.catch(err => console.log(err));
}

export default Logout;
