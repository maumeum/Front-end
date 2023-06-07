import {
	PostListContainer,
	PostTitle,
	PostContents,
	PostListLine,
} from './PostListStyle';

type PostListProps = {
	postTitle: string;
	postContents: string;
};
const PostList = ({ postTitle, postContents }: PostListProps) => {
	return (
		<>
			<PostListLine />
			<PostListContainer>
				<PostTitle>{postTitle}</PostTitle>
				<PostContents>{postContents}</PostContents>
			</PostListContainer>
		</>
	);
};

export default PostList;
