import React, { useContext, useEffect } from 'react'
import { SWContext } from '../../contexts/sw.context'

function SWMain() {

  const {swMovies, swError, getSWMovies} = useContext(SWContext)

  useEffect(()=>{
    getSWMovies()
  }, [])


  let swTitles = swMovies.map((film, index) => {
    return <p key= {index}> {index+1} . {film.title} | Release Date = {film.release_date}</p>
  })

  return (
    <>
    <div>SWMain</div>
    <div>{swError ? swError : swTitles}</div>
    </>
  )
}

export default SWMain