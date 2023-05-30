import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Main from './pages/mainPage/main';
import MyVolunHistory from './pages/myPage-hr/volunHistory';
import MyVlounSuggest from './pages/myPage-hr/volunSuggest';
import MyComment from './pages/myPage-hr/myComment';
import MyPost from './pages/myPage-hr/myPost';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage/history" element={<MyVolunHistory />} />
        <Route path="/mypage/suggest" element={<MyVlounSuggest />} />
        <Route path="/mypage/comment" element={<MyComment />} />
        <Route path="/mypage/post" element={<MyPost />} />
      </Routes>
    </Router>
  );
}

export default App;
