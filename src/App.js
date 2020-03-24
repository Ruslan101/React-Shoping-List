import React from 'react';

export default class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = { userName: "" }
	}
	handleClick = () => {

	}
	render() {
		return(
		<>
			<input onChange={this.handleClick} type="text"/>
		</>);
	}
}

class Title extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <h1>{this.children}</h1>;
	}
}