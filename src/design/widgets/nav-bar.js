import React from "react";
import Button from "../elements/Button";
import Container from "../elements/Container";
import Text from "../elements/Text";
const Navbar = ({ setPage }) => {
	return (
		<Container>
			<nav>
				<Text fontSize="3rem" textAlign="center">
					Star Wars
				</Text>
				<div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
					<Button
						textAlign="center"
						my="20px"
						mr="10px"
						px="70px"
						py="10px"
						onClick={() => setPage("planets")}>
						Planets
					</Button>
					<Button
						my="20px"
						px="70px"
						py="10px"
						textAlign="center"
						onClick={() => setPage("people")}>
						People
					</Button>
				</div>
			</nav>
		</Container>
	);
};

export default Navbar;
