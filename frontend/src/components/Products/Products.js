import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Container
} from 'react-bootstrap';

import { fetchProducts, resetProducts } from '../../actions';
import ProductCard from './ProductCard';

const Product = ({ receiveData, products }) => {
  // componentDidMount() without class
  useEffect(receiveData, []);

  return (
	<Container>
	  <Row>
		<ProductCard
		  products={products}
		/>
	  </Row>
	</Container>
  );
}

const mapStateToProps = state => (
  {
	products: state.products.items,
  }
);

const mapDispatchToProps = dispatch => (
  {
	receiveData: () => {
	  dispatch(fetchProducts());

	  return () => {
		dispatch(resetProducts);
	  }
	}
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
