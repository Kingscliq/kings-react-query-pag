import React from "react";
import Card from "../design/elements/Card";
import Text from "../design/elements/Text";

const Planet = ({ planet }) => {
	return (
		<Card bg="black" my="30px">
			<Text fontSize="18px">{planet.name}</Text>
			<Text color="#aaa" fontSize="14px">
				Population - {planet.population}
			</Text>
			<Text color="#aaa" fontSize="14px">
				Terrain - {planet.terrain}
			</Text>
		</Card>
	);
};

export default Planet;
