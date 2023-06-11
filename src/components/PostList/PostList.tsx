import {
	PostListContainer,
	PostTitle,
	PostContents,
	PostListLine,
} from './PostListStyle';

type PostListProps = {
	postTitle: string;
	postContents: string;
	onClick: () => void;
};
const PostList = ({ postTitle, postContents, onClick }: PostListProps) => {
	return (
		<>
			<PostListLine />
			<PostListContainer onClick={onClick}>
				<PostTitle>{postTitle}</PostTitle>
				<PostContents
					dangerouslySetInnerHTML={{ __html: postContents }}></PostContents>
			</PostListContainer>
		</>
	);
};

export default PostList;
