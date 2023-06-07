import { WriteBtn } from './WriteButtonstyle';

type WriteButtonProps = {
	toNavigate: () => void;
};
const WriteButton = ({ toNavigate }: WriteButtonProps) => {
	return <WriteBtn onClick={toNavigate}>글쓰기</WriteBtn>;
};
export default WriteButton;
