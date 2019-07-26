import React from 'react';
import {
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';

const SearchBar = () => (
  <InputGroup>
    <FormControl
      placeholder="Products, brand, categories"
      aria-label="Search"
      aria-describedby="search"
	  style={{
		border: '1px solid #f2f2f2',
		width: '40vw'
	  }}
    />
	<InputGroup.Append>
	  <Button
		variant="outline-light"
	  >
		<i className="fa fa-search"></i>
	  </Button>
    </InputGroup.Append>
  </InputGroup>
);

export default SearchBar;
