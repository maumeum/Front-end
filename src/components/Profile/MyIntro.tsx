import React, { useState, ChangeEvent, MouseEvent } from 'react';
import {
	IntroContainer,
	IntroBox,
	FormBtn,
	CheckLength,
} from '@components/Profile/myIntro.ts';
import Swal from 'sweetalert2';
import { FormContainer } from '@components/MyPage/myPage.ts';

function MyIntro() {
	const [intro, setIntro] = useState<string>('');
	const [introLength, setIntroLength] = useState<number>(0);
	const [isOver, setIsOver] = useState<boolean>(false);
	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setIntro(e.target.value);
		setIntroLength(intro.length);
		{
			introLength > 200 && setIsOver(true);
		}
	};

	const handleClick = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		console.log(intro);
		isOver
			? Swal.fire({
					title: '200자가 초과하였습니다',
					icon: 'error',
					confirmButtonText: '확인',
					confirmButtonColor: 'var(--button--color)',
			  })
			: null; //axios 요청해야.
	};
	return (
		<>
			<FormContainer>
				<IntroContainer>
					<IntroBox
						placeholder='최대 200자 까지 가능합니다'
						onChange={handleChange}
					/>
					<CheckLength>{`${introLength} / 200`}</CheckLength>
					<FormBtn onClick={handleClick}>저장하기</FormBtn>
				</IntroContainer>
			</FormContainer>
		</>
	);
}

export default MyIntro;
