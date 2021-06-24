import React from "react";
import { useQuery } from "react-query";
import client from "../api";
import Text from "../design/elements/Text";
import Container from "../design/elements/Container";
import Person from "./person";
import InfiniteLoader from "../design/elements/Loader";
import Button from '../design/elements/Button'
const getPeople = async () => {
	const res = await client.get("/people");
	return res.data.results;
};

const Planets = () => {
	const [page, setPage] = React.useState(1)
	const { data, status } = useQuery("people", getPeople, {
		staleTime: 10000,
	});
	console.log(data);
	return (
		<Container>
			{status === "loading" ? <InfiniteLoader /> : null}
			{status === "error" ? <Text>Error fetching Data...</Text> : null}
			{status === "success"
				? data.map((person) => {
						return <Person person={person} key={person.name} />;
				  })
				: null}
			{}

			{data && (
				<>
					<Text fontSize="1rem" color="#fff" my="1rem">
						Current Page -{" "}
					</Text>
					<Button
						fontSize="1rem"
						my="20px"
						mr="10px"
						px="50px"
						py="10px"
						onClick={() => setPage(3)}>
						Previous Page
					</Button>
					<Button
						fontSize="1rem"
						my="20px"
						mr="10px"
						px="50px"
						py="10px"
						onClick={() => setPage(3)}>
						Next Page
					</Button>
				</>
			)}
			{/* <Text>Hello World</Text> */}
		</Container>
	);
};

export default Planets;
