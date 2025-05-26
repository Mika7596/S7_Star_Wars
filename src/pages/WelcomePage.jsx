import React from "react";
import MainNavbar from "../components/navbar/MainNavbar";
import { useNavigate } from "react-router-dom";
import "./welcomePage.css";

function WelcomePage() {
  let navigate = useNavigate();
  return (
    <>
      <main
        style={{ backgroundImage: "url(src/assets/collage.png)" }}
        className="welcome-main"
      >
        <div className="welcome-content">
          <div className="welcome-first">Welcome to your movie API!</div>
          <div className="welcome-second">Click to get started!</div>
          <button
            className="btn btn-warning welcome-btn"
            onClick={() => navigate("/home")}
          >
            Start
          </button>
        </div>
      </main>
    </>
  );
}

export default WelcomePage;
