import React from "react";

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>Water would boil</p>;
	}
	return <p>Water would not boil</p>;
}

export default BoilingVerdict;
