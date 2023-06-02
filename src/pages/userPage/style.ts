import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

// 로그인 css

export const LoginSection = styled.div`
	position: relative;
	left: 68.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 8rem 0 34rem;
	width: 55rem;
	height: 75rem;
`;

export const LogoContainer = styled.div`
	margin: 5rem 0 1.5rem;
	width: 12rem;
	height: 12rem;
`;

export const LogoImage = styled.img`
	width: 12rem;
	height: 12rem;
`;

export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 55rem;
	height: 55rem;
	border: 1px solid #d9d9d9;
`;

export const EmailInput = styled.input`
	margin-top: 7rem;
	width: 45rem;
	height: 6rem;
	border: none;
	outline: none;
	border-bottom: 2px solid #ccc;
	font-size: 2rem;
	font-weight: bold;
`;

export const PasswordInput = styled.input`
	width: 45rem;
	height: 6rem;
	border: none;
	outline: none;
	border-bottom: 2px solid #ccc;
	font-size: 2rem;
	font-weight: bold;
`;
export const CheckData = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 3rem;
	width: 45rem;
	height: 6rem;
	background-color: #fafafa;
	color: #eb5757;
	font-size: 1.3rem;
`;

export const CheckEmail = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 3rem;
	width: 45rem;
	height: 6rem;
	background-color: #fafafa;
	color: #eb5757;
	font-size: 1.3rem;
`;

export const SignUpButton = styled(NavLink)`
	align-self: flex-start;
	margin: 13rem 0 3rem 5rem;
	color: #888888;
	font-size: 1.6rem;
	font-weight: 300;
	text-decoration: none;
`;

type SignUpProps = {
	mypage?: string;
};

// 회원가입 css

export const SignUpSection = styled.div<SignUpProps>`
	position: relative;
	left: 68.5rem;
	margin: 17rem 0 26.5rem;
	width: 55rem;
	height: 77rem;
	background-color: #f7f8f9;
	border-radius: 20px;
	filter: drop-shadow(0 4px 4px rgb(0, 0, 0, 25%));

	${props =>
		props.mypage === 'mypage' &&
		css`
			width: 60rem;
			margin: 5rem 0 20rem;
			left: 45.5rem;
			cursor: not-allowed;
		`}
`;

export const SignUpForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 4.3rem;
`;

export const InputContainer = styled.div`
	width: 45rem;
`;

export const EmailContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 45rem;
	height: 5.6rem;
	background-color: #ffffff;
	border: ${props => {
		if (props.className === 'submit') {
			return '1px solid #EB5757';
		}
		return '1px solid #CCCCCC;';
	}};
	border-radius: 8px;
	box-sizing: border-box;
`;

export const DataName = styled.p`
	margin-bottom: 0.8rem;
	text-align: start;
	font-size: 1.2rem;
	color: #666666;
`;

export const EmailData = styled.input`
	padding-left: 1rem;
	border: none;
	outline: none;
	text-align: start;
	font-size: 1.6rem;
	color: #666666;
`;

export const EmailButton = styled.button`
	width: 7.5rem;
	height: 3.5rem;
	margin-right: 1.5rem;
	background-color: var(--button--color);
	border: none;
	border-radius: 5px;
	color: #ffffff;
	font-weight: 100;
	font-size: 1.2rem;
	cursor: pointer;
`;

export const DataInput = styled.input`
	width: 45rem;
	height: 5.6rem;
	padding-left: 1rem;
	border: ${props => {
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

export const CheckValue = styled.p`
	text-align: start;
	margin: 0.2rem 0.3rem 0;
	color: #eb5757;
	font-size: 1.2rem;
`;
