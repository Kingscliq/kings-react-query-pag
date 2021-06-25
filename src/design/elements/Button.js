import styled from "styled-components";

import {
	space,
	position,
	typography,
} from "styled-system";

const Button = styled.button`
	
	font-size: 1.2rem;
	color: ${(props) => props.theme.colors.light};
	border: 1px solid ${(props) => props.theme.colors.text};
	${space}
	${position}
    ${typography}
	:active {
		border-color: ${(props) => props.theme.colors.text};
	}
	:hover{
		cursor: pointer
	}
	:disabled{
		cursor: no-drop;
		opacity: 0.5
	}
`;

export default Button;
