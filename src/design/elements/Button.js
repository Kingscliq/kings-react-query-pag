import styled from "styled-components";

import {
	space,
	position,
	typography,
} from "styled-system";

const Button = styled.button`
	/* padding: 10px 70px;
	margin: 20px auto; */
	font-size: 1.2rem;
	color: ${(props) => props.theme.colors.light};
	border: 1px solid ${(props) => props.theme.colors.text};
	${space}
	${position}
    ${typography}
	:active {
		border-color: ${(props) => props.theme.colors.text};
	}
`;

export default Button;
