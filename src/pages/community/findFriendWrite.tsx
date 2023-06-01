import React from 'react';
import WritePage from '../../components/WritePage/WritePage';

const findFriendWrite = () => {
	const content = `봉사활동 이름, 날짜를 포함하여 정보를 입력해주세요.\n서로 예의를 지키며 존중하는 문화를 만들어가요.`;

	return (
		<>
			<WritePage
				title='봉사활동 이름과 날짜를 포함하는 제목을 지어보세요'
				subtitle={content}
			/>
		</>
	);
};

export default findFriendWrite;
