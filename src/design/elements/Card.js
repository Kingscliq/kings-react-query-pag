import styled from "styled-components";
import { layout, flexbox, grid, space, color } from "styled-system";

const Card = styled.div`
	padding: 20px 40px;
	${layout}
	${flexbox}
    ${grid}
    ${space}
    ${color}
`;

export default Card;
