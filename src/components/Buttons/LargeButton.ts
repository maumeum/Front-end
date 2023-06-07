import styled from 'styled-components';

interface LargeButtonProps {
	disabled?: boolean;
}
const LargeButton = styled.button<LargeButtonProps>`
	margin-top: 6rem;
	width: 45rem;
	height: 5.5rem;
	background-color: ${({ disabled }) => (disabled ? '#d9eabe ' : '#afcd81')};
	color: #ffffff;
	border: none;
	border-radius: 8px;
	cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
`;

export default LargeButton;
