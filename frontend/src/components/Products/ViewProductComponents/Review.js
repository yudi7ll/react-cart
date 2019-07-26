import React from 'react';
import {
  Col,
  Row,
  Button,
  Image
} from 'react-bootstrap';
import Rating from '../Rating';

const imageUrl = image => {
  return require('../../../../public/assets/images/user/' + image);
}

const Review = ({ review, rating }) => {

  const Comments = () => {
	return review.map(rev => (
	  <Row
		key={rev._id}
		className="p-3"
	  >
		<Col
		  lg={1}
		  className="p-0"
		>
		  <Image 
			src={ imageUrl(rev.customer.image) }
			fluid
			roundedCircle
			style={{
			  border: '1px solid #ddd',
			  objectFit: 'cover',
			}}
		  />
		</Col>
		<Col
		  key={rev._id}
		  lg={11}
		>
		  <h6>{ rev.customer.name }</h6>
		  <p>
			{ rev.comment }
		  </p>
		  <Rating 
			star={ rev.rating }
		  />
		  <small
			className="pull-right"
		  >
			{ new Date(rev.created).toLocaleString('id') }
		  </small>
		  <hr/>
		</Col>
	  </Row>
	));
  }

  const ReviewBtn = () => {
	const ReviewLength = star => {
	  return review.filter(v => v.rating == star).length
	}

	var starButtons = new Array(5).fill(null);

	return starButtons.map((_, i) => (
	  <Button
		key={i}
		variant="secondary"
		size="sm"
		className="m-1"
		onClick={() => active = i}
	  >
		{ 5 - i + ' Star (' +  ReviewLength(i) + ')'}
	  </Button>
	));
  }

  return (
	<Col>
	  <Row>
		<Col>
		  <h4
			className="title"
		  >
			Review
		  </h4>
		  <hr/>
		</Col>
	  </Row>
	  <Row
		className="py-3"
		style={{
		  backgroundColor: 'rgba(205, 53, 53, .1)'
		}}
	  >
		<Col
		  lg={4}
		  className="w-100 h-100 my-auto"
		>
		  <h1>
			<Rating
			  star={rating}
			/>
		  </h1>
		</Col>
		<Col
		  lg={8}
		>
		  <Button
			variant="secondary"
			className="m-1"
			size="sm"
			active
		  >
			All ({ review.length })
		  </Button>
		  <ReviewBtn />
		  <Button
			variant="secondary"
			className="m-1"
			size="sm"
		  >
			With Comments ({ review.filter(v => v.comment.length > 0).length })
		  </Button>
		</Col>
	  </Row>
	  <Row
		className="mt-3"
	  >
		<Col>
		  <Comments />
		</Col>
	  </Row>
	</Col>
  );
}

export default Review;
