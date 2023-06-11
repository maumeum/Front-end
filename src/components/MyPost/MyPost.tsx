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
import { del } from '@src/api/Api';
import { TabTypes } from '@src/types/myPageConstants';
import Swal from 'sweetalert2';
import alertData from '@src/utils/swalObject';

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
}

function truncateTitle(title: string) {
	const maxLength = 55;
	return title.length <= maxLength ? title : `${title.slice(0, maxLength)}...`;
}

function truncateDate(createdAt: string) {
	return dayjs(createdAt).format('YYYY-MM-DD');
}

function MyPost({ currTab, communityData, onRemovePost }: PostProps) {
	const { title, content, createdAt, postType, _id } = communityData;
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
				Swal.fire(alertData.removeMessage('리뷰'));
				onRemovePost(communityData._id);
			} catch (error) {
				Swal.fire(alertData.failMessage('리뷰 삭제'));
			}
		} else if (currTab === TabTypes.WRITTEN_POSTS) {
			try {
				await del(`/api/community/${_id}`, {});
				onRemovePost(communityData._id);
				Swal.fire(alertData.removeMessage('게시글'));
			} catch (error) {
				Swal.fire(alertData.failMessage('게시글 삭제'));
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
