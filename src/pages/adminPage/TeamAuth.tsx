import { useEffect, useState } from 'react';

import { get } from '@api/api';
import TeamCard from '@components/Card/TeamCard';
import TeamModal from '@components/Modal/TeamModal';
import Menu from '@components/Menu/Menu.tsx';
import { TeamListType } from '@src/types/cardType';
import DataType from '@src/types/dataType';
import { MenuBar, TopBarContainer, TopBar, TeamCardContainer } from './style';

const TeamAuth = () => {
	const [teamList, setTeamList] = useState<TeamListType>([]);
	const [select, setSelect] = useState<number | null>(null);
	const [isModified, setIsModified] = useState<boolean>(false);

	// teamList 불러오기
	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<DataType>('/api/team/auth/admin', {});
			setTeamList(responseData.data);
		};
		fetchData();
		if (isModified) {
			fetchData();
			setIsModified(false);
			window.scrollTo(0, 0);
		}
	}, [isModified]);

	// TeamModal 구현
	const modalClick = (index: number) => {
		setSelect(index);
	};

	return (
		<>
			<MenuBar>
				<Menu title='관리자' />
			</MenuBar>
			<TopBarContainer>
				<TopBar>단체 인증 요청</TopBar>
			</TopBarContainer>
			<TeamCardContainer>
				{teamList &&
					teamList.map((item, index) => (
						<>
							<TeamCard
								teamData={item}
								key={item.user_id._id}
								onClick={() => modalClick(index)}
							/>
							<TeamModal
								isOpen={select === index}
								closeModal={() => setSelect(null)}
								teamData={item}
								setIsModified={setIsModified}
							/>
						</>
					))}
			</TeamCardContainer>
		</>
	);
};

export default TeamAuth;
