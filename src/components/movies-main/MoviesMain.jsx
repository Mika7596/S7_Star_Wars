import React, { useContext, useEffect } from 'react'
import { MoviesContext } from '../../contexts/movies.context'
import SWCard from '../sw-card/SWCard'

function MoviesMain() {

    const {allMovies, movieError, fetchMovies} = useContext(MoviesContext)

    useEffect(() =>{
        fetchMovies();
    }, [])

    const moviesList = allMovies.map((film, index) => {
        let imgsrc = null
        let moviedate = Number(film.release_date.slice(0, 4))
        film.poster_path ? imgsrc = `https://image.tmdb.org/t/p/w500/${film.poster_path}` : imgsrc = "src/assets/star-wars-2-cropped.svg"

        return (
            <SWCard key={moviedate} content={film.title} date={moviedate} src={imgsrc} id={film.id} button={true} isSW={false}></SWCard>
        )
    })

  return (
    <div className='sw-container' style={{backgroundColor:"white"}}>{movieError? "Problems with fetching movies data": moviesList.length > 0 ? moviesList : "No movie data found."}</div>
  )
}

export default MoviesMain