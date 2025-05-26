import React, { useContext, useEffect } from 'react'
import { SWContext } from '../../contexts/sw.context'
import SWCard from '../sw-card/SWCard'
import './swmain.css'

function SWMain() {

  const {swMovies, swError, getSWMovies} = useContext(SWContext)

  useEffect(()=>{
    getSWMovies()
  }, [])


  const SWMovieCards = swMovies.map((film, index) =>{
    let imgsrc = null
    let moviedate = Number(film.release_date.slice(0, 4))
    film.poster_path ? imgsrc = `https://image.tmdb.org/t/p/w500/${film.poster_path}` : imgsrc = "src/assets/star-wars-2-cropped.svg"

    return (
    <SWCard key={moviedate} content={film.title} date={moviedate} src={imgsrc} id={film.id} button={true} isSW={true}></SWCard>
    )
  })

  const sortedFilms = [...SWMovieCards].sort((a, b) => a.key - b.key);

  return (
    <>
    <div className='sw-container' style={{backgroundColor:"black"}}>{swError? "Problems with fetching SW movies data": sortedFilms.length > 0 ? sortedFilms : "No SW movie data found."}</div>
    
    </>
  )
}

export default SWMain