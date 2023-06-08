import TeamCard from '@components/Card/TeamCard';
import SearchBar from '@components/SearchBar/SearchBar';
import Menu from '@components/Menu/Menu.tsx';
import {
	MenuBar,
	TopBarContainer,
	ClickTopBar,
	TeamCardContainer,
} from './style';
import teamData from '@assets/datas/teamData';

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
				<ClickTopBar>단체 인증 요청</ClickTopBar>
			</TopBarContainer>
			<SearchBar onSearch={handleClick} />
			<TeamCardContainer>
				{teamData.map((item) => (
					<TeamCard data={item} key={item._id} />
				))}
			</TeamCardContainer>
		</>
	);
};

export default TeamAuth;
