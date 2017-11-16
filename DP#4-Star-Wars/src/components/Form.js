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
		<div className="container col-sm-4">
			<form className="card" onSubmit={this._handleSubmit}>
				<div className="card-block">
					<label htmlFor="pilot">
						Enter pilot's name:
					</label>
					<input  className="form-control" onChange={this._handleNameChange} name="pilot" type="text"/>
				</div>
				<div className="pilotName h2">{this.state.pilotName}</div>
				<input className="btn btn-primary width-50%" type="submit" value="Submit"/>
			</form>
		</div>
		)
	}
}

//  FORM: SUBMIT METHOD
// handleSubmit below:
// See form lesson for details.
// Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
// Then, set the value of the input back to an empty string.