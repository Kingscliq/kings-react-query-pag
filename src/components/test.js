import React from "react";
import { useQuery, usePaginatedQuery, useQueryClient } from "react-query";
import client from "../api";
import Text from "../design/elements/Text";
import Container from "../design/elements/Container";
import Planet from "./planet";
import InfiniteLoader from "../design/elements/Loader";
import Button from "../design/elements/Button";
// const getPlanets = async (key, greeting, page = 2) => {
// 	console.log(page);
// 	try {
// 		const res = await client.get(`/planets/?page=${page}`);
// 		return res.data.results;
// 	} catch (err) {
// 		console.log(err);
// 	}
// };
const getPlanets = async (key, page = 1) => {
	console.log(page);
	try {
		const res = await client.get(`/planets/?page=${page}`);
		return res.data.results;
	} catch (err) {
		console.log(err);
	}
};

const Planets = () => {
	const [page, setPage] = React.useState(1);
	const queryClient = useQueryClient();

	const { resolvedData, latestData, status } = usePaginatedQuery(
		["planets", page],
		() => getPlanets(page),
		{
			keepPreviousData: true,
			staleTime: 5000,
		},
	);
	console.log(resolvedData);
	// React.useEffect(() => {
	// 	if (data?.hasMore) {
	// 		queryClient.prefetchQuery(["planets", page + 1], () =>
	// 			getPlanets(page + 1),
	// 		);
	// 	}
	// }, [data, page, queryClient]);
	return (
		<Container>
			<Text fontSize="2rem" textAlign="center">
				Planets
			</Text>

			{status === "loading" ? <InfiniteLoader /> : null}
			{/* <Text>Loading Data...</Text> */}
			{status === "error" ? (
				<Text color="red">Error fetching Data...</Text>
			) : null}
			{status === "success"
				? resolvedData.map((planet) => {
						return <Planet planet={planet} key={planet.name} />;
				  })
				: null}
			{}
			{/* <Text>Hello World</Text> */}
			{resolvedData && (
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
						onClick={() => setPage((old) => Math.max(old - 1), 0)}>
						Previous Page
					</Button>
					text
					<Button
						fontSize="1rem"
						my="20px"
						mr="10px"
						px="50px"
						py="10px"
						onClick={() =>
							setPage((oldPage) =>
								resolvedData.hasMore ? oldPage + 1 : oldPage,
							)
						}>
						Next Page
					</Button>
				</>
			)}
		</Container>
	);
};

export default Planets;
