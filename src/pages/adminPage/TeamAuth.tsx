import TeamCard from '@components/Card/TeamCard';
import SearchBar from '@components/SearchBar/SearchBar';
import Menu from '@components/Menu/Menu.tsx';
import { MenuBar, TopBarContainer, TopBar, TeamCardContainer } from './style';
import teamsData from '@assets/datas/teamData';

const TeamAuth = () => {
	const handleClick = (query: string) => {
		console.log(query);
	};
	return (
		<>
			<MenuBar>
				<Menu title='관리자' />
			</MenuBar>
			<TopBarContainer>
				<TopBar>단체 인증 요청</TopBar>
			</TopBarContainer>
			<SearchBar onSearch={handleClick} />
			<TeamCardContainer>
				{teamsData.map((item) => (
					<TeamCard teamData={item} key={item._id} />
				))}
			</TeamCardContainer>
		</>
	);
};

export default TeamAuth;
