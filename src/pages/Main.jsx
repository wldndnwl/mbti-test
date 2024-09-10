import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    } else {
      navigate("/mypage");
    }
  };

  return (
    <div>
      <h2>Main Page</h2>
      <button onClick={handleClick}>Go to MyPage</button>
    </div>
  );
};

export default Main;
