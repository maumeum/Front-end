import { useState } from 'react';
import {
	PostListContainer,
	PostBox,
	Title,
	Description,
	PostInfo,
	ButtonContainer,
} from './myPost';

// import Modal from '@components/Modal/Modal.tsx';
import TruncatedDescription from '@components/MyPost/TruncatedDescription';
import { SmallButton } from '@components/Buttons/SmallButton';
import { del } from '@src/api/Api';
import { getToken } from '@src/api/Token';
import Swal from 'sweetalert2';

type PostProps = {
	data: {
		title: string;
		content: string;
		createdAt: string;
		_id: string;
		postType?: string;
	};
	currTab?: string;
};

function truncateTitle(title: string) {
	const maxLength = 55;
	return title.length <= maxLength ? title : `${title.slice(0, maxLength)}...`;
}

function truncateDate(createdAt: string) {
	return createdAt.split('T')[0];
}

function MyPost({ currTab, data }: PostProps) {
	const { title, content, createdAt, postType, _id } = data;
	const [isShowMore, setIsShowMore] = useState<boolean>(false);
	const truncatedTitle = truncateTitle(title);

	const handleButtonClick = () => {
		if (currTab === '내가 쓴 리뷰') {
			console.log('내가 쓴 리뷰임');
		} else if (currTab === '내가 쓴 게시글') {
			console.log('내가 쓴글임');
		}
	};

	const handleDeleteClick = async () => {
		console.log(_id);
		try {
			await del(`/api/review/users/${_id}`, {
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			});
			Swal.fire({
				title: '리뷰가 삭제되었습니다',
				icon: 'success',
				confirmButtonColor: 'var(--button--color)',
			});
		} catch (error) {
			Swal.fire({
				title: '리뷰가 삭제에 실패했습니다.',
				icon: 'success',
				confirmButtonColor: 'var(--button--color)',
			});
		}
	};

	return (
		<>
			<PostListContainer>
				<PostBox>
					{/* //데이터 없으면 없다고 표시 */}
					<Title>{truncatedTitle}</Title>
					<Description>
						<TruncatedDescription
							content={content}
							isShowMore={isShowMore}
							setIsShowMore={setIsShowMore}
						/>
					</Description>

					<PostInfo>
						<p>{truncateDate(createdAt)}</p>
						<p>{postType ? postType : '봉사후기'}</p>
						{currTab === '내가 쓴 게시글' || currTab === '내가 쓴 리뷰' ? (
							<ButtonContainer>
								<SmallButton onClick={handleButtonClick}>수정하기</SmallButton>
								<SmallButton onClick={handleDeleteClick}>삭제하기</SmallButton>
							</ButtonContainer>
						) : null}
					</PostInfo>
				</PostBox>
			</PostListContainer>
		</>
	);
}

export default MyPost;
