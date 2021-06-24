import React from "react";
import Card from "../design/elements/Card";
import Text from "../design/elements/Text";

const Person = ({ person }) => {
	return (
		<Card bg="black" my="30px">
			<Text fontSize="18px">{person.name}</Text>
			<Text color="#aaa" fontSize="14px">
				Gender- {person.gender}
			</Text>
			<Text color="#aaa" fontSize="14px">
				Hair Color - {person.hair_color}
			</Text>
		</Card>
	);
};

export default Person;
