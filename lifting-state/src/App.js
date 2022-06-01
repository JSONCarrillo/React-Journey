import React from "react";
import Calculator from "./components/Calculator";
import TemperatureInput from "./components/TemperatureInput";

class App extends React.Component {
	render() {
		return (
			<div>
				<Calculator />
				<TemperatureInput />
			</div>
		);
	}
}

export default App;
