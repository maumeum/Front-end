import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import CommentSection from '../Comment/Comment';
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

interface LocationState {
	uuid: string;
}

const VolunMiddle = () => {
	const { postId } = useParams() as { postId: string };
	const location = useLocation();
	const { uuid } = location.state || ({} as LocationState);
	const [activeTab, setActiveTab] = useState('activityIntro');

	const handleTabChange = (tabName: string) => {
		setActiveTab(tabName);
	};

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
				{activeTab === 'activityIntro' && (
					<ActivityIntro postId={postId} Uuid={uuid} />
				)}
				{activeTab === 'introTeam' && <IntroTeam postId={postId} Uuid={uuid} />}
				{activeTab === 'comment' && <CommentSection postId={postId} />}
			</Container>
		</>
	);
};

export default VolunMiddle;
