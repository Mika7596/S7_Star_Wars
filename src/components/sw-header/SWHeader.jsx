import React from 'react'
import './sw-header.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../assets/star-wars-2-cropped.svg' 

function SWHeader() {
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
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
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
        <div>
            <span>LOG IN </span>
            <span>| SIGN UP</span>
        </div>
    </header>
  )
}

export default SWHeader