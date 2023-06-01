import React, { useState } from 'react';
import {
	PostListContainer,
	PostBox,
	Title,
	Description,
	PostInfo,
	ButtonContainer,
} from './myPost';

import Modal from '../Modal/Modal.tsx';

import { SmallButton } from '../Buttons/SmallButton';

type PostProps = {
	data: {
		title: string;
		content: string;
		category: string;
		date: string;
	};
	currTab?: string;
};

function MyPost({ currTab, data }: PostProps) {
	const { title, content, category, date } = data;

	const truncateTitle = (title: string) => {
		const maxLength = 55;
		if (title.length <= maxLength) {
			return title;
		} else {
			return title.slice(0, maxLength) + '...';
		}
	};
	const [isOpen, setOpen] = useState(false);

	const handleButtonClick = () => {
		if (currTab === '내가 쓴 리뷰') {
			console.log('리뷰임');
			setOpen(true);
		} else if (currTab === '내가 쓴 게시글') {
			console.log('내가 쓴글임');
		}
	};

	const [isShowMore, setIsShowMore] = useState<boolean>(false); //더보기 열고(긴글) 닫기(짧은글)
	const textLimit = 160; //글자수 제한 선언
	const truncatedTitle = truncateTitle(title);
	const shortComment = content.slice(0, textLimit) + ' ...'; //보여줄 짧은 글
	const isLongComment = content.length > textLimit; //긴글인지 확인
	return (
		<>
			<PostListContainer>
				<PostBox>
					<Title>{truncatedTitle}</Title>
					<Description>
						{isLongComment && !isShowMore ? shortComment : content}
						<div
							onClick={() => setIsShowMore(!isShowMore)}
							style={{
								fontSize: '1.1rem',
								marginLeft: '2.1rem',
								cursor: 'pointer',
							}}>
							{content.length > textLimit &&
								(isShowMore ? '[닫기]' : '...[더보기]')}
						</div>
					</Description>

					<PostInfo>
						<p>{date}</p>
						<p>{category}</p>
						{currTab === '내가 쓴 게시글' || currTab === '내가 쓴 리뷰' ? (
							<ButtonContainer>
								<SmallButton onClick={handleButtonClick}>수정하기</SmallButton>
								<SmallButton>삭제하기</SmallButton>
							</ButtonContainer>
						) : null}
						<Modal isOpen={isOpen} setOpen={setOpen} />
					</PostInfo>
				</PostBox>
			</PostListContainer>
		</>
	);
}

export default MyPost;
