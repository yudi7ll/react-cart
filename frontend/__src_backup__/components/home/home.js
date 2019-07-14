import React, { Component } from 'react';

const PromoImages = props => {
  return props.images.map((image,i) => (
	<div key={i} className={i == 0 ? 'carousel-item active' : 'carousel-item'}>
	  <img className="d-block w-100" src={image} alt={image} />
	</div>
  ));
}

const CarouselIndicator = props => {
  return props.images.map((image, i) => (
	<li key={i} data-target="#carouselExampleIndicators" data-slide-to={i} className={ i == 0 ? 'active' : '' }></li>
  ));
}


export default class Homepage extends Component {
  constructor(props)
  {
	super(props);

	this.state = {
	  promoBanner: []
	}; 
  }
  componentDidMount()
  {
	fetch('/api/homepage')
	  .then(resp => resp.json())
	  .then(resp => this.setState({ promoBanner: resp.promo }))
	  .catch(err => console.error(err));
  }
  render() {
	return (
	  <div className="c-homepage col-6">
		<h1>Homepage</h1>
		<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
		  <ol className="carousel-indicators">
			<CarouselIndicator images={this.state.promoBanner} />
		  </ol>
		  <div className="carousel-inner">
			<PromoImages images={this.state.promoBanner} />
		  </div>
		  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			<span className="carousel-control-prev-icon" aria-hidden="true"></span>
			<span className="sr-only">Previous</span>
		  </a>
		  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			<span className="carousel-control-next-icon" aria-hidden="true"></span>
			<span className="sr-only">Next</span>
		  </a>
		</div>
	  </div>
	);
  }
}
