import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("정말로 로그아웃 하시겠습니까?");
    if (confirmLogout) {
      logout();
      navigate("/");
    }
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        backgroundColor: "lightgray",
      }}
    >
      <h1>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "30px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          to="/"
        >
          홈
        </Link>
      </h1>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginLeft: "auto",
        }}
      >
        {isAuthenticated ? (
          <>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              to="/mypage"
            >
              프로필
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              to="/test"
            >
              테스트
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              to="/results"
            >
              결과 보기
            </Link>
            <button
              onClick={handleLogout}
              style={{
                background: "none",
                border: "none",
                color: "black",
                fontSize: "20px",
                cursor: "pointer",
                marginLeft: "20px",
              }}
            >
              로그아웃
            </button>
          </>
        ) : (
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            to="/login"
          >
            로그인
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
