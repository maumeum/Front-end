import styled from 'styled-components';

export const UserFormContainer = styled.div`
	width: 70rem;
	min-height: 50rem;
`;

export const InputContainer = styled.div`
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	p {
		align-self: flex-start;
	}
`;

export const DataText = styled.textarea`
	width: 60rem;
	height: 20rem;
	padding: 1rem 0 0 1rem;
	resize: none;
	border: ${(props) => {
		if (props.value === '' && props.className !== '') {
			return '1px solid #EB5757';
		}
		return '1px solid #CCCCCC;';
	}};
	outline: none;
	border-radius: 8px;
	box-sizing: border-box;
	font-size: 1.6rem;
`;
