import React, { Component } from 'react';

const Url = props => {
  console.log(props.url);
  return props.url.map((item, i) => (<a href={ item }>{i}</a>));
}

export default class ProductDetails extends Component {
  constructor(props) 
  {
	super(props);

	this.state = {
	  // id: props.match.params.id,
	  // product: {},
	  url : []
	};
  }
  componentDidMount()
  {
	fetch('/api/product-details/' + this.state.id)
	  .then(resp => resp.json())
	  .then(product => this.setState({ product }))
	  .catch(err => console.error(err));
  }
  render() {
	return (
	  <div className="c-details">
		<h1>Product Details page</h1>
		<Url url={this.state.url}/>
	  </div>
	);
  }
}
