import React, { Component } from 'react';

export default class SearchBar extends Component {
  onChangeSearch(e)
  {
	e.preventDefault();

	console.log(e.target.value);
  }
  render() {
	return (
	  <div className="c-search-bar">
		<div className="c-search-bar navbar-item bg-white d-flex p-1">
		  <div className="form-inline justify-item-middle d-none d-md-flex">
			<input 
			  className="c-input-search form-control form-control-sm border-0" 
			  onChange={(e) => this.onChangeSearch(e)} 
			  type="search" 
			  placeholder="Products, brand, categories" 
			  aria-label="Search" 
			/>
			<button
			  className="c-search-btn btn btn-danger"
			  type="submit"
			>
			  <i className="fa fa-search fa-fw"></i>
			</button>
		  </div>
		</div>
		<i className="btn btn-sm d-md-none fa fa-search fa-sm"></i>
	  </div>
	);
  }
}
