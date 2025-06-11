import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "../../contexts/auth.context";
import "@fortawesome/fontawesome-free/css/all.min.css";

function MainHeader() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header>
      <div
        style={{
          backgroundImage: "url(src/assets/movie.svg)",
          backgroundSize: "contain",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          height: "200px",
          padding: "3%",
        }}
      >
        <div
          style={{ textAlign: "start" }}
          onClick={() => {
            navigate("/home");
          }}
        >
          <i className="fa-solid fa-house"></i>
        </div>
        <div style={{ textAlign: "end" }}>
          {currentUser ? (
            <>
              <span style={{ marginRight: "10px" }}>
                Hi, **{currentUser.email}**
              </span>
              <br />
              <button
                onClick={logout}
                className="btn btn-warning"
                style={{ marginRight: "10px" }}
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <button
                className="btn btn-warning"
                style={{ marginRight: "10px" }}
                onClick={() => {
                  navigate("/sign-up");
                }}
              >
                sign up
              </button>
              <button
                className="btn btn-warning"
                onClick={() => navigate("/log-in")}
              >
                login
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
