import React, { useContext, useEffect } from 'react'
import { SWContext } from '../../contexts/sw.context'
import SWCard from '../sw-card/SWCard'

function SWMain() {

  const {swMovies, swError, getSWMovies} = useContext(SWContext)

  useEffect(()=>{
    getSWMovies()
  }, [])


  let swTitles = swMovies.map((film, index) => {
    return <p key= {index}> {index+1} . {film.title} | Release Date = {film.release_date}</p>
  })
  const SWMovieCards = swMovies.map((film, index) =>{
    return <SWCard key={index} content={film.title} date={film.release_date} src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}></SWCard>
  })

  return (
    <>
    <div>SWMain</div>
    <div>{swError ? swError : swTitles}</div>
    {SWMovieCards}
    </>
  )
}

export default SWMain