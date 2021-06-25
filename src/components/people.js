import React from "react";
import { useQuery } from "react-query";
import * as api from "../api";
import Text from "../design/elements/Text";
import Container from "../design/elements/Container";
import Person from "./person";
import InfiniteLoader from "../design/elements/Loader";
import Button from "../design/elements/Button";

const People = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading, isError, isPreviousData } = useQuery(["people", page], 
  () => api.getPeople(page), 
	{keepPreviousData: true}
  );
  console.log(data);
  return (
    <Container>
      <Text fontSize="2rem" textAlign="center">
        People
      </Text>
      {isLoading ? <InfiniteLoader /> : null}
      {isError ? <Text>Error fetching Data...</Text> : null}
      {data
        ? data.results.map((person) => {
            return <Person person={person} key={person.name} />;
          })
        : null}

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
			disabled = {page === 1 }
            onClick={() => setPage(page - 1)}
          >
            Previous Page
          </Button>
          <Button
            fontSize="1rem"
            my="20px"
            mr="10px"
            px="50px"
            py="10px"
			disabled={!data.next}
            onClick={() => {
              if (!isPreviousData && data?.next) {
                setPage((oldPage) => oldPage + 1);
              } else {
                return page;
              }
            }}
          >
            Next Page
          </Button>
        </>
      )}
      {/* <Text>Hello World</Text> */}
    </Container>
  );
};

export default People;
