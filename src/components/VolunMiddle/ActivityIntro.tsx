import { useState, useEffect } from 'react';
import {
	Container,
	TitleContainer,
	Square,
	Title,
	ImgContainer,
	ContentsContainer,
	Content,
} from './ActivityStyle';
import DataType from '@src/types/dataType.ts';
import { get } from '@api/api';

const apiURL = import.meta.env.VITE_API_URL;

type ActivityIntroProps = {
	postId: string;
	Uuid: string;
};

// eslint-disable-next-line react/prop-types
const ActivityIntro: React.FC<ActivityIntroProps> = ({ postId, Uuid }) => {
	const [post, setPost] = useState<any>([]);

	useEffect(() => {
		const fetchPost = async () => {
			const response = await get<DataType>(`/api/volunteers/${postId}`, {
				data: {
					uuid: Uuid,
				},
			});
			setPost(response.data);
			console.log(response.data);
		};
		fetchPost();
	}, []);

	const hasPostImage = !!post.images;
	return (
		<>
			<Container>
				<TitleContainer>
					<Square></Square>
					<Title>어떤 활동을 하게 되나요?</Title>
				</TitleContainer>

				{hasPostImage && (
					<ImgContainer>
						{post.images.map((image: any, index: any) => (
							<img key={index} src={`${apiURL}/${image}`} alt='content-image' />
						))}
					</ImgContainer>
				)}

				<ContentsContainer>
					<Content>{post.content}</Content>
				</ContentsContainer>
			</Container>
		</>
	);
};

export default ActivityIntro;
