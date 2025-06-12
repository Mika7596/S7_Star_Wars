import React, { useContext } from 'react'
import SWHeader from '../components/sw-header/SWHeader'
import MainNavbar from '../components/navbar/MainNavbar'
import SWMain from '../components/sw-main/SWMain'
import SWCast from '../components/sw-cast/SWCast'

import { DisplayCastContext } from '../contexts/display-actors.context'

function StarWars() {
    const {actorsAvailable} = useContext(DisplayCastContext)


  return (
    <>
    <SWHeader/>
    <MainNavbar/>
    {actorsAvailable ? <SWCast></SWCast> : <SWMain></SWMain>}
    </>
  )
}

export default StarWars