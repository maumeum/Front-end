import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Main from '@pages/mainPage/main';
import Search from '@pages/searchPage/search';
import Login from '@pages/userPage/login';
import SignUp from '@pages/userPage/signUp';
import MyVolunHistory from '@pages/myPage/volunHistory';
import MyVolunSuggest from '@pages/myPage/volunSuggest';
import MyComment from '@pages/myPage/myComment';
import MyReview from '@pages/myPage/myReview';
import FindFriend from '@pages/community/findFriend';
import Question from '@pages/community/question';
import FindFriendWrite from '@pages/community/findFriendWrite';
import QuestionWrite from '@pages/community/questionWrite';
import Review from '@pages/reviewPage/reviewPage';
import MyPage from '@pages/myPage/myPage';
import UserInfoEdit from '@pages/myPage/userInfoEdit';
import MyProfile from './pages/myPage/myProfile';
import FindFriendDetail from '@pages/community/findFriendDetail';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/mypage/history' element={<MyVolunHistory />} />
				<Route path='/mypage/suggest' element={<MyVolunSuggest />} />
				<Route path='/mypage/comment' element={<MyComment />} />
				<Route path='/community/findfriend' element={<FindFriend />} />
				<Route path='/community/question' element={<Question />} />
				<Route
					path='/community/findfriend/write'
					element={<FindFriendWrite />}
				/>
				<Route path='/community/question/write' element={<QuestionWrite />} />
				<Route path='/login' element={<Login />} />
				<Route path='/sign_up' element={<SignUp />} />
				<Route path='/search' element={<Search />} />
				<Route path='/review' element={<Review />} />
				<Route path='/mypage/review' element={<MyReview />} />
				<Route path='/mypage' element={<MyPage />} />
				<Route path='/mypage/edit' element={<UserInfoEdit />} />
				<Route path='/mypage/profile' element={<MyProfile />} />
				<Route
					path='/community/findfriend/:postId'
					element={<FindFriendDetail />}
				/>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
