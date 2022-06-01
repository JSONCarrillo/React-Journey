import React from "react";
import CalculatorScale from "./CalculatorScale";

const scaleNames = {
	c: "Celsius",
	f: "Farenheit",
};

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = { temperature: "" };
	}

	handleChange(e) {
		this.setState({ temperature: e.target.value });
	}

	render() {
		const temperature = this.props.temperature;
		const scale = this.props.scale;
		return (
			<fieldset>
				<legend>Enter Temperature in {scaleNames[scale]}</legend>
				<input value={temperature} onChange={this.handleChange} />
			</fieldset>
		);
	}
}

export default TemperatureInput;