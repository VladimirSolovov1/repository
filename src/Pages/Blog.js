import React, { Component } from 'react';

import CarouselBox from '../Components/CarouselBox.js';
import {Container, Card, Button, Accordion} from 'react-bootstrap';

export function sum(a, b) {
  	return a + b;
  }

export default class Blog extends Component {
		render() {
			return (
					<Container>
						<Card className='mt-5'>
							<Card.Header>BLOG NUMBER ONE</Card.Header>
							<Card.Body>
								<Card.Title>Special title treatment</Card.Title>
								<Card.Text>
								With supporting text below as a natural lead-in to additional content.
								</Card.Text>
								<Button variant="danger">Go somewhere</Button>
							</Card.Body>
						</Card>

						<Accordion defaultActiveKey="0" className="mt-5 mb-5">
						<Card>
							<Card.Header>
								<Accordion.Toggle as={Button} variant="link" eventKey="0">
								Click me!
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="0">
								<Card.Body>Hello! I'm the body</Card.Body>
							</Accordion.Collapse>
						</Card>

						<Card>
							<Card.Header>
								<Accordion.Toggle as={Button} variant="link" eventKey="1">
								Click me!
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="1">
								<Card.Body>Hello! I'm the body</Card.Body>
							</Accordion.Collapse>
						</Card>

						<Card>
							<Card.Header>
								<Accordion.Toggle as={Button} variant="link" eventKey="2">
								Click me!
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="2">
								<Card.Body>Hello! I'm the body</Card.Body>
							</Accordion.Collapse>
						</Card>

						</Accordion>

						<Card className='mt-5'>
							<Card.Header>BLOG NUMBER TWO</Card.Header>
							<Card.Body>
								<Card.Title>Special title treatment</Card.Title>
								<Card.Text>
								With supporting text below as a natural lead-in to additional content.
								</Card.Text>
								<Button variant="danger">Go somewhere</Button>
							</Card.Body>
						</Card>

					</Container>	
				)
		}
}