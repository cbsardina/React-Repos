import React, { Component } from 'react'
import logo from '../logo.svg';

export default class NavBar extends Component {
	render() {
		return(
			<div className="container">
				<header className="row">
					<div className="col-lg-2">
						<img src={logo} className="App-logo" alt="logo" />
					</div>
					<div className="col-lg-4">
						<h1 className="App-title">Play What?!</h1>
					</div>
				</header>
			</div>

		)
	}


}







