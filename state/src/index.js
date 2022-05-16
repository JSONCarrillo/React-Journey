import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}
	// Sets up timer when it is first rendered using the special method below
	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	// clears the timer when the DOM produced by the component is removed
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	// tick method to update the state
	tick() {
		this.setState({
			date: new Date(),
		});
	}

	render() {
		return (
			<div>
				<h1>Hello!</h1>
				<h2>The time is {this.state.date.toLocaleTimeString()}</h2>
			</div>
		);
	}
}

root.render(<Clock />);
