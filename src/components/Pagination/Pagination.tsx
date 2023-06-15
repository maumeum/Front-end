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
	const renderPageButtons = () => {
		const pageButtons = [];
		for (let i = 1; i <= totalPages; i++) {
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
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}>
				&lt;
			</button>
			{renderPageButtons()}
			<button
				className='pagination__button'
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}>
				&gt;
			</button>
		</Container>
	);
}

export default Pagination;
