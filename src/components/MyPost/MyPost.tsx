import { useState } from 'react';
import {
	PostListContainer,
	PostBox,
	Title,
	Description,
	PostInfo,
	ButtonContainer,
} from './myPost';

import Modal from '@components/Modal/Modal.tsx';
import TruncatedDescription from '@components/MyPost/TruncatedDescription';
import { SmallButton } from '@components/Buttons/SmallButton';

type PostProps = {
	data: {
		title: string;
		content: string;
		category: string;
		date: string;
	};
	currTab?: string;
};

function truncateTitle(title: string) {
	const maxLength = 55;
	return title.length <= maxLength ? title : `${title.slice(0, maxLength)}...`;
}

function MyPost({ currTab, data }: PostProps) {
	const { title, content, category, date } = data;
	const [isOpen, setOpen] = useState(false);
	const [isShowMore, setIsShowMore] = useState<boolean>(false);
	const truncatedTitle = truncateTitle(title);

	const handleButtonClick = () => {
		if (currTab === '내가 쓴 리뷰') {
			console.log('리뷰임');
			setOpen(true);
		} else if (currTab === '내가 쓴 게시글') {
			console.log('내가 쓴글임');
		}
	};

	return (
		<>
			<PostListContainer>
				<PostBox>
					<Title>{truncatedTitle}</Title>
					<Description>
						<TruncatedDescription
							content={content}
							isShowMore={isShowMore}
							setIsShowMore={setIsShowMore}
						/>
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
