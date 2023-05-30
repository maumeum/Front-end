import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Main from "./pages/mainPage/main";

import Remove from "./pages/myPage/removePage/Remove";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="remove" element={<Remove />} />
      </Routes>
    </Router>
  );
}

export default App;
