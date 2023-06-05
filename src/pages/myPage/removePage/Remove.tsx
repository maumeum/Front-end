import React from 'react';
import {
	Button,
	GlobalStyle,
	Input,
	InputBox,
	InputText1,
	Main,
	MainContainer,
	MainTitle,
} from './style';

function Remove() {
	function deleteAccount() {
		alert('delete');
	}
	return (
		<>
			<GlobalStyle />
			<Main>
				<div
					style={{
						border: '1px solid black',
						width: '4rem',
						height: '4rem',
						marginTop: '45rem',
						position: 'absolute',
					}}
				></div>
				<MainContainer>
					<MainTitle>계정을 삭제하시려면 아래 정보를 입력해주세요</MainTitle>

					<Input>
						<InputText1>이메일</InputText1>
						<InputBox type='text' placeholder='Email'></InputBox>
					</Input>

					<Input>
						<InputText1>비밀번호</InputText1>
						<InputBox type='password' placeholder='Password'></InputBox>
					</Input>
					<Button onClick={deleteAccount}>계정 삭제하기</Button>
				</MainContainer>
			</Main>
		</>
	);
}

export default Remove;
