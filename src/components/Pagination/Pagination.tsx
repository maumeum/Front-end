import { useState, useEffect } from 'react';
import { StyledPagination } from '@components/Pagination/pagination';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	handlePageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	handlePageChange,
}: PaginationProps) => {
	const NUM_SHOWN_PAGES = 5;

	const [pageStart, setPageStart] = useState(1);
	const [pageEnd, setPageEnd] = useState(Math.min(totalPages, NUM_SHOWN_PAGES));

	// 페이지 범위 업데이트
	useEffect(() => {
		setPageStart(Math.max(1, currentPage - Math.floor(NUM_SHOWN_PAGES / 2)));
		setPageEnd(Math.min(totalPages, pageStart + NUM_SHOWN_PAGES - 1));
	}, [currentPage, totalPages]);

	const pageLinks = [];
	for (let i = pageStart; i <= pageEnd; i++) {
		pageLinks.push(
			<a
				key={i}
				onClick={() => handlePageChange(i)}
				className={i === currentPage ? 'active' : ''}>
				{i}
			</a>,
		);
	}

	return <StyledPagination>{pageLinks}</StyledPagination>;
};
export default Pagination;
