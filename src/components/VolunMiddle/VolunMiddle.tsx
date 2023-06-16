import { useState } from 'react';
import { useParams } from 'react-router-dom';
import VolComment from '../Comment/VolComment';
import ActivityIntro from './ActivityIntro';
import IntroTeam from './IntroTeam';
import {
	Container,
	Header,
	ActiveBtn,
	Text,
	TeamIntroBtn,
	CommentBtn,
} from './VolunMiddleStyle';

const VolunMiddle = () => {
	const { postId } = useParams() as { postId: string };
	const [activeTab, setActiveTab] = useState('activityIntro');
	window.scrollTo(0, 0);

	const handleTabChange = (tabName: string) => {
		setActiveTab(tabName);
	};

	const uuid = localStorage.getItem('uuid');

	return (
		<>
			<Container>
				<Header>
					<ActiveBtn onClick={() => handleTabChange('activityIntro')}>
						<Text>활동소개</Text>
					</ActiveBtn>
					<TeamIntroBtn onClick={() => handleTabChange('introTeam')}>
						<Text>팀소개</Text>
					</TeamIntroBtn>
					<CommentBtn onClick={() => handleTabChange('comment')}>
						<Text>댓글</Text>
					</CommentBtn>
				</Header>
				{activeTab === 'activityIntro' && uuid && (
					<ActivityIntro postId={postId} uuid={uuid} />
				)}
				{activeTab === 'introTeam' && uuid && <IntroTeam uuid={uuid} />}
				{activeTab === 'comment' && <VolComment postId={postId} />}
			</Container>
		</>
	);
};

export default VolunMiddle;
