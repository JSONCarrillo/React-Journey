import React from "react";
import Calculator from "./components/Calculator";
import CalculatorScale from "./components/CalculatorScale";

class App extends React.Component {
	render() {
		return (
			<div>
				<Calculator />
				<CalculatorScale />
			</div>
		);
	}
}

export default App;
