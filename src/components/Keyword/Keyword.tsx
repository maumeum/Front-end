import { useNavigate } from 'react-router-dom';

import {
	KeywordContainer,
	KeyWordTitle,
	KeywordBox,
	KeywordImage,
	Keyword,
} from './style';
import { targetKeyword, subjectKeyword } from '@assets/datas/keywordData';

interface QueryProps {
	setQuery: React.Dispatch<React.SetStateAction<string | null>>;
	setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}

const KeywordComponent = ({ setQuery, setSubmit }: QueryProps) => {
	const navigate = useNavigate();

	return (
		<>
			<KeyWordTitle>대상별 찾기</KeyWordTitle>
			<KeywordContainer>
				{targetKeyword.map((item, index) => (
					<KeywordBox key={index}>
						<KeywordImage
							src={item.image}
							onClick={() => {
								setQuery(item.target);
								setSubmit(true);
								if (item.target === '') {
									return navigate('/search');
								}
								navigate(`/search?keyword=${item.target}`);
							}}
						/>
						<Keyword>{item.target}</Keyword>
					</KeywordBox>
				))}
			</KeywordContainer>
			<KeyWordTitle>주제별 찾기</KeyWordTitle>
			<KeywordContainer>
				{subjectKeyword.map((item, index) => (
					<KeywordBox key={index}>
						<KeywordImage
							src={item.image}
							onClick={() => {
								setQuery(item.target);
								setSubmit(true);
								if (item.target === '') {
									return navigate('/search');
								}
								navigate(`/search?keyword=${item.target}`);
							}}
						/>
						<Keyword>{item.target}</Keyword>
					</KeywordBox>
				))}
			</KeywordContainer>
		</>
	);
};

export default KeywordComponent;
