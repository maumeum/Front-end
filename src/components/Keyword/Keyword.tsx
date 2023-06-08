import { KeywordContainer, KeywordBox } from './style';
import keywordData from '@assets/datas/keywordData';

const KeywordComponent = () => {
	return (
		<>
			<KeywordContainer>
				{keywordData.map((item, index) => (
					<KeywordBox key={index}>{item}</KeywordBox>
				))}
			</KeywordContainer>
		</>
	);
};

export default KeywordComponent;
