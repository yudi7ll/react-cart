import React from 'react';
import {
  Row,
  Col,
  Image,
  Carousel,
  Container
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const imagePath = image => 
  require(`../../../public/assets/images/banner/${image}`); 

const Banner = () => {

  const Categories = ({ icon, children, href }) => (
	<Col
	  className="text-center"
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
		  className="text-dark font-weight-bold text-nowrap"
		>
		  { children }
		</div>
	  </Link>
	</Col>
  );

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
		  <Categories icon="desktop" href="/categories/electronics">
			Electronics
		  </Categories>
		  <Categories icon="futbol-o" href="/categories/hobbies">
			Hobbies & Collections
		  </Categories>
		  <Categories icon="bed" href="/categories/furniture">
			Furniture
		  </Categories>
		  <Categories icon="shirtsinbulk" href="/categories/fashion">
			Fashion
		  </Categories>
		  <Categories icon="book" href="/categories/book">
			Book
		  </Categories>
		  <Categories icon="cutlery" href="/categories/food">
			Food & Drink
		  </Categories>
		</Row>
	  </Container>
	</Container>
  );
}

export default Banner;