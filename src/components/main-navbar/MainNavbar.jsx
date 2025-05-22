import React from 'react'
import { Link } from 'react-router-dom'

function MainNavbar() {
  return (
    <nav>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/StarWars">Star Wars Movies</Link></li>
            <li><Link to="/all-movies">All Movies</Link></li>
        </ul>
    </nav>
  )
}

export default MainNavbar