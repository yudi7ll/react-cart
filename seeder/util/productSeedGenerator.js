const fs = require('fs');

const publicPath = file => require('../../public/assets/' + file);
const categoryAssign = (p, category) => Object.assign({}, p, { category });

const products = {
  book: publicPath('tokopedia-book.json'),
  electronics: publicPath('tokopedia-electronics.json'),
  hobby: publicPath('tokopedia-hobby.json'),
  furniture: publicPath('tokopedia-furniture.json'),
  food: publicPath('tokopedia-food.json'),
  fashion: publicPath('tokopedia-fashion.json')
};

var prod = [];
prod = prod.concat(products.book.map(p => categoryAssign(p, 'Book')));
prod = prod.concat(products.electronics.map(p => categoryAssign(p, 'Electronics' )));
prod = prod.concat(products.hobby.map(p => categoryAssign(p, 'Hobbies & Collections' )));
prod = prod.concat(products.furniture.map(p => categoryAssign(p, 'Furniture' )));
prod = prod.concat(products.food.map(p => categoryAssign(p, 'Food & Drink' )));
prod = prod.concat(products.fashion.map(p => categoryAssign(p, 'Fashion' )));

// const app = http.createServer((req, res) => {
//   res.end(JSON.stringify(prod));
// });
// app.listen(2000);
//
const randomIndex = (n = 100) => Math.round(Math.random() * n);
prod = prod.map(seed => Object.assign({}, seed,
  {
	review : [
	  {
		customer: {
		  name: 'Customer name'
		},
		comment: 'Comment',
		rating: randomIndex(5)
	  }
	],
	discount : 0,
	inStock : randomIndex(),
	soldOut : randomIndex(),
	productAvailable : randomIndex(1),
	discountAvailable : randomIndex(1),
	favorite : randomIndex(),
	rating : randomIndex(5),
	description : seed.description || 'descriptions sample',
	image: seed['image-src'] || 'default.png',
	price: parseInt(seed.price).toString() + '.000'
  }
));

fs.writeFileSync('seeder/data/product.json', JSON.stringify(prod));
console.log('product.json file generated');
