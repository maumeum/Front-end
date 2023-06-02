import React from 'react';
import WritePage from '../../components/WritePage/WritePage';

const questionWrite = () => {
	const content = `궁금한 사항에 대한 질문을 자유롭게 남겨주세요.\n서로 예의를 지키며 존중하는 문화를 만들어가요.`;

	return (
		<>
			<WritePage
				title='봉사활동에 대해 궁금한 사항이 잘 나타나는 제목을 지어보세요'
				subtitle={content}
			/>
		</>
	);
};
export default questionWrite;
