import React, { Component } from 'react'
import PlayListItem from  './PlayListItem'

export default class PlayList extends Component {

	constructor() {
		super()

		this.state = {
			songs: []
		}
	} // end constructor()

	componentDidMount() {
		fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
			return results.json();
		}).then(data => {
			this.setState({songs: data});
			console.log("state", this.state.songs);
		})
	}

} // end PlayListItem
