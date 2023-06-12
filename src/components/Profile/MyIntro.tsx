import { useState, ChangeEvent, MouseEvent, useEffect } from 'react';
import {
	IntroContainer,
	IntroBox,
	FormBtn,
	CheckLength,
	FormContainer,
} from '@components/Profile/myIntro.ts';
import Swal from 'sweetalert2';
import { patch } from '@src/api/api';
import useAuthStore from '@src/store/useAuthStore.ts';
import alertData from '@src/utils/swalObject';

function MyIntro() {
	const { userData, getUserData } = useAuthStore();
	const [intro, setIntro] = useState<string | undefined>('');
	const [introLength, setIntroLength] = useState<number>(0);
	const [isOver, setIsOver] = useState<boolean>(false);

	useEffect(() => {
		getUserData();
	}, []);

	useEffect(() => {
		setIntro(userData?.introduction);
	}, [userData]);

	const handleIntroChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const inputLength = e.target.value.length;

		if (inputLength <= 200) {
			setIntro(e.target.value);
			setIsOver(false);
		} else {
			setIsOver(true);
		}

		setIntroLength(inputLength);
	};

	const handleSaveClick = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (isOver) {
			Swal.fire(alertData.errorMessage('200자가 초과되었습니다.'));
			return;
		}
		{
			try {
				await patch('/api/users/introduction', { introduction: intro });
				Swal.fire(alertData.successMessage('자기소개가 변경되었습니다.'));
			} catch (error) {
				Swal.fire(alertData.errorMessage('자기소개 변경에 실패했습니다.'));
				return;
			}
		}
	};
	return (
		<>
			<FormContainer>
				<IntroContainer>
					<IntroBox
						placeholder='최대 200자 까지 가능합니다'
						onChange={handleIntroChange}
						value={intro}
					/>
					<CheckLength>{`${introLength} / 200`}</CheckLength>
					<FormBtn onClick={handleSaveClick}>저장하기</FormBtn>
				</IntroContainer>
			</FormContainer>
		</>
	);
}

export default MyIntro;
