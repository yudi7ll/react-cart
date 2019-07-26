import React from 'react';
import {
  ListGroup
} from 'react-bootstrap';

const ShipperInfo = ({ shippers }) => {
  return (
	<>
	<h5>Shipper list</h5>
	<ListGroup
	  variant="flush"
	>
	  {
		shippers.items.map(ship => {
		  return (
			<ListGroup.Item
			  key={ship._id}
			>
			  <span>{ ship.name }</span>
			  <i className="fa fa-check pull-right text-success"></i>
			</ListGroup.Item>
		  );
		})
	  }
	</ListGroup>
	</>
  );
}

export default ShipperInfo;
