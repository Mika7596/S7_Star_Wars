import React, { useContext } from 'react'
import SWHeader from '../components/sw-header/SWHeader'
import MainNavbar from '../components/main-navbar/MainNavbar'
import SWMain from '../components/sw-main/SWMain'
import SWCast from '../components/sw-cast/SWCast'

import { DisplayCastContext } from '../contexts/display-actors.context'

function StarWars() {
    const {actorsAvailable, setActorsAvailable} = useContext(DisplayCastContext)


  return (
    <>
    <SWHeader/>
    <MainNavbar/>
    {/* <SWMain/>
    <SWCast></SWCast> */}
    {actorsAvailable ? <SWCast></SWCast> : <SWMain></SWMain>}
    </>
  )
}

export default StarWars