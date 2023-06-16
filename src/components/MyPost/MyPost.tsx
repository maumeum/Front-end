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
import dayjs from 'dayjs';

import TruncatedDescription from '@components/MyPost/TruncatedDescription';
import { SmallButton } from '@components/Buttons/SmallButton';
import { del } from '@api/api';
import { TabTypes } from '@src/types/myPageConstants';
import Swal from 'sweetalert2';
import alertData from '@utils/swalObject';

interface PostProps {
	communityData: {
		title: string;
		content: string;
		createdAt: string;
		_id: string;
		postType?: string;
	};
	onRemovePost: (id: string) => void;
	currTab?: string;
	onClick?: () => void;
}

function truncateTitle(title: string) {
	const maxLength = 55;
	return title.length <= maxLength ? title : `${title.slice(0, maxLength)}...`;
}

function truncateDate(createdAt: string) {
	return dayjs(createdAt).format('YYYY-MM-DD');
}

function MyPost({ currTab, communityData, onRemovePost, onClick }: PostProps) {
	const { title, content, postType, createdAt, _id } = communityData;
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
				await del(`/api/review/users/${_id}`, {});
				Swal.fire(alertData.successMessage('리뷰가 삭제되었습니다.'));
				onRemovePost(communityData._id);
			} catch (error) {
				Swal.fire(alertData.errorMessage('리뷰 삭제에 실패했습니다.'));
			}
		} else if (currTab === TabTypes.WRITTEN_POSTS) {
			try {
				await del(`/api/community/${_id}`, {});
				onRemovePost(communityData._id);
				Swal.fire(alertData.successMessage('게시글이 삭제되었습니다.'));
			} catch (error) {
				Swal.fire(alertData.errorMessage('게시글 삭제에 실패했습니다.'));
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
						<p>{postType ? postType : '같이봉사해요'}</p>
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
