import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Main from '@pages/mainPage/Main';
import Search from '@pages/searchPage/Search';
import Login from '@pages/userPage/Login';
import SignUp from '@pages/userPage/SignUp';
import MyVolunHistory from '@pages/myPage/VolunHistory';
import MyVolunSuggest from '@pages/myPage/VolunSuggest';
import MyComment from '@pages/myPage/MyComment';
import MyReview from '@pages/myPage/MyReview';
import FindFriend from '@src/pages/community/FindFriend';
import Question from '@src/pages/community/Question';
import FindFriendWrite from '@src/pages/community/FindFriendWrite';
import QuestionWrite from '@src/pages/community/QuestionWrite';
import Review from '@pages/reviewPage/reviewPage';
import MyPage from '@pages/myPage/MyPage';
import UserInfoEdit from '@pages/myPage/UserInfoEdit';
import MyProfile from './pages/myPage/MyProfile';
import FindFriendDetail from '@src/pages/community/FindFriendDetail';
import Withdrawal from '@pages/myPage/Withdrawal';
import ReviewDetail from '@src/pages/reviewPage/ReviewDetail';
import TeamAuth from '@src/pages/adminPage/TeamAuth';
import Report from '@src/pages/adminPage/Report';
import CommunityEditPage from '@src/pages/community/CommunityEditPage';
import Error from '@pages/errorPage/Error';
import AuthTeam from '@pages/myPage/AuthTeam';
import PrivateRoute from '@utils/PrivateRoute';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/community/findfriend' element={<FindFriend />} />
				<Route path='/community/question' element={<Question />} />
				<Route
					path='/community/findfriend/write'
					element={<FindFriendWrite />}
				/>
				<Route path='/community/question/write' element={<QuestionWrite />} />
				<Route path='/search' element={<Search />} />
				<Route path='/review' element={<Review />} />
				<Route path='/community/:postId' element={<FindFriendDetail />} />
				<Route path='community/edit/:postId' element={<CommunityEditPage />} />
				<Route path='/review/:postId' element={<ReviewDetail />} />
				<Route path='/community/:postId' element={<FindFriendDetail />} />

				{/* 권한이 없어야만 접속가능 */}
				<Route element={<PrivateRoute authentication={false} />}>
					<Route path='/login' element={<Login />} />
					<Route path='/sign_up' element={<SignUp />} />
				</Route>
				{/* 권한이 필요한 페이지들 */}
				<Route element={<PrivateRoute authentication={true} />}>
					<Route path='/mypage/review' element={<MyReview />} />
					<Route path='/mypage' element={<MyPage />} />
					<Route path='/mypage/history' element={<MyVolunHistory />} />
					<Route path='/mypage/suggest' element={<MyVolunSuggest />} />
					<Route path='/mypage/comment' element={<MyComment />} />
					<Route path='/mypage/edit' element={<UserInfoEdit />} />
					<Route path='/mypage/profile' element={<MyProfile />} />
					<Route path='/mypage/team_auth' element={<AuthTeam />} />
					<Route path='/mypage/withdrawal' element={<Withdrawal />} />
					<Route path='/admin/team_auth' element={<TeamAuth />} />
					<Route path='/admin/report' element={<Report />} />
				</Route>
				<Route path='/*' element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
