import React, { Component } from 'react'

export default class PlayListForm extends Component {

	constructor() {
		super()

		this.state = {
		 	userName: '',
		 	artistBand: '',
		 	songTitle: '',
		 	songNotes: ''
		}
	} // end constructor()

	handleFormInput = (event) => {
		//TODO:
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState(
			{userName: event.target.value}
		)
	}

	addToList = (event) => {
		event.preventDefault();
		this.setState({userName: event.target.value, songTitle: event.target.value, songArtist: event.target.value, songNotes: event.target.value});
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
		this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
	}


} // end PlayListForm