import React, { Component } from 'react';

class App extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <Content myNumber = {this.state.data}>MyNumber</Content>
                    <button className="btn btn-primary" onClick = {this.setNewNumber}>Click It! {this.state.data}</button>
                </div>
	            <div>
		            <Form/>
	            </div>
            </div>
        );
    }
}

class Content extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data: 0
		};

		this.setNewNumber = this.setNewNumber.bind(this)
	}

	setNewNumber() {
		this.setState({data: this.state.data + 1})
	}

    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }

    componentDidMount() {
        console.log('Component DID MOUNT!')
    }

    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    render() {
        return (
            <div className = "card col-md-6">
                <div className="card-block">
                    <h2 className="card-title">Lifecycle Hooks</h2>
                    <h3 className="card-title">Check the console</h3>
                    <p className="card-text">After five seconds the component will unmount</p>
                </div>
            </div>
        );
    }
}

/* * * * * * * * * *
    FORM
 */

class Form extends React.Component {
	constructor(props){
		super(props);

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {name: ''};
	}
	handleNameChange(event){
		this.setState({name: event.target.value});
	}

	handleSubmit(event){
		event.preventDefault();
		alert('Thank you, ' + this.state.name + ' your name was submitted');
	}

	render() {
		return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Your Name:
                    <input onChange={this.handleNameChange} name="name" type="text" value={this.state.name}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
		)
	}
}


export default App;
