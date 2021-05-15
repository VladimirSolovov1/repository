// const Header = (props) => {
// 	return (
// 			<div className="header">
// 				<ul>
// 					<li>One</li>
// 					<li>Two</li>
// 					<li>Three</li>
// 				</ul>
// 				<p> Counter value is {props.value} </p>
// 			</div>
// 		)
// }

// export default Header;

import React, { Component } from 'react';
import { Navbar, Nav, FormControl, Container, Form, Button  } from 'react-bootstrap';

import logo from './1.png'

import { BrowserRouter as Router, Switch, Route, Link } from 	'react-router-dom';
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";



export default class Header extends Component {
		render() {
			return (
					<> 
					<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">

						<Container>
							<Navbar.Brand href="/">
								<img 
									src={logo}
									height="50"
									width = "auto"
									className="d-inline-block align-top"
								/>
							</Navbar.Brand>

							<Navbar.Toggle aria-controls="responsive-navbar-nav" />

							<Navbar.Collapse id="responsive-navbar-nav">
								<Nav className="mr-auto">
									<Nav.Link href="/">Home</Nav.Link>
									<Nav.Link href="/about">About</Nav.Link>
									<Nav.Link href="/contacts">Contacts</Nav.Link>
									<Nav.Link href="/blog">Blog</Nav.Link>
								</Nav>

								<Form inline>
									<FormControl
										type="text"
										placeholder="Search"
										className="mr-sm-2"
									/>
									<Button variant="outline-danger">Search</Button>
								</Form>	
							</Navbar.Collapse>
						</Container>		

					</Navbar>	

					<Router> 
						<Switch>
							<Route exact path="/" component={Home}/>
							<Route exact path="/about" component={About}/>
							<Route exact path="/contacts" component={Contacts}/>
							<Route exact path="/blog" component={Blog}/>
						</Switch>
					</Router>	

					</>
				)
		}
}

