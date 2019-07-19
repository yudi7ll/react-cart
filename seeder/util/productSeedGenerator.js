const category = require('../data/category.json');
const fs = require('fs');

let prod = require('../../public/assets/tokopedia.json');
const randomIndex = (n = 100) => Math.round(Math.random() * n);
const randomData = data => {
  return data[randomIndex(data.length - 1)].name;
}

prod.map(seed => {
  seed.review = {
	customer: 'Customer Name',
	comment: 'Comment',
	rating: randomIndex(5)
  };
  seed.category = randomData(category);
  seed.discount = 0;
  seed.inStock = randomIndex();
  seed.soldOut = randomIndex();
  seed.productAvailable = randomIndex(1);
  seed.discountAvailable = randomIndex(1);
  seed.favorite = randomIndex();
  seed.rating = randomIndex(5);
  seed.description = seed.description || 'descriptions sample';
});

fs.writeFileSync('seeder/data/product.json', JSON.stringify(prod));
console.log('product.json file generated');
