import React from "react";

function BoilingVirdict(props) {
	if (props.celsius >= 100) {
		return <p>Water would boil</p>;
	}
	return <p>Water would not boil</p>;
}

export default BoilingVirdict;
