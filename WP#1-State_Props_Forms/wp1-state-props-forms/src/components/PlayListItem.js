import React, { Component } from 'react'

export default class PlayListItem extends Component {
	render() {
		return (
			<div className="card">
				<div className="card-block">
					<p className="card-text">{this.props.userName}</p>
					<p className="card-text">{this.props.songArtist}</p>
					<p className="card-text">{this.props.songTitle}</p>
					<p className="card-text">{this.props.songNotes}</p>
				</div>
			</div>
		)
	} // end render()
} // end class PlayListItem