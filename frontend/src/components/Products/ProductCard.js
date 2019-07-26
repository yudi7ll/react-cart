import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Col,
  Button
} from 'react-bootstrap';
import Rating from './Rating';

const ProductCard = ({ products }) => {

  return products.map(product => {
	return (
	  <Col
		key={product._id}
		lg={2}
		className="p-1"
	  >
		<Card
		  className="w-100"
		>
		  <Link
			to={'/product/catalog/' + product._id}
			className="h-75"
		  >
			<Card.Img
			  variant="top"
			  src={ product.image }
			  className="product-image h-50"
			/>
			<Card.Text
			  className="product-title mt-3 mb-0 px-3"
			  title={ product.name }
			>
			  { product.name }
			</Card.Text>
		  </Link>
		  <div
			className="mt-auto mb-4 px-3"
		  >
			<Card.Text
			  className="text-secondary mb-1"
			  style={{
				fontSize: '.8rem'
			  }}
			>
			  <span
				className="text-left"
			  >
				{ product.review.length + ' Review' }
			  </span>
			  <span
				className="pull-right"
			  >
				{ product.soldOut + ' Sold' }
			  </span>
			</Card.Text>
			<Card.Text
			  className="product-title d-flex justify-content-between"
			>
			  <span>
				<Rating
				  star={ product.rating }
				/>
			  </span>
			  <Button
				variant="link"
				className="p-0 fa fa-heart-o text-danger"
				title="Favorite"
				style={{
				  textDecoration: 'none'
				}}
				onClick={ e => {
				  let target = e.target.classList;
				  let fa = ['fa-heart', 'fa-heart-o'];

				  if (target.contains(fa[1]))
					fa.reverse();

				  target.remove(fa[0]);
				  target.add(fa[1]);
				}}
			  >
			  </Button>
			</Card.Text>
			<Card.Text
			  className="text-danger font-weight-bold"
			>
			  Rp. { product.price }
			</Card.Text>
		  </div>
		</Card>
	  </Col>
	);
  });
};

export default ProductCard;
