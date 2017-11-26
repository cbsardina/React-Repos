import React, { Component } from 'react'

export default class PlayListForm extends Component {

	constructor() {
		super()

		this.state = {
		 	userName: '',
		 	songTitle: '',
		 	songArtist: '',
		 	songNotes: ''
		}
	} // end constructor()

	handleFormChange = (event) => {
		let inputName = event.target.name;
		this.setState(
			{inputName: event.target.value}
		);
		console.log(event.target.value)
	} // end handleFormChange fn

	addToList = (event) => {
		event.preventDefault();
		this.setState(
			{
				userName: event.target.value,
				songTitle: event.target.value,
				songArtist: event.target.value,
				songNotes: event.target.value
			}
		);

		let listItem = JSON.stringify(this.state);

		fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
				method: "POST",
				body: listItem,
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			}
		).then(response => {
			console.log(response, "yay");

		}).catch(err => {
			console.log(err, "boo!");
		});

		this.setState(
			{
				userName: '',
				songNotes: '',
				songArtist: '',
				songTitle:''
			}
		);
	} // end addToList fn

	render() {
		return(
			<div className="col-6">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>User Name:</label>
						<input value={this.state.userName} onChange={this.handleFormChange} type="text" className="form-control" id="userName" placeholder="Name or User Name"/>
					</div>
					<div className="form-group">
						<label>Artist/Band:</label>
						<input value={this.state.songArtist} onChange={this.handleFormChange} type="text" className="form-control" id="songArtist" placeholder="Artist or Band Name"/>
					</div>
					<div className="form-group">
						<label>Song Title:</label>
						<input value={this.state.songTitle} onChange={this.handleFormChange} type="text" className="form-control" id="songTitle" placeholder="Song Title"/>
					</div>
					<div className="form-group">
						<label>Notes about Song:</label>
						<textarea value={this.state.songNotes} onChange={this.handleFormChange} className="form-control" id="songNotes" rows="3"></textarea>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		)
	} // end render()


} // end PlayListForm