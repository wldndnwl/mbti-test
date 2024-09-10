import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/login",
        {
          id,
          password,
        }
      );
      const data = response.data;
      if (data.success) {
        login(data.accessToken);
        navigate("/mypage");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
