const bcrypt = require('bcrypt');
const fs = require('fs');

const data = [
  {
	"name": "yudi",
	"username": "yudi1ll",
	"email": "yudi@gmail.com",
	"password": "password",
	"address": "address streets",
	"city": "city",
	"country": "Country",
	"postalCode": "1244",
	"phone": "102938",
	"birthDate": "1999-07-04T05:10:28.685Z"
  },{
	"name": "admin",
	"username": "admin",
	"email": "admin@gmail.com",
	"password": "password",
	"address": "address streets",
	"city": "city",
	"country": "Country",
	"postalCode": "1244",
	"phone": "102938",
	"birthDate": "1999-07-04T05:10:28.685Z"
  }
];

data.map(d => d.password = bcrypt.hashSync(d.password, 10));

fs.writeFileSync('seeder/data/customer.json', JSON.stringify(data));
console.log('customer.json file generated');
