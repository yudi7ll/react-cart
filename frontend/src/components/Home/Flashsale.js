import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container,
  Card,
  Row,
  Col
} from 'react-bootstrap';
import { fetchProducts } from '../../actions';
import './flashSale.scss';

const FlashSale = ({ products, fetchProd }) => {

  useEffect(fetchProd, []);

  const FlashProducts = () => products.map(product => (
	<Col
	  key={product._id}
	  lg={3}
	>
	  <Link
		to={'/product/' + product._id}
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
			className="image"
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
	  </Link>
	</Col>
	)
  );

  return (
	<Container
	  className="my-4 bg-white pb-4"
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
	products: state.products.items.sort(() => 0.5 - Math.random()).slice(0, 4)
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
