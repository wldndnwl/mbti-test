import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import MyPage from "../pages/MyPage";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/Header";

// PrivateRoute : 로그인한 사용자만 접근 가능, 비로그인 시 로그인 페이지로 이동
const PrivateRoute = ({ element: Element }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Element /> : <Navigate to="/login" />;
};

// PublicRoute : 비로그인 사용자만 접근 가능, 로그인된 사용자는 마이페이지로 리다이렉트
const PublicRoute = ({ element: Element }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? <Element /> : <Navigate to="/mypage" />;
};

const SharedRouter = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<PublicRoute element={Login} />} />
      <Route path="/signup" element={<PublicRoute element={Signup} />} />
      <Route path="/mypage" element={<PrivateRoute element={MyPage} />} />
    </Routes>
  </Router>
);

export default SharedRouter;
