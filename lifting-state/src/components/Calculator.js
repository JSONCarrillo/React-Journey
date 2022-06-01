import React from "react";
import BoilingVerdict from "./BoilingVerdict";

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		// allows us to use this.handlechange
		this.handleChange = this.handleChange.bind(this);
		this.state = { temperature: "", scale: "c" };
	}

	//on change state is set to be whatever is in the input
	handleChange(e) {
		this.setState({ temperature: e.target.value });
	}

	render() {
		const temperature = this.state.temperature;
		return (
			<fieldset>
				<legend>Enter temperature in celcius</legend>
				<input value={temperature} onChange={this.handleChange} />
				<BoilingVerdict celsius={parseFloat(temperature)} />
			</fieldset>
		);
	}
}

export default Calculator;
