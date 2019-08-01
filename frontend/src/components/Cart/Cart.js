import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Container,
  Image,
  Button,
  Form
} from 'react-bootstrap';

import { fetchCart } from '../../actions';
import { Rating } from '../Products';


const Cart = ({ fetchData, cart = [], isLoading }) => {

  useEffect(fetchData, []);

  let cartChecked = [];
  const [priceTotal, setPriceTotal] = useState('0');
  const [itemSelected, setItemSelected] = useState(0);

  const updateState = () => {
	const total = () => 
	  cartChecked
	  .filter(v => v.checked)
	  .map(v => cart[v.value])
	  .map(v => v.price)
	  .reduce((sum, currentValue) => {
		return sum + parseInt(currentValue.split('.').join(''));
	  }, 0)
	  .toLocaleString('id');

	setPriceTotal(total());
  }

  useEffect(() => {
	console.log('asd');
	// const selected = () => 
	//   cartChecked
	//   .filter(v => v.checked)
	//   .length;
    //
	// setItemSelected(selected());
  });


  const ProductDetail = () => {
	let qty = [];

	return cart.map((c, i) => {
	  return (
		<Row
		  key={c._id}
		  className="bg-white mb-3 px-2 py-3"
		>
		  <Col>
			<Row>
			  <Form.Group
				className="mb-0"
				controlId={c.product._id}
			  >
				<Form.Check
				  type="checkbox"
				  value={i}
				  ref={ e => cartChecked[i] = e }
				/>
			  </Form.Group>
			  <h5
				className="mb-0"
			  >
				{ c.product.name }
			  </h5>
			</Row>
			<Row
			  className="ml-2 mb-3"
			>
			  <div>
				<Rating
				  star={c.product.rating}
				/>
			  </div>
			</Row>
			<Row
			  className="vertical-align-bottom"
			>
			  <Col
				lg={1}
			  >
				<Image
				  src={ c.product.image }
				  style={{
					maxHeight: '100px'
				  }}
				  fluid
				/>
			  </Col>
			  <Col
				lg={4}
			  >
				<h5
				  className="text-danger"
				>
				  Rp. { c.price }
				</h5>
				<Button
				  variant="danger"
				  className="py-0 px-1"
				  size="lg"
				  style={{
					borderRadius: '0'
				  }}
				  onClick={ () => qty[i].value > 1 && qty[i].value-- }
				>
				  <i className="fa fa-minus fa-fw"></i>
				</Button>
				<Form.Control
				  defaultValue="1"
				  style={{
					display: 'inline',
					backgroundColor: '#f2f2f2',
					outline: 'none',
					border: 'none',
					maxWidth: '30%',
					borderRadius: '0',
					textAlign: 'center'
				  }}
				  ref={ e => qty[i] = e }
				  size="sm"
				/>
				<Button
				  variant="danger"
				  className="py-0 px-1"
				  size="lg"
				  style={{
					borderRadius: '0',
				  }}
				  onClick={ () => qty[i].value++ }
				>
				  <i className="fa fa-plus fa-fw"></i>
				</Button>
			  </Col>
			  <Col>
			  </Col>
			</Row>
		  </Col>
		</Row>
	  );
	});
  }

  if (isLoading)
	return (
	  <h4
		className="text-center text-danger"
	  >
		Loading ...
	  </h4>
	);

  return (
	<Container
	  className="mt-4"
	>
	  <Form
		onSubmit={e => {
		  e.preventDefault();

		}}
	  >
		<ProductDetail />
		<Row
		  className="justify-content-between bg-danger text-light p-4"
		  style={{
			position: 'fixed',
			zIndex: 999,
			bottom: 0,
			left: 0,
			right: 0
		  }}
		>
		  <h5
			className="my-auto ml-4"
		  >
			{ itemSelected || 'No ' } Item Selected
		  </h5>
		  <span>
			<span
			  className="my-auto mx-3"
			>
			  <span> Total: Rp. </span>
			  <span> { priceTotal } </span>
			</span>
			<Button
			  type="submit"
			  variant="outline-light"
			  className="mr-4"
			>
			  Checkout
			</Button>
		  </span>
		</Row>
	  </Form>
	</Container>
  );
}

const mapStateToProps = state => ({
  isLoading: state.cart.isLoading,
  cart: state.cart.items
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => {
	dispatch(fetchCart());
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
