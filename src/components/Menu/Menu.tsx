import React from 'react';
import { Link } from 'react-router-dom';

type MenuProps = {
	title: string;
};

function Menu({ title }: MenuProps) {
	return (
		<>
			{title === '마이페이지' && (
				<>
					<p>{title}</p>
					<p>프로필 수정</p>
					<p>내 정보 수정</p>
					<Link to='/mypage/review'>
						<p>내가 쓴 리뷰</p>
					</Link>
					<Link to='/mypage/history'>
						<p>나의 봉사활동 내역</p>
					</Link>
					<Link to='/mypage/comment'>
						<p>나의 커뮤니티 활동</p>
					</Link>
					<Link to='/mypage/suggest'>
						<p>내가 등록한 봉사</p>
					</Link>
					<p>회원탈퇴</p>
				</>
			)}

			{title === '게시판' && (
				<>
					<p>{title}</p>
					<p>동행하기</p>
					<p>질문하기</p>
				</>
			)}
		</>
	);
}

export default Menu;
