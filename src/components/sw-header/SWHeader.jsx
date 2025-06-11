import React from 'react'
import './sw-header.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from "../../contexts/auth.context";

import logo from '../../assets/star-wars-2-cropped.svg' 



function SWHeader() {
const { currentUser, logout } = useAuth();
const navigate = useNavigate();
  return (
    <header className='text-light d-flex justify-content-between p-5 sw-header'>
        <div className="social">
            <a href="https://www.tiktok.com/@starwars" target='_blank'>
            <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://www.instagram.com/starwars/" target="_blank">
            <i className="bi bi-instagram ms-3"></i>
            </a>
            <a href="https://x.com/starwars" target="_blank">
            <i className="fa-brands fa-x-twitter ms-3" style={{color: "white"}}></i>
            </a>
            
            <a href="https://www.facebook.com/StarWars" target="_blank">
            <i className="bi bi-facebook ms-3"></i>
            </a>
            <a href="https://www.youtube.com/user/starwars" target="_blank">
            <i className="bi bi-youtube ms-3"></i>
            </a>
        </div>
        <div style={{width:"22%"}}>
            <img src={logo} alt="Star Wars Logo" style={{maxWidth: "100%"}}/>
        </div>
        
        <div style={{ textAlign: "end" }}>
          <div
          style={{ textAlign: "center" }}
          onClick={() => {
            navigate("/home");
          }}
        >
          <i className="fa-solid fa-house"></i>
          <br />
        
          {currentUser ? (
            <>
              <span>
                Hi, **{currentUser.email}**
              </span>
              <br />
              <button
                onClick={logout}
                className="btn btn-warning"
                style={{ textAlign: "center" }}
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
  )
}

export default SWHeader