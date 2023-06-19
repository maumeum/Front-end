import { useEffect, Dispatch, SetStateAction } from 'react';
import Swal from 'sweetalert2';

import { patch, del } from '@api/api';
import useAuthStore from '@src/store/useAuthStore';
import alertData from '@utils/swalObject';
import {
	PostBox,
	PostContents,
	PostButtons,
	AcceptButtons,
} from './PostListStyle';

import { Title, PostBox as PostBoxStyle } from '@components/MyPost/myPost';

type PostListProps = {
	postTitle: string;
	postContents: string;
	onClick: () => void;
	postId?: string;
	postType?: string;
	volunteerId?: string;
	comment?: string;
	setIsModified?: Dispatch<SetStateAction<boolean>>;
	isReported?: boolean;
	volunteer?: string;
};
const PostList = ({
	postTitle,
	postContents,
	onClick,
	postId,
	postType,
	volunteerId,
	setIsModified,
	isReported,
	comment,
	volunteer,
}: PostListProps) => {
	const { userData, getUserData } = useAuthStore();
	useEffect(() => {
		getUserData();
	}, []);

	const isAdmin = isReported && userData !== null && userData.role === 'admin';

	const method = async (
		alertData: any,
		axios: any,
		type: string,
		message: string,
	) => {
		const { isConfirmed } = await Swal.fire(alertData);

		if (isConfirmed) {
			if (postType) {
				axios(`/api/community/admins/reports/${type}/${postId}`, {});
			} else if (volunteerId) {
				axios(`/api/review/admins/reports/${type}/${postId}`, {});
			} else if (comment === 'community') {
				axios(`/api/postComments/admins/reports/${type}/${postId}`, {});
			} else if (volunteer === 'volunteer') {
				axios(`/api/volunteers/admins/reports/${type}/${postId}`, {});
			}
			if (setIsModified) {
				setIsModified(() => true);
			}
			Swal.fire(message);
		}
	};

	const AcceptClick = () => {
		method(alertData.acceptReported, del, 'applications', '승인되었습니다');
	};

	const CancelClick = () => {
		method(alertData.cancelReported, patch, 'cancellations', '취소되었습니다');
	};

	return (
		<>
			{/* <PostListLine /> */}
			<PostBoxStyle isCommunity={true}>
				<PostBox onClick={onClick}>
					<Title>{postTitle}</Title>
					<PostBox>
						<PostContents>{postContents}</PostContents>
					</PostBox>
				</PostBox>
				{isAdmin && (
					<>
						<AcceptButtons onClick={AcceptClick}>수락</AcceptButtons>
						<PostButtons onClick={CancelClick}>취소</PostButtons>
					</>
				)}
			</PostBoxStyle>
		</>
	);
};

export default PostList;
