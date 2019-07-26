import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import {
  fetchProducts,
  fetchShipper,
  resetProducts
} from '../../actions';

import {
  ProductInfo,
  Review,
  Description,
  ShipperInfo
} from './ViewProductComponents';

const ViewProduct = ({ fetchData, product, shippers }) => {

  useEffect(fetchData, []);

  // loading feedback
  if (!product.name || product.isLoading)
	return (
	  <h5
		className="text-center text-danger font-weight-bold mt-3"
	  >
		Loading ... 
	  </h5>
	);

  // if product data has been retrieved
  return (
	<Container
	  className="py-3 mt-3"
	>
	  <Row>
		<Col>
		  <h6
			className="text-secondary"
		  >
			<Link
			  to="/"
			>
			  Home
			</Link>
			<Link
			  to={"/category/" + product.category}
			> { ' > ' + product.category }
			</Link>
			<Link
			  to={"/product/catalog/" + product._id}
			>
			  { ' > ' + product.name }
			</Link>
		  </h6>
		</Col>
	  </Row>
	  <Row>
		<Col
		  lg={9}
		>
		  <Row
			className="bg-white py-3"
		  >
			<ProductInfo
			  product={product}
			/>
		  </Row>
		  <Row
			className="bg-white py-3 mt-4"
		  >
			<Description
			  description={product.description} 
			/>
		  </Row>
		  <Row
			className="bg-white py-3 mt-4"
		  >
			<Review
			  review={ product.review }
			  rating={ product.rating }
			/>
		  </Row>
		</Col>
		<Col
		  lg={3}
		>
		  <div
			className="bg-white p-3"
		  >
			<ShipperInfo
			  shippers={shippers}
			/>
		  </div>
		</Col>
	  </Row>
	</Container>
  );
}

const mapStateToProps = (state, ownProps) => ({
  product: Object.assign({},
	state.products.items.filter(p => p._id == ownProps.match.params.id)[0], {
	  isLoading: state.products.isLoading,
	  requestFail: state.products.requestFail
  }),
  shippers: state.shipper,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => {
	dispatch(fetchProducts());
	dispatch(fetchShipper());

	return () => {
	  dispatch(resetProducts);
	}
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewProduct);
