import React from "react";
import { useQuery } from "react-query";
import * as api from "../api";
import Text from "../design/elements/Text";
import Container from "../design/elements/Container";
import Planet from "./planet";
import InfiniteLoader from "../design/elements/Loader";
import Button from "../design/elements/Button";


const Planets = () => {
	
	const [page, setPage] = React.useState(1);


	

	const { data, isPreviousData, isLoading, isError } = useQuery(
		
		["planets", page],
		() => api.getPlanets(page),
		{ keepPreviousData: true },
	);
	console.log(data);

	return (
		<Container>
			<Text fontSize="2rem" textAlign="center">
				Planets
			</Text>

			{isLoading ? <InfiniteLoader /> : null}
			
			{isError ? (
				<Text color="red">Error fetching Data...</Text>
			) : null}
			{data
				? data.results.map((planet) => {
						return <Planet planet={planet} key={planet.name} />;
				  })
				: null}

			{/* <Text>Hello World</Text> */}
			{data && (
				<>
					<Text fontSize="1rem" color="#fff" my="1rem">
						Current Page - {page}
					</Text>
					<Button
						fontSize="1rem"
						my="20px"
						mr="10px"
						px="50px"
						py="10px"
						disabled={page === 1}
						onClick={() => setPage(page - 1)}>
						Previous Page
					</Button>
					<Button
						fontSize="1rem"
						my="20px"
						mr="10px"
						px="50px"
						py="10px"
						disabled={isPreviousData || !data.next}
						onClick={() => {
							if (!isPreviousData && data?.next) {
								setPage((oldPage) => oldPage + 1);
							} else {
								return page;
							}
						}}>
						Next Page
					</Button>
				</>
			)}
		</Container>
	);
};

export default Planets;
