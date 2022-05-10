import React from "react";
import ReactDOM from "react-dom/client";

// define root
const root = ReactDOM.createRoot(document.getElementById("root"));

/*
// Welcome Component
class Welcome extends React.Component {
	render() {
		// renders a hello with a property of name
		return <h1>Hello, {this.props.name}</h1>;
	}
}

// Welcome component is saved as a variable with an argument for the props
const element = <Welcome name="Alex" />;

// component is rendered
root.render(element);
*/

// input component renders textbox and a button to call the renderName function
class Input extends React.Component {
	render() {
		return (
			<div>
				<input id="name" />
				<button onClick={renderName}>Enter Name</button>
			</div>
		);
	}
}

// Welcome component renders a greeting with a name props argument
class Welcome extends React.Component {
	render() {
		return <h1>Hello, {this.props.name}!</h1>;
	}
}

// renders the new input once a name is entered
function renderName() {
	// saves the value entered into the input component
	let name = document.getElementById("name").value;
	// saves the element as a variable and passes the value of the name input as the Welcome component's props
	const element = (
		<div>
			<Welcome name={name} />
			<Input />
		</div>
	);
	root.render(element);
}

// initial render
root.render(
	<div>
		<h1>Enter Your Name</h1>
		<Input />
	</div>
);
