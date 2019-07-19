const login = (agent) => {
  return new Promise((resolve, reject) => {
	agent
	  .post('/api/auth/login')
	  .send({
		username: 'yudi1ll',
		password: 'password'
	  })
	  .end((err, res) => {
		if (err)
		  reject(err);
		resolve(res.body);
	  });
  });
}

module.exports = login;
