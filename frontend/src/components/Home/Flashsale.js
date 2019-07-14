import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Card,
  Row,
  Col
} from 'react-bootstrap';
import { fetchProducts } from '../../actions';

const FlashSale = ({ products, fetchProd }) => {

  useEffect(fetchProd, []);

  const FlashProducts = () => products.map(product => (
	<Col
	  key={product._id}
	  lg={3}
	>
	  <Card
	  >
		<Card.Img
		  variant="top"
		  src={ product.image }
		  style={{
			height: '250px',
			maxHeight: '250px'
		  }}
		/>
		<Card.Body>
		  <Card.Text
			id="product-title"
		  >
			{ product.name }
		  </Card.Text>
		  <Card.Title
			className="text-danger "
		  >
			Rp. { product.price }
		  </Card.Title>
		</Card.Body>
	  </Card>
	</Col>
	)
  );

  return (
	<Container
	  className="mt-4 bg-white"
	>
	  <Row>
		<h3
		  id="title"
		>
		  FLASH SALE
		  <hr/>
		</h3>
	  </Row>
	  <Row>
		<FlashProducts />
	  </Row>
	</Container>
  );
}

const mapStateToProps = state => {
  return {
	products: state.products.items.slice(0, 4)
  };
} 

const mapDispatchToProps = dispatch => {
  return {
	fetchProd: () => {
	  dispatch(fetchProducts());
	}
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlashSale);
