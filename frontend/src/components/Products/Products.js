import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Card } from 'react-bootstrap';
import { fetchProducts, resetProducts } from '../../actions';

const Product = ({ receiveData, products }) => {
  // componentDidMount() without class
  useEffect(receiveData, []);

  return (
	products.map(product => (
	  <Card 
		key={product._id}
		style={{
		  width: '190px'
		}}
	  >
		<Card.Img
		  variant="top"
		  src={ product.image }
		  style={{
			width: '188px',
			minHeight: '188px'
		  }}
		/>
		<Card.Title>{ product.name }</Card.Title>
		<Card.Text
		  className="text-danger"
		>
		  Rp. { product.price }
		</Card.Text>
	  </Card>
	))
  );
}

const mapStateToProps = state => {
  return {
	products: state.products.items
  };
}

const mapDispatchToProps = dispatch => {
  return {
	receiveData: () => {
	  dispatch(fetchProducts())
	}
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
