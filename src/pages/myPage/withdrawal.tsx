import React, { useState } from 'react';
import {
	Container,
	Main,
	MenuBar,
	TabMenu,
} from '@components/MyPage/myPage.ts';
import Tab from '@components/Tab/Tab.tsx';
import Menu from '@components/Menu/Menu.tsx';
import { TabTypes } from '@src/utils/EnumTypes';
import TopBar from '@components/TopBar/TopBar.tsx';
import LargeButton from '@components/Buttons/LargeButton';
import { SignUpForm, WithdrawalSection } from '@pages/userPage/style';
import { validEmail, validPassword } from '@src/utils/signUpCheck.ts';
import { emailError, passwordError } from '@src/utils/errorMessage.ts';
import InputForm from '@src/components/UserForm/InputForm.tsx';
import Swal from 'sweetalert2';

function withdrawal() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [submit, setSubmit] = useState<boolean>(false);
	const [currTab] = useState<TabTypes>(TabTypes.WITHDRAWAL);
	const tabs = [TabTypes.WITHDRAWAL];

	// inputValue 함수
	const getFormChanger =
		(setter: React.Dispatch<React.SetStateAction<string>>) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setSubmit(false);
			setter(e.target.value);
		};

	const handleSubmit = () => {
		if (email === '' || password === '') {
			Swal.fire({
				title: '이메일 또는 비밀번호를 확인해주세요',
				icon: 'error',
				confirmButtonText: '확인',
				confirmButtonColor: '#afcd81',
			});
			return;
		}
		setSubmit(true);
		Swal.fire({
			title: '정말 탈퇴하시겠습니까?',
			icon: 'info',
			showCancelButton: true,
			confirmButtonColor: '#ffd4d4',
			cancelButtonColor: '#afcd81',
			confirmButtonText: '네',
			cancelButtonText: '아니요',
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire(
					'탈퇴되었습니다.',
					'다음에 다시 만날 날을 기대합니다!👋🏻',
					'success',
				);
			}
		});
	};
	return (
		<Container>
			<MenuBar>
				<Menu title={'마이페이지'} />
			</MenuBar>
			<Main>
				<TabMenu>
					<Tab currTab={currTab} tabs={tabs} />
				</TabMenu>

				<WithdrawalSection>
					<TopBar
						title='회원탈퇴'
						text='계정을 삭제하시려면 아래 정보를 입력하세요'
						modal={'modal'}
					/>
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
			</Main>
		</Container>
	);
}

export default withdrawal;
