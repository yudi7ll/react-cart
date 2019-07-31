import React from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Image,
  Carousel,
  Container
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './category.scss';

const imagePath = image => {
  return require(`../../../public/assets/images/banner/${image}`); 
}

const Banner = ({ categories }) => {
  const Categories = ({ icon, children, href }) => (
	<Col
	  className="text-center category"
	>
	  <Link
		to={href}
	  >
		<div
		  className="p-3"
		>
		  <i
			className={`text-danger fa fa-lg fa-${icon}`}
			style={{
			  fontSize: '1.8rem'
			}}
		  >
		  </i>
		</div>
		<div
		  className="text-dark font-weight-bold text-nowrap pb-2"
		>
		  { children }
		</div>
	  </Link>
	</Col>
  );

  const CategoryLists = () => {
	return categories.slice(0, 6).map(c => (
	  <Categories
		key={c._id}
		icon={c.icon}
		href={'/category/' + c.name}
	  >
		{ c.name }
	  </Categories>
	))
  };

  return (
	<Container
	  fluid={true}
	  style={{
		backgroundColor: '#fff'
	  }}
	>
	  <Container
		className="pt-3"
	  >
		<Row>
		  <Col
			lg={8}
			className="px-0"
		  >
			<Carousel>
			  <Carousel.Item>
				<Image
				  fluid
				  src={imagePath('left1.jpeg')}
				/>
			  </Carousel.Item>
			  <Carousel.Item>
				<Image
				  fluid
				  src={imagePath('left2.jpeg')}
				/>
			  </Carousel.Item>
			  <Carousel.Item>
				<Image
				  fluid
				  src={imagePath('left3.jpeg')}
				/>
			  </Carousel.Item>
			  <Carousel.Item>
				<Image
				  fluid
				  src={imagePath('left4.jpeg')}
				/>
			  </Carousel.Item>
			</Carousel>
		  </Col>

		  <Col
			lg={4}
			className="d-flex align-content-end flex-column"
		  >
			<Col
			  className="px-0"
			>
			  <Image fluid src={imagePath('right-1.jpeg')} />
			</Col>
			<Col
			  className="px-0 d-flex align-content-end"
			>
			  <Image fluid src={imagePath('right-2.jpeg')} />
			</Col>
		  </Col>
		</Row>
		<Row
		  className="py-3"
		>
		  <CategoryLists />
		</Row>
	  </Container>
	</Container>
  );
}

const mapStateToProps = state => ({
  categories: state.category.items
});

export default connect(
  mapStateToProps
)(Banner);
