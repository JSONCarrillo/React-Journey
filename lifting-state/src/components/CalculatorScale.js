import React from "react";
import TemperatureInput from "./TemperatureInput";

function toCelsius(farenheit) {
	return ((farenheit - 32) * 5) / 9;
}

function toFarenheit(celsius) {
	return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return "";
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 10000;
	return rounded.toString();
}

class CalculatorScale extends React.Component {
	render() {
		return (
			<div>
				<TemperatureInput scale="c" />
				<TemperatureInput scale="f" />
			</div>
		);
	}
}

export default CalculatorScale;
