import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');
import Header from './components/Header/Header';
<<<<<<< HEAD
<<<<<<< HEAD
import Main from './pages/mainPage/main';
import Login from './pages/userPage/login';
=======
import Footer from "./components/Footer/Footer";
import Main from "./pages/mainPage/main";
import Login from "./pages/userPage/login";
>>>>>>> e0eb4de3ad6881464f866eb83e80d81ef1e3ee48
=======
import Footer from "./components/Footer/Footer";
import Main from "./pages/mainPage/main";
import Login from "./pages/userPage/login";
>>>>>>> bb908a76757f4ddc96982637e292bb5677061bc4
import SignUp from './pages/userPage/signUp';
import MyVolunHistory from './pages/myPage-hr/volunHistory';
import MyVolunSuggest from './pages/myPage-hr/volunSuggest';
import MyComment from './pages/myPage-hr/myComment';
import MyPost from './pages/myPage-hr/myPost';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage/history" element={<MyVolunHistory />} />
        <Route path="/mypage/suggest" element={<MyVolunSuggest />} />
        <Route path="/mypage/comment" element={<MyComment />} />
        <Route path="/mypage/post" element={<MyPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />
      </Routes>
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <Footer />    
>>>>>>> e0eb4de3ad6881464f866eb83e80d81ef1e3ee48
=======
      <Footer />    
>>>>>>> bb908a76757f4ddc96982637e292bb5677061bc4
    </Router>
  );
}

export default App;
