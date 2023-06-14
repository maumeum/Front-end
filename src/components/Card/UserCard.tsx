import { UserType } from '@src/types/userType';

import {
	VolunteerSection,
	VolunteerImgContainer,
	VolunteerImage,
	VolunteerIntroContainer,
	NickNameContainer,
	AuthImage,
	UserNickName,
	UserEmail,
	UserPhone,
} from '@components/Card/card';
import AuthLogo from '@assets/icons/authentication.svg';

interface VolunteerCardProps {
	UserData: UserType;
}

const apiUrL = import.meta.env.VITE_API_URL;

const UserCard = ({ UserData }: VolunteerCardProps) => {
	const userImage = `${apiUrL}/${UserData.image}`;
	return (
		<VolunteerSection>
			<VolunteerImgContainer>
				<VolunteerImage src={userImage} />
			</VolunteerImgContainer>
			<VolunteerIntroContainer>
				<NickNameContainer>
					{UserData.authorization ? (
						<AuthImage src={AuthLogo} alt='authLogo' />
					) : (
						''
					)}
					<UserNickName>{UserData.nickname}</UserNickName>
				</NickNameContainer>
				<UserEmail>이메일: {UserData.email}</UserEmail>
				<UserPhone>핸드폰 번호: {UserData.phone}</UserPhone>
			</VolunteerIntroContainer>
		</VolunteerSection>
	);
};

export default UserCard;
