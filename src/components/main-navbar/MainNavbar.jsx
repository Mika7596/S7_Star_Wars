import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './main-navbar.css'
import { DisplayCastContext } from '../../contexts/display-actors.context'

function MainNavbar() {
  const {setActorsAvailable} = useContext(DisplayCastContext)

  return (
    <nav className="nav my-3">
        <ul className='main-navbar-ul'>
            <li className='nav-link'><Link to="/home">Home</Link></li>
            <li className='nav-link' onClick={() => setActorsAvailable(false)}><Link to="/StarWars">Star Wars Movies</Link></li>
            <li className='nav-link'><Link to="/all-movies">All Movies</Link></li>
        </ul>
    </nav>
  )
}

export default MainNavbar