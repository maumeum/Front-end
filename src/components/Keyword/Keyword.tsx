import {
	KeywordContainer,
	KeyWordTitle,
	KeywordBox,
	KeywordImage,
	Keyword,
} from './style';
import { targetKeyword, subjectKeyword } from '@assets/datas/keywordData';

const KeywordComponent = () => {
	return (
		<>
			<KeyWordTitle>대상별 찾기</KeyWordTitle>
			<KeywordContainer>
				{targetKeyword.map((item, index) => (
					<KeywordBox key={index}>
						<KeywordImage src={item.image} />
						<Keyword>{item.target}</Keyword>
					</KeywordBox>
				))}
			</KeywordContainer>
			<KeyWordTitle>주제별 찾기</KeyWordTitle>
			<KeywordContainer>
				{subjectKeyword.map((item, index) => (
					<KeywordBox key={index}>
						<KeywordImage src={item.image} />
						<Keyword>{item.target}</Keyword>
					</KeywordBox>
				))}
			</KeywordContainer>
		</>
	);
};

export default KeywordComponent;
