import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WelcomePage from '../pages/WelcomePage'
import Home from '../pages/Home'
import StarWars from '../pages/StarWars'
import AllMovies from '../pages/AllMovies'
import NotFound from '../pages/NotFound'

function MyRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<WelcomePage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/StarWars' element={<StarWars/>}></Route>
        <Route path='/all-movies' element={<AllMovies/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
