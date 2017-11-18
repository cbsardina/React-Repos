import React, { Component } from 'react'

export default class VehicleInfo extends Component {
	render() {
		return (
			<div className="card text-center col-lg-3 p-0 m-4">
				<div className="card-block p-3 m-0">
					<h3 className="card-title">{this.props.vhcl.name}</h3>
					<p className="card-text">{this.props.vhcl.model}</p>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item"><strong>Specs:</strong></li>
					<li className="list-group-item">Manufacturer: {this.props.vhcl.manufacturer}</li>
					<li className="list-group-item">Max Speed: {this.props.vhcl.max_atmosphering_speed}</li>
					<li className="list-group-item">Length: {this.props.vhcl.length}</li>
					<li className="list-group-item">Cargo Capacity: {this.props.vhcl.cargo_capacity}</li>
					<li className="list-group-item">Class: {this.props.vhcl.vehicle_class}</li>
					<li className="list-group-item">Crew: {this.props.vhcl.crew}</li>
					<li className="list-group-item">Passengers: {this.props.vhcl.passengers}</li>
				</ul>
			</div>
		)
	}

}