import React, { Component } from 'react'

export default class Form extends Component {

	constructor() {
		super()

		this.state = {
			pilot: '',
			pilotName: ''
		}
	}

	handleNameChange = (event) => {
		let inputName = event.target.name;
		this.setState({[inputName]: event.target.value});
		console.log(event.target.value)
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({pilotName: this.state.pilot})
	}

	render() {
		return (
		<div className="container col-lg-4">
			<div className="card text-center">
				<form className="card-block" onSubmit={this.handleSubmit}>
					<h4 className="card-title">
						What is your name, pilot?
					</h4>
					<input className="form-control" onChange={this.handleNameChange} name="pilot" type="text"/>
					<div className="card-block">
						<div>
							<input className="btn btn-primary" type="submit" value="Submit"/>
							<h2 className="card-title">{this.state.pilotName}</h2>
						</div>
					</div>
				</form>
			</div>
		</div>

		)
	}

}