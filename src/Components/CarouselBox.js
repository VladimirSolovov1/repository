import React, { Component } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import oneImg from '../assets/1.jpg';
import twoImg from '../assets/2.jpg';
import threeImg from '../assets/3.png';

export default class CarouselBox extends Component {
		render() {
			return (
				<Carousel>
					<Carousel.Item>
							<img
								className="d-block w-100"
								src={oneImg}
							/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
							<img
								className="d-block w-100"
								src={twoImg}
							/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
							<img
								className="d-block w-100"
								src={threeImg}
							/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>

				</Carousel>
				)
		}
}