import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './productlist.scss';

const ProductRating = props => {
  var faO = 'fa-star-o';
  var icon = [faO, faO, faO, faO, faO];
  for (let i = 0; i < props.rating; i++) {
	icon[i] = ('fa-star');
  }
  return icon.map((fa, i) => <i className={"fa text-warning " + fa} key={i}></i> );
}

const Lists = props => {
  return props.products.map(product => {
	return (
	  <div
		key={product._id} 
		className="c-product-card col-4 col-sm-3 col-md-3 col-lg-2 ml-auto mr-md-1 p-0 my-3 card"
	  >
		<Link to={ '/product/' + product._id } className="c-image-link">
		  <img
			className="c-card-image card-img-top"
			src={ product.image_url }
			alt={ product.name }
		  />
		</Link>
		
		<div className="card-body">
		  <Link
			className="c-product-name text-dark mb-1"
			to={'/product/' + product._id}
			title={ product.name }
		  >
			{ product.name }
		  </Link>
		  <div className="c-product-price font-weight-bold mb-1 text-danger text-truncate">
			{ product.price }
		  </div>
		  <div className="c-product-price mb-1 text-muted text-truncate">
			{ product.shop.location }
		  </div>
		  <div className="c-product-rating">
			<ProductRating rating={ product.rating } />
			<span className="text-secondary pl-1">({ product.count_review })</span>
		  </div>
		</div>
	  </div>
	);
  });
}

export default class Productlist extends Component {
  constructor(props)
  {
	super(props);

	this.state = {
	  products: []
	}
  }

  componentDidMount()
  {
	fetch('/api/products')
	  .then(resp => resp.json())
	  .then(products => this.setState({ products }))
	  .catch(err => console.error(err));
  }

  render(){
	return (
	  <div className="c-products container">
		<div className="c-productlist row">
		  <Lists products={this.state.products} />
		</div>
	  </div>
	);
  }
}
