import React, { Component } from 'react';

import {Container, Tab, Nav, Row, Col} from 'react-bootstrap/';

export default class About extends Component {
		render() {
			return (
					<Container>

						<Tab.Container id="left-tabs-example" defaultActiveKey="first">

						<Row>
							<Col sm={3}>
								<Nav variant="pills" className="flex-column mt-2">
									<Nav.Item>
										<Nav.Link eventKey="first">PEPE ONE</Nav.Link>
									</Nav.Item>

									<Nav.Item>
										<Nav.Link eventKey="second">PEPE TWO</Nav.Link>
									</Nav.Item>

									<Nav.Item>
										<Nav.Link eventKey="third">PEPE THREE</Nav.Link>
									</Nav.Item>
								</Nav>
							</Col>

							<Col sm={9}>
								<Tab.Content className="mt-2">

									<Tab.Pane eventKey="first">
										<img className="TabImg"
											src="https://getwallpapers.com/wallpaper/full/7/2/9/67094.jpg"
										/>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Architecto possimus recusandae deserunt nesciunt, excepturi commodi dolores labore vero, maxime libero.</p>
									</Tab.Pane>

									<Tab.Pane eventKey="second">
										<img className="TabImg"
											src="https://wallpaperaccess.com/full/1787183.jpg"
										/>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Architecto possimus recusandae deserunt nesciunt, excepturi commodi dolores labore vero, maxime libero.</p>
									</Tab.Pane>	

									<Tab.Pane eventKey="third">
										<img className="TabImg"
											src="https://wallpaper.dog/large/5506002.jpg"
										/>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Architecto possimus recusandae deserunt nesciunt, excepturi commodi dolores labore vero, maxime libero.</p>
									</Tab.Pane>		

								</Tab.Content>	
							</Col>
						</Row>	

						</Tab.Container>	

					</Container>		
				)
		}
}