import React, { Component } from 'react'
import VehicleInfo from './VehicleInfo'

export default class VehicleCard extends Component {

	constructor() {
		super()
	}

	render() {
		return (
			<div className="container">
				<div className="row">/>
					{this.props.vhcl.map((v) => {
						return (
							<VehicleInfo key={v.name} vhcl={v}/>
						)
					})}
				</div>
			</div>

		)
	}

}