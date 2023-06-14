import { Container } from './noData';
import post from '../../assets/icons/post.svg';
interface NoDataProps {
	category: string;
}
function NoData({ category }: NoDataProps) {
	return (
		<Container>
			<img src={post} alt='포스트이미지' />
			<h1>아직 작성된 {category}글이 없습니다</h1>
		</Container>
	);
}

export default NoData;
