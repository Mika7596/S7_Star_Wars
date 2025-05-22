import React from 'react'
import { Link } from 'react-router-dom'
import './main-navbar.css'

function MainNavbar() {
  return (
    <nav className="nav">
        <ul className='main-navbar-ul'>
            <li className='nav-link'><Link to="/home">Home</Link></li>
            <li className='nav-link'><Link to="/StarWars">Star Wars Movies</Link></li>
            <li className='nav-link'><Link to="/all-movies">All Movies</Link></li>
        </ul>
    </nav>
  )
}

export default MainNavbar