import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
          HOME
        </Link>
      </h1>
      <nav
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
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
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
