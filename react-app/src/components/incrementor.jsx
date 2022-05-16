import React from "react";

class Incrementor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
		};

		// Use bind to make 'this' work in the callback in the render method
		this.increment = this.increment.bind(this);
	}

	// takes the current state of the counter, then adds it, then updates the state
	increment() {
		this.setState((prevState) => ({
			counter: prevState.counter + 1,
		}));
	}

	render() {
		return (
			<div>
				<h1>{this.state.counter}</h1>
				<button onClick={this.increment}>Click!</button>
			</div>
		);
	}
}

export default Incrementor;
