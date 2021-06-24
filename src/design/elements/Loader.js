import React from "react";
import InfiniteLoader from "../assets/img/loader.svg";
import Text from "../../design/elements/Text";

const loaderStyles = {
	height: "500px",
	width: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};
const Loader = () => {
	return (
		<div style={loaderStyles}>
			<img src={InfiniteLoader} alt="Loading Data" height="50" width="50" />
			<Text>Loading ...</Text>
		</div>
	);
};

export default Loader;
