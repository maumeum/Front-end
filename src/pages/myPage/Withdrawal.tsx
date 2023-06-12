import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Container,
	Main,
	MenuBar,
	TabMenu,
} from '@components/MyPage/myPage.ts';
import Tab from '@components/Tab/Tab.tsx';
import Menu from '@components/Menu/Menu.tsx';
import { TabTypes } from '@src/types/myPageConstants';
import TopBar from '@components/TopBar/TopBar.tsx';
import LargeButton from '@components/Buttons/LargeButton';
import {
	SignUpForm,
	WithdrawalSection,
	WithdrawalContainer,
} from '@pages/userPage/style';
import { validEmail, validPassword } from '@src/utils/signUpCheck.ts';
import { emailError, passwordError } from '@src/utils/errorMessage.ts';
import InputForm from '@src/components/UserForm/InputForm.tsx';
import Swal from 'sweetalert2';
import { del } from '@src/api/api';
import { deleteToken } from '@src/api/Token';
import alertData from '@src/utils/swalObject';

function Withdrawal() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [submit, setSubmit] = useState<boolean>(false);
	const tabs = [TabTypes.WITHDRAWAL];
	const navigate = useNavigate();

	// inputValue 함수
	const getFormChanger =
		(setter: React.Dispatch<React.SetStateAction<string>>) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setSubmit(false);
			setter(e.target.value);
		};

	const handleSubmit = async () => {
		if (email === '' || password === '') {
			Swal.fire(alertData.infoMessage('이메일 또는 비밀번호를 확인해주세요.'));
			return;
		}
		setSubmit(true);
		const result = await Swal.fire(
			alertData.doubleCheckMessage('정말 탈퇴하시겠습니까?'),
		);

		if (result.isConfirmed) {
			try {
				await del('/api/users', { email: email, password: password });
			} catch (error) {
				Swal.fire(
					alertData.infoMessage('이메일 또는 비밀번호를 확인해주세요.'),
				);
				return;
			}
			deleteToken();
			navigate('/');
			Swal.fire(
				alertData.successMessage('다음에 다시 만날 날을 기대합니다!👋🏻'),
			);
		}
	};

	return (
		<Container>
			<MenuBar>
				<Menu title={'마이페이지'} />
			</MenuBar>
			<Main>
				<TabMenu>
					<Tab tabs={tabs} />
				</TabMenu>
				<WithdrawalContainer>
					<WithdrawalSection>
						<SignUpForm>
							<InputForm
								submit={submit}
								dataName='이메일'
								inputType='text'
								name='nickname'
								placeholder='이메일을 입력해주세요.'
								value={email}
								onChangeFn={getFormChanger(setEmail)}
								errorMessage={emailError}
								validFn={validEmail}
							/>
							<InputForm
								submit={submit}
								dataName='비밀번호'
								inputType='password'
								name='password'
								placeholder='비밀번호 4~20자 입력'
								value={password}
								onChangeFn={getFormChanger(setPassword)}
								errorMessage={passwordError}
								validPassword={validPassword}
							/>
							<LargeButton onClick={handleSubmit}>탈퇴하기</LargeButton>
						</SignUpForm>
					</WithdrawalSection>
				</WithdrawalContainer>
			</Main>
		</Container>
	);
}

export default Withdrawal;
