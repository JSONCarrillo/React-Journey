import React from "react";
import BoilingVirdict from "./BoilingVerdict";

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = { temperature: "" };
	}

	handleChange(e) {
		this.setState({ temperature: e.target.value });
	}

	render() {
		const temperature = this.state.temperature;
		return (
			<fieldset>
				<legend>Enter temperature in celcius</legend>
				<input value={temperature} onChange={this.handleChange} />
				<BoilingVirdict celsius={parseFloat(temperature)} />
			</fieldset>
		);
	}
}

export default Calculator;
