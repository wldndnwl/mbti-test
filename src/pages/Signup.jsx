import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/register",
        {
          id,
          password,
          nickname,
        }
      );
      const data = response.data;
      if (data.success) {
        navigate("/login");
      } else {
        alert("Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed");
    }
  };

  return (
    <div>
      <h2>Signup Page</h2>
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
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Nickname"
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
