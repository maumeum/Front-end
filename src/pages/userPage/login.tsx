import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { post } from '@api/Api';
import { setToken } from '@api/Token';
import {
	LoginSection,
	LogoContainer,
	LogoImage,
	LoginForm,
	EmailInput,
	PasswordInput,
	CheckEmail,
	CheckData,
	SignUpButton,
} from './style';
import LargeButton from '@components/Buttons/LargeButton';
import { validEmail } from '@utils/signUpCheck';
import mainLogo from '@assets/icons/mainlogo.svg';

const Login = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [checkEmail, setCheckEmail] = useState<boolean>(true);
	const [checkData, setCheckData] = useState<boolean>(true);

	const navigate = useNavigate();

	//이메일, 비밀번호 value
	const getFormChanger =
		(setter: React.Dispatch<React.SetStateAction<string>>) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setter(e.target.value);
		};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setCheckEmail(true);

		if (email === '' || password === '') {
			return setCheckData(false);
		} else if (!validEmail(email)) {
			setCheckData(true);
			return setCheckEmail(false);
		}
		setCheckData(true);

		const response: { token: string } = await post('/api/login', {
			email,
			password,
		});

		// 토큰이 있다면 localStorage에 토큰 저장
		if (response.token) {
			setToken(response.token);
		}

		setCheckData(true);
		navigate('/');
		window.location.reload();
	};

	return (
		<LoginSection>
			<LogoContainer>
				<LogoImage src={mainLogo} alt='mainLogo' />
			</LogoContainer>
			<LoginForm onSubmit={handleSubmit}>
				<EmailInput
					placeholder='이메일'
					value={email}
					onChange={getFormChanger(setEmail)}
				/>
				<PasswordInput
					type='password'
					placeholder='비밀번호'
					value={password}
					onChange={getFormChanger(setPassword)}
				/>
				{!checkData ? (
					<CheckData>이메일과 비밀번호를 모두 입력해주세요.</CheckData>
				) : (
					!checkEmail && (
						<CheckEmail>이메일 형식에 맞춰 입력해주세요.</CheckEmail>
					)
				)}
				<LargeButton type='submit'>로그인</LargeButton>
				<SignUpButton to='/sign_up'>회원가입</SignUpButton>
			</LoginForm>
		</LoginSection>
	);
};

export default Login;
