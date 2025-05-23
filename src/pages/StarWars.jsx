import React from 'react'
import SWHeader from '../components/sw-header/SWHeader'
import MainNavbar from '../components/main-navbar/MainNavbar'
import SWMain from '../components/sw-main/SWMain'
import SWCast from '../components/sw-cast/SWCast'

function StarWars() {
  return (
    <>
    <SWHeader/>
    <MainNavbar/>
    <SWMain/>
    <SWCast></SWCast>
    </>
  )
}

export default StarWars