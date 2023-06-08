import { Dispatch, SetStateAction } from 'react';

type TruncatedDescriptionProps = {
	content: string;
	isShowMore: boolean;
	setIsShowMore: Dispatch<SetStateAction<boolean>>;
};

function TruncatedDescription({
	content,
	isShowMore,
	setIsShowMore,
}: TruncatedDescriptionProps) {
	const textLimit = 160;
	const shortComment = content.slice(0, textLimit) + ' ...';
	const isLongComment = content.length > textLimit;
	const viewShort = isLongComment && !isShowMore;

	return (
		<>
			{viewShort ? shortComment : content}
			{isLongComment && (
				<span
					onClick={() => setIsShowMore(!isShowMore)}
					style={{
						fontSize: '1.1rem',
						marginLeft: '2.1rem',
						cursor: 'pointer',
					}}>
					{isShowMore ? '[닫기]' : '[더보기]'}
				</span>
			)}
		</>
	);
}

export default TruncatedDescription;
