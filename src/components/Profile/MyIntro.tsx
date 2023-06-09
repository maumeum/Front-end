import { useState, ChangeEvent, MouseEvent, useEffect } from 'react';
import {
	IntroContainer,
	IntroBox,
	FormBtn,
	CheckLength,
	FormContainer,
} from '@components/Profile/myIntro.ts';
import Swal from 'sweetalert2';
import { patch } from '@src/api/Api';
import { getToken } from '@src/api/Token';
import useAuthStore from '@src/store/useAuthStore.ts';

function MyIntro() {
	const { userData, initialize } = useAuthStore();

	useEffect(() => {
		initialize();
	}, []);

	useEffect(() => {
		setIntro(userData?.introduction);
	}, [userData]);

	const [intro, setIntro] = useState<string | undefined>('');
	const [introLength, setIntroLength] = useState<number>(0);
	const [isOver, setIsOver] = useState<boolean>(false);
	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setIntro(e.target.value);
		setIntroLength(intro ? intro.length : 0);

		{
			introLength > 200 && setIsOver(true);
		}
	};

	const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		isOver &&
			Swal.fire({
				title: '200자가 초과하였습니다',
				icon: 'error',
				confirmButtonText: '확인',
				confirmButtonColor: 'var(--button--color)',
			});
		{
			try {
				await patch(
					'/api/users/introduction',
					{ introduction: intro },
					{
						headers: {
							Authorization: `Bearer ${getToken()}`,
						},
					},
				);
				Swal.fire({
					title: '자기소개가 변경되었습니다',
					icon: 'success',
					confirmButtonText: '확인',
					confirmButtonColor: 'var(--button--color)',
				});
			} catch (error) {
				console.log(error);
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
						onChange={handleChange}
						value={intro}
					/>
					<CheckLength>{`${introLength} / 200`}</CheckLength>
					<FormBtn onClick={handleClick}>저장하기</FormBtn>
				</IntroContainer>
			</FormContainer>
		</>
	);
}

export default MyIntro;
