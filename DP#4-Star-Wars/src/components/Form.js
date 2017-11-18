import React, { Component } from 'react'

export default class Form extends Component {

	constructor() {
		super()

		this.state = {
			pilot: '',
			pilotName: ''
		}
	}

	_handleNameChange = (event) => {
		let inputName = event.target.name;
		this.setState({[inputName]: event.target.value});
		console.log(event.target.value)
	}

	_handleSubmit = (event) => {
		event.preventDefault();
		this.setState({pilotName: this.state.pilot})
	}

	render() {
		return (
		<div className="container col-lg-4">
			<div className="card text-center">
				<form className="card-block" onSubmit={this._handleSubmit}>
					<h4 className="card-title">
						What is your name, pilot?
					</h4>
					<input className="form-control" onChange={this._handleNameChange} name="pilot" type="text"/>
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

//  FORM: SUBMIT METHOD
// handleSubmit below:
// See form lesson for details.
// Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
// Then, set the value of the input back to an empty string.