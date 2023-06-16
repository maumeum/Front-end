import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { get, del, patch } from '@api/api';
import { getToken } from '@api/token';
import { dateFormatter } from '@src/utils/dateUtils';
import {
	DetailContainer,
	Header,
	Title,
	SubContainer,
	InfoBox,
	UserName,
	Date,
	Btn,
	Line,
	ContentContainer,
	Image,
	Content,
	BtnDelete,
	BtnReport,
	NameBox,
	NanoId,
} from '@src/pages/community/style';
import DataType from '@src/types/dataType';
import useAuthStore from '@src/store/useAuthStore.ts';
import Swal from 'sweetalert2';
import alertData from '@src/utils/swalObject';

const apiURL = import.meta.env.VITE_API_URL;

const ReviewDetail = () => {
	const navigate = useNavigate();
	const { postId } = useParams() as { postId: string };
	const [post, setPost] = useState<any>([]);
	const [loginUser, setLoginUser] = useState(false);
	const [datauser, setDataUser] = useState<any>('');
	const { userData, getUserData } = useAuthStore();

	useEffect(() => {
		const fetchPost = async () => {
			const response = await get<DataType>(`/api/review/detail/${postId}`);
			setPost(response.data);
			setDataUser(response.data.user_id);
		};
		fetchPost();
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const loginUserLogic = async () => {
			const response = await get<DataType>(`/api/review/check/${postId}`);
			setLoginUser(response.data);
		};
		loginUserLogic();
	}, []);

	useEffect(() => {
		getUserData();
	}, []);

	const handleEdit = () => {
		navigate(`/review/edit/${postId}`, {
			state: { postId },
		});
	};

	if (!post) {
		return <div>Loading...</div>;
	}

	const handleDelete = async () => {
		try {
			const token = getToken();
			await del<DataType>(`/api/review/users/${postId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			Swal.fire(alertData.successMessage('게시글이 삭제되었습니다.'));
			navigate('/review');
		} catch (error) {
			console.log('Error delecting post:', error);
		}
	};

	const handleReport = async () => {
		const token = getToken();
		await patch<DataType>(`/api/review/users/reports/${postId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		Swal.fire(alertData.ReportCompleted);
	};

	const { title, createdAt, images, content } = post;
	const hasPostImage = !!images;

	const formattedDate = dateFormatter(
		createdAt,
		'YYYY년 MM월 DD일 HH:mm:ss',
		'ko',
	);

	let formattedContent = [];
	if (content) {
		formattedContent = content.split('\n');
	}

	return (
		<>
			<DetailContainer>
				<Header>
					<Title>{title}</Title>
					<SubContainer>
						<InfoBox>
							<NameBox>
								<UserName>{datauser.nickname}</UserName>
								<NanoId> #{datauser.nanoid}</NanoId>
							</NameBox>
							<Date>작성일 : {formattedDate}</Date>
						</InfoBox>
						{loginUser && <Btn onClick={handleEdit}>수정하기</Btn>}
						{(loginUser ||
							(userData !== null && userData.role === 'admin')) && (
							<BtnDelete onClick={handleDelete}>삭제하기</BtnDelete>
						)}
						{!loginUser && userData !== null && userData.role !== 'admin' && (
							<BtnReport onClick={handleReport}>신고하기</BtnReport>
						)}
					</SubContainer>
				</Header>
				<Line></Line>
				<ContentContainer>
					{hasPostImage && (
						<div>
							{images.map((image: any, index: any) => (
								<Image
									key={index}
									src={`${apiURL}/${image}`}
									alt='content-image'
								/>
							))}
						</div>
					)}
					{/* <Contentdiv> */}
					<Content>
						{formattedContent.map((item: string, index: number) => (
							<p key={index}>{item}</p>
						))}
					</Content>
					{/* </Contentdiv> */}
				</ContentContainer>
			</DetailContainer>
		</>
	);
};

export default ReviewDetail;
