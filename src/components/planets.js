import React from "react";
import { useQuery, useQueryClient } from "react-query";
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

const Planets = () => {
	const queryClient = useQueryClient();
	const [page, setPage] = React.useState(1);
	// const [currentPage, setCurrentPage] = React.useState(page);

	// Get Planet from Api
	const getPlanets = async (key, page = 1) => {
		// console.log(page);
		try {
			const res = await client.get(`/planets/?page=${page}`);
			console.log(res);
			console.log(res.data.next);
			return res.data;
		} catch (err) {
			console.log(err);
		}
	};

	const { data, isPreviousData, status } = useQuery(
		// 	{
		// 	queryKey: ["planets", page],
		// 	queryFn: getPlanets,
		// 	keepPreviousData: true,
		// 	staleTime: 5000,
		// }
		["planets", page],
		() => getPlanets(page),
		{ keepPreviousData: true },
	);
	console.log(data);

	//  Prefetch the Next Page once the component Mounts====================================================================
	React.useEffect(() => {
		if (data?.next) {
			queryClient.prefetchQuery(["planets", page + 1], () =>
				getPlanets(page + 1),
			);
		}
	}, [data, page, queryClient]);
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
						onClick={() => setPage((old) => Math.max(old - 1), 0)}>
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
