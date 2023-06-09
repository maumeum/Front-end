import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Main from '@pages/mainPage/Main';
import Search from '@pages/searchPage/Search';
import Login from '@pages/userPage/Login';
import SignUp from '@pages/userPage/SignUp';
import MyVolunHistory from '@pages/myPage/volunHistory';
import MyVolunSuggest from '@pages/myPage/volunSuggest';
import MyComment from '@pages/myPage/myComment';
import MyReview from '@pages/myPage/myReview';
import FindFriend from '@src/pages/community/FindFriend';
import Question from '@src/pages/community/Question';
import FindFriendWrite from '@src/pages/community/FindFriendWrite';
import QuestionWrite from '@src/pages/community/QuestionWrite';
import Review from '@pages/reviewPage/reviewPage';
import MyPage from '@pages/myPage/myPage';
import UserInfoEdit from '@pages/myPage/userInfoEdit';
import MyProfile from './pages/myPage/myProfile';
import FindFriendDetail from '@src/pages/community/FindFriendDetail';
import Withdrawal from '@pages/myPage/withdrawal';
import ReviewDetail from '@src/pages/reviewPage/ReviewDetail';
import TeamAuth from '@pages/admin/TeamAuth';
import Report from '@pages/admin/Report';
import CommunityEditPage from '@src/pages/community/CommunityEditPage';
import Error from '@pages/errorPage/Error';

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
				<Route path='/community/:postId' element={<FindFriendDetail />} />
				<Route path='community/edit/:postId' element={<CommunityEditPage />} />
				<Route path='/review/:postId' element={<ReviewDetail />} />
				<Route path='/mypage/withdrawal' element={<Withdrawal />} />
				<Route path='/admin/team_auth' element={<TeamAuth />} />
				<Route path='/admin/report' element={<Report />} />
				<Route path='error' element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
