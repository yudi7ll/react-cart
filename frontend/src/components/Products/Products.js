import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Container,
  Button
} from 'react-bootstrap';

import { fetchProducts, resetProducts } from '../../actions';
import ProductCard from './ProductCard';

const Product = ({ receiveData, products }) => {
  // componentDidMount() without class
  useEffect(receiveData, []);
  const [limit, setLimit] = useState(18);

  if (products.length <= 0)
	return (
	  <Container>
		<h4
		  className="text-danger font-weight-bold mt-4 text-center"
		>
		  Loading ...
		</h4>
	  </Container>
	);

  return (
	<Container>
	  <Row>
		<ProductCard
		  products={products.slice(0, limit)}
		/>
	  </Row>
	  <Row
		className="mt-4"
	  >
		<Col
		  className="text-center mt-4 mx-0 px-0"
		>
		  <Button 
			variant="outline-danger"
			onClick={() => {
			  setLimit(limit + 18);
			}}
			size="sm"
			className={ limit >= products.length && 'd-none' }
		  >
			See More ...
		  </Button>
		</Col>
	  </Row>
	</Container>
  );
}

const mapStateToProps = (state, ownProps) => {
  // if category exist
  if (ownProps.category)
	return {
	  products: state.products.items
		.filter(p => p.category == ownProps.category)
	}

  // else if
  return {
	products: state.products.items
  }
};

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
