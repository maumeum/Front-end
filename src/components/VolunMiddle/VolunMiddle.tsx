import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentSection from '../Comment/Comment';
import ActivityIntro from './ActivityIntro';
import IntroTeam from './IntroTeam';
import useUUIDStore from '@src/store/useUuidStore';
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
	const [uuid, setUuid] = useState<string>('');
	const { uuidData } = useUUIDStore();

	useEffect(() => {
		setUuid(uuidData);
	}, []);

	console.log(uuid);

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
					<ActivityIntro postId={postId} uuid={uuid} />
				)}
				{activeTab === 'introTeam' && uuid && <IntroTeam uuid={uuid} />}
				{activeTab === 'comment' && <CommentSection postId={postId} />}
			</Container>
		</>
	);
};

export default VolunMiddle;
