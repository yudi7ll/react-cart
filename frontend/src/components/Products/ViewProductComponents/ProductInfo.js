import React from 'react';
import {
  Row,
  Col,
  Image,
  Button,
  Form,
} from 'react-bootstrap';
import Rating from '../Rating';

const ProductInfo = ({ product }) => {
  let qty;

  return (
	<>
	{/* Left */}
	<Col
	  lg={6}
	  className="mb-2"
	>
	  <Image
		src={ product.image }
		fluid
	  />
	</Col>
	{/* Right */}
	<Col
	  lg={6}
	>
	  <h5>{ product.name }</h5>
	  <div
		className="d-flex justify-content-between"
		style={{
		  fontSize: '.9rem'
		}}
	  >
		<span>
		  <Rating
			star={product.rating}
		  />
		</span>
		<span>
		  <b>{ product.review.length }</b>
		  <span> Review</span>
		</span>
		<span>
		  <b>{ product.inStock }</b>
		  <span> In Stock</span>
		</span>
	  </div>

	  <hr/>

	  <h4
		className="text-danger font-weight-bold"
	  >
		Rp. { product.price }
	  </h4>
	  <div
		className="my-4"
	  >
		<Button
		  variant="danger"
		  className="py-0 px-1"
		  size="lg"
		  style={{
			borderRadius: '0'
		  }}
		  onClick={ () => qty.value > 1 && qty.value-- }
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
		  ref={ e => qty = e }
		  size="sm"
		/>
		<Button
		  variant="danger"
		  className="py-0 px-1"
		  size="lg"
		  style={{
			borderRadius: '0',
		  }}
		  onClick={ () => qty.value++ }
		>
		  <i className="fa fa-plus fa-fw"></i>
		</Button>
	  </div>
	  <Row>
		<Col
		  lg={7}
		  className="mb-1"
		>
		  <Button
			variant="secondary"
			className="w-100"
			size="sm"
		  >
			Add to Cart
		  </Button>
		</Col>
		<Col
		  lg={5}
		>
		  <Button
			variant="danger"
			className="w-100 font-weight-bold"
			size="sm"
		  >
			Buy Now
		  </Button>
		</Col>
	  </Row>
	  <hr/>
	  <Row>
		<Col
		  className="d-flex justify-content-between"
		>
		  <span>
			<span>Share :</span>
			<a href="https://facebook.com/reactcart">
			  <i className="fa fa-facebook fa-lg mx-2"></i>
			</a>
			<a href="https://twitter.com/reactcart">
			  <i className="fa fa-twitter fa-lg mx-2"></i>
			</a>
			<a href="https://instagram.com/reactcart">
			  <i className="fa fa-instagram fa-lg mx-2"></i>
			</a>
		  </span>
		  <span>
			<i className="fa fa-heart-o text-danger"> </i>
			<span> Favorite ({ product.favorite })</span>
		  </span>
		</Col>
	  </Row>
	</Col>
	</>
  );
}

export default ProductInfo;
