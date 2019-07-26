import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Container,
  Button
} from 'react-bootstrap';

import { fetchProducts, resetProducts } from '../../actions';
import ProductCard from './ProductCard';

const Product = ({ params, receiveData, products }) => {
  // componentDidMount() without class
  useEffect(receiveData, []);

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

  var limit = 18;
  return (
	<Container>
	  <Row>
		<ProductCard
		  products={products.slice(0, limit)}
		/>
	  </Row>
	  <Row>
		<Col
		  className="text-center mt-4 mx-0 px-0"
		>
		  <Button 
			variant="outline-danger"
			onClick={() => {
			  limit = limit * 2
			}}
			size="sm"
			className="w-100"
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
