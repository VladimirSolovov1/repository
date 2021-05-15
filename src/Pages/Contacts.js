import React, { Component } from 'react';

import { Form, Button, Container} from 'react-bootstrap';

export function slog(a, b, c) {
  	return a + b - c;
  }

export default class Contacts extends Component {
		render() {
			return (
					<Container style={{width: '500px'}} className="text-center">

						<h1> CALL ME PLZ </h1>

						<Form>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>EMAIL_ADRESS</Form.Label>
								<Form.Control type="email" placeholder="EMAIL@gmail.com" />
							</Form.Group>	

							<Form.Group controlId="formBasicText">
								<Form.Label>TEXT</Form.Label>
								<Form.Control as="textarea" rows="3"/>
							</Form.Group>

							<Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="TOUCH ME"/>
							</Form.Group>

							<Button variant="outline-danger" type="submit">SEND</Button>
						</Form>	

					</Container>	
				)
		}
}