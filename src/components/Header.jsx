import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);

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
          Sparta
        </Link>
      </h1>
      <nav
        style={{
          display: "flex",
          gap: "20px",
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
              to="/profile"
            >
              Profile
            </Link>
          </>
        ) : (
          <>
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
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              to="/signup"
            >
              Signup
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
