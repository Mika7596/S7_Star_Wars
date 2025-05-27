import React, { useContext, useEffect } from 'react'
import { MoviesContext } from '../../contexts/movies.context'
import SWCard from '../sw-card/SWCard'

function MoviesMain() {

    const {allMovies, movieError, fetchMovies, loading, loadMoreMovies, currentPage, totalPages} = useContext(MoviesContext)

    // useEffect(() =>{
    //     fetchMovies();
    // }, [])

    useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      
      if (scrollTop + clientHeight >= scrollHeight - 200 && !loading && currentPage <= totalPages) {
        console.log("Detected scroll near bottom, loading more...");
        loadMoreMovies();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, currentPage, totalPages, loadMoreMovies]); 

    const moviesList = allMovies.map((film, index) => {
        let imgsrc = null
        let moviedate = Number(film.release_date.slice(0, 4))
        film.poster_path ? imgsrc = `https://image.tmdb.org/t/p/w500/${film.poster_path}` : imgsrc = "src/assets/star-wars-2-cropped.svg"

        return (
            <SWCard key={moviedate} content={film.title} date={moviedate} src={imgsrc} id={film.id} button={true} isSW={false}></SWCard>
        )
    })

  return (<>
    <div className='sw-container' style={{backgroundColor:"white"}}>{movieError? "Problems with fetching movies data": moviesList.length > 0 ? moviesList : "No movie data found."}</div>

    <div>
        {loading && (
          <div style={{ textAlign: 'center', padding: '20px' }}>
          <p>Cargando más películas...</p>
          
          </div>
        )}

        {!loading && currentPage > totalPages && movies.length > 0 && (
          <div style={{ textAlign: 'center', padding: '20px' }}>
          <p>¡Has llegado al final! No hay más películas para mostrar.</p>
          </div>
        )}
    </div>
  </>
  )
}

export default MoviesMain