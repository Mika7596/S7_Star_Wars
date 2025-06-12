import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WelcomePage from '../pages/WelcomePage'
import Home from '../pages/Home'
import StarWars from '../pages/StarWars'
import AllMovies from '../pages/AllMovies'
import NotFound from '../pages/NotFound'
import PrivateRoute from '../components/private-routes/PrivateRoutes'
import SignUp from '../components/sign-up/SignUp'
import LogIn from '../components/log-in/LogIn'

function MyRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<WelcomePage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path='/log-in' element={<LogIn/>}></Route>
        <Route path='/StarWars' element={<PrivateRoute><StarWars/></PrivateRoute>}></Route>
        <Route path='/all-movies' element={<PrivateRoute><AllMovies/></PrivateRoute>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
