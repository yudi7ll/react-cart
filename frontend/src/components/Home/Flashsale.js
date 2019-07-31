import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Button
} from 'react-bootstrap';
import { fetchProducts } from '../../actions';
import { ProductCard } from '../Products';
import './flashSale.scss';

const FlashSale = ({
  isLoading,
  requestFail,
  products,
  fetchProd
}) => {

  useEffect(fetchProd, []);

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
		<Container>
		  <Row>
			{ isLoading
				? (
				  <h4
					className="w-100 text-center"
				  >
					Loading...
				  </h4>
				)

				: (
				  <ProductCard
					products={products}
				  />
				)
			}

			{
			  requestFail && (
				<div
				  className="w-100 text-center text-danger"
				>
				<h4>
				  Error fetching data... !
				</h4>
				<Button
				  size="sm"
				  variant="danger"
				  onClick={ () => document.location.reload() }
				>
				  Refresh
				</Button>
				</div>
			  )
			}
		  </Row>
		</Container>
	  </Row>
	</Container>
  );
}

const mapStateToProps = state => {
  const filterState = ({ items }) => 
	items
	  .sort((a, b) => {
		// return a - b;
		return 0.5 - Math.random();
	  })
	  .slice(0, 12)

  return {
	products: filterState(state.products),
	isLoading: state.products.isLoading,
	requestFail: state.products.requestFail
  };
} 

const mapDispatchToProps = dispatch => ({
  fetchProd: () => {
	dispatch(fetchProducts());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlashSale);
