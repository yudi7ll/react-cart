import React from 'react';
import Products from './Products';

const ProductByCategory = ({ match }) => {
  return (
	<Products
	  category={ match.params.category }
	/>
  );
}

export default ProductByCategory;
