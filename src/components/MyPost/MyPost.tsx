import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	PostListContainer,
	PostBox,
	Title,
	Description,
	PostInfo,
	ButtonContainer,
} from './myPost';

import TruncatedDescription from '@components/MyPost/TruncatedDescription';
import { SmallButton } from '@components/Buttons/SmallButton';
import { del } from '@src/api/Api';
import { getToken } from '@src/api/Token';
import { TabTypes } from '@src/types/EnumTypes';
import Swal from 'sweetalert2';

type PostProps = {
	data: {
		title: string;
		content: string;
		createdAt: string;
		_id: string;
		postType?: string;
	};
	onRemovePost: (id: string) => void;
	currTab?: string;
};

function truncateTitle(title: string) {
	const maxLength = 55;
	return title.length <= maxLength ? title : `${title.slice(0, maxLength)}...`;
}

function truncateDate(createdAt: string) {
	return createdAt.split('T')[0];
}

function MyPost({ currTab, data, onRemovePost }: PostProps) {
	const { title, content, createdAt, postType, _id } = data;
	const [isShowMore, setIsShowMore] = useState<boolean>(false);
	const truncatedTitle = truncateTitle(title);
	const navigate = useNavigate();

	const handleButtonClick = () => {
		if (currTab === TabTypes.WRITTEN_REVIEW) {
			navigate(`/review/${_id}`);
		} else if (currTab === TabTypes.WRITTEN_POSTS) {
			navigate(`/community/${_id}`);
		}
	};

	const handleDeleteClick = async () => {
		if (currTab === TabTypes.WRITTEN_REVIEW) {
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
				onRemovePost(data._id);
			} catch (error) {
				Swal.fire({
					title: '리뷰가 삭제에 실패했습니다.',
					icon: 'success',
					confirmButtonColor: 'var(--button--color)',
				});
			}
		} else if (currTab === TabTypes.WRITTEN_POSTS) {
			try {
				await del(`/api/community/${_id}`, {
					headers: {
						Authorization: `Bearer ${getToken()}`,
					},
				});
				onRemovePost(data._id);
				Swal.fire({
					title: '게시글 삭제되었습니다',
					icon: 'success',
					confirmButtonColor: 'var(--button--color)',
				});
			} catch (error) {
				Swal.fire({
					title: '게시글 삭제에 실패했습니다.',
					icon: 'error',
					confirmButtonColor: 'var(--button--color)',
				});
			}
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
						<p>{truncateDate(createdAt)}</p>
						<p>{postType ? postType : '봉사후기'}</p>
						{currTab === TabTypes.WRITTEN_POSTS ||
						currTab === TabTypes.WRITTEN_REVIEW ? (
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
