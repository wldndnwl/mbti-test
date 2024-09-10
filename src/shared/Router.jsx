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
import TestPage from "../pages/TestPage";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/Header";
import TestResult from "../pages/TestResult";

// PrivateRoute: 로그인이 필요한 페이지에 접근할 수 있도록 하는 컴포넌트
const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
};

// PublicRoute: 로그인이 필요없는 페이지에 접근할 수 있도록 하는 컴포넌트
const PublicRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? <Element {...rest} /> : <Navigate to="/mypage" />;
};

const SharedRouter = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<PublicRoute element={Login} />} />
      <Route path="/signup" element={<PublicRoute element={Signup} />} />
      <Route path="/mypage" element={<PrivateRoute element={MyPage} />} />
      <Route path="/test" element={<PrivateRoute element={TestPage} />} />
      <Route path="/results" element={<PrivateRoute element={TestResult} />} />
    </Routes>
  </Router>
);

export default SharedRouter;
