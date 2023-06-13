import { useEffect, Dispatch, SetStateAction } from 'react';
import Swal from 'sweetalert2';

import { patch, del } from '@api/api';
import useAuthStore from '@src/store/useAuthStore';
import alertData from '@utils/swalObject';
import {
	PostContainer,
	PostListContainer,
	PostTitle,
	PostBox,
	PostContents,
	PostButtons,
	AcceptButtons,
	PostListLine,
} from './PostListStyle';

type PostListProps = {
	postTitle: string;
	postContents: string;
	onClick: () => void;
	postId?: string;
	postType?: string;
	volunteerId?: string;
	setIsModified?: Dispatch<SetStateAction<boolean>>;
};
const PostList = ({
	postTitle,
	postContents,
	onClick,
	postId,
	postType,
	volunteerId,
	setIsModified,
}: PostListProps) => {
	const { userData, getUserData } = useAuthStore();
	useEffect(() => {
		getUserData();
	}, []);

	const AcceptClick = () => {
		Swal.fire(alertData.AcceptReported).then((result) => {
			if (result.isConfirmed) {
				if (postType) {
					del(`/api/community/admins/reports/applications/${postId}`, {});
					if (setIsModified) {
						setIsModified(() => true);
					}
				} else if (volunteerId) {
					del(`/api/review/admins/reports/applications/${postId}`, {});
					if (setIsModified) {
						setIsModified(() => true);
					}
				}
				Swal.fire('승인되었습니다.');
			}
		});
	};

	const CancelClick = () => {
		Swal.fire(alertData.cancelReported).then((result) => {
			if (result.isConfirmed) {
				if (postType) {
					patch(`/api/community/admins/reports/cancellations/${postId}`, {});
					if (setIsModified) {
						setIsModified(() => true);
					}
				} else if (volunteerId) {
					patch(`/api/review/admins/reports/cancellations/${postId}`, {});
					if (setIsModified) {
						setIsModified(() => true);
					}
				}
				Swal.fire('취소되었습니다.');
			}
		});
	};

	return (
		<>
			<PostListLine />
			<PostContainer>
				<PostListContainer onClick={onClick}>
					<PostTitle>{postTitle}</PostTitle>
					<PostBox>
						<PostContents>{postContents}</PostContents>
					</PostBox>
				</PostListContainer>
				{userData !== null && userData.role === 'admin' && (
					<>
						<AcceptButtons onClick={AcceptClick}>수락</AcceptButtons>
						<PostButtons onClick={CancelClick}>취소</PostButtons>
					</>
				)}
			</PostContainer>
		</>
	);
};

export default PostList;
