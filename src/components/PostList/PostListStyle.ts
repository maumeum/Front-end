import styled from 'styled-components';

export const PostListLine = styled.hr`
	width: 112rem;
	border: 1px solid #d3d3d3;
	margin: 0 auto;
`;

export const PostContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 112rem;
	min-width: 112rem;
	margin: 0 auto;
`;

export const PostListContainer = styled.div`
	margin: 0 auto;
	width: 78.1rem;
	height: 7.6rem;
	margin-top: 2rem;
	margin-bottom: 7rem;
	cursor: pointer;
`;

export const PostTitle = styled.p`
	font-weight: 600;
	font-size: 2.4rem;
`;

export const PostBox = styled.div`
	margin-top: 0;
	display: flex;
	justify-content: space-between;
`;

export const PostContents = styled.p`
	margin-top: 0;
	font-weight: 500;
	font-size: 2rem;
	color: #b8b8b8;
`;

export const PostButtons = styled.button`
	margin-right: 3rem;
	border: none;
	background-color: #ffd4d4;
	color: #ffffff;
	width: 5rem;
	height: 4rem;
	border-radius: 8px;
	cursor: pointer;
`;

export const AcceptButtons = styled.button`
	margin-right: 3rem;
	border: none;
	background-color: var(--button--color);
	color: #ffffff;
	width: 5rem;
	height: 4rem;
	border-radius: 8px;
	cursor: pointer;
`;
