import { Container } from './pagination';
import { useState } from 'react';
interface PaginationProps {
	currentPage: number;
	totalPages: number;
	handlePageChange: (page: number) => void;
}

function Pagination({
	currentPage,
	totalPages,
	handlePageChange,
}: PaginationProps) {
	// 페이지 버튼을 만드는 함수

	const [clickedButton, setClickedButton] = useState<number | null>(null);
	const buttonsToShow = 5;
	const lastPageGroup = Math.ceil(totalPages / buttonsToShow) - 1;
	const [pageGroupIdx, setPageGroupIdx] = useState(0);
	const startPage = pageGroupIdx * buttonsToShow + 1;
	const endPage = (pageGroupIdx + 1) * buttonsToShow;

	const handlePrevGroup = () => {
		setPageGroupIdx(pageGroupIdx - 1);
	};

	const handleNextGroup = () => {
		setPageGroupIdx(pageGroupIdx + 1);
	};

	const renderPageButtons = () => {
		const pageButtons = [];
		for (let i = startPage; i <= Math.min(endPage, totalPages); i++) {
			pageButtons.push(
				<button
					className={`${currentPage === i ? 'active' : ''} ${
						clickedButton === i ? 'clicked' : ''
					}`}
					onClick={() => {
						handlePageChange(i);
						setClickedButton(i); // 상태 업데이트
					}}
					key={i}>
					{i}
				</button>,
			);
		}
		return pageButtons;
	};

	return (
		<Container>
			<button
				className='pagination__button'
				onClick={handlePrevGroup}
				disabled={pageGroupIdx === 0}>
				&lt;&lt;
			</button>
			{renderPageButtons()}
			<button
				className='pagination__button'
				onClick={handleNextGroup}
				disabled={pageGroupIdx === lastPageGroup}>
				&gt;&gt;
			</button>
		</Container>
	);
}

export default Pagination;
