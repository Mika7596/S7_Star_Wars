import { useContext, useEffect } from "react";
import { ActorsContext} from "../../contexts/actors-card.context";
import SWCard from '../sw-card/SWCard';
import { MoviesContext } from "../../contexts/movies.context";

function MoviesCast() {
    const {filmid, cast, actorsError} = useContext(ActorsContext);
    const {selectedFilm, getMovieById} = useContext(MoviesContext)

    useEffect(() =>{
        getMovieById(filmid);
    }, [])

    const castList = cast.map((actor, index) =>{
        let actorimg = actor.profile_path;
        

        return(
            
            <SWCard key={index} content={actor.name} date={actor.character} src={`https://image.tmdb.org/t/p/w185/${actorimg}`} button={false} isSW={false}></SWCard>
            
        )

    })
  return (
    <>
        <div style={{display:"flex", justifyContent:"center"}}>
            {selectedFilm && <SWCard key={filmid} content={selectedFilm.title} date={selectedFilm.release_date.slice(0, 4)} button={false} isSW={false} src={selectedFilm.poster_path ? `https://image.tmdb.org/t/p/w500/${selectedFilm.poster_path}` : "src/assets/star-wars-2-cropped.svg"}></SWCard>}
        </div>
            
        <div className='sw-container' style={{backgroundColor:"white"}}>{cast ? castList : actorsError}</div>
    </>
  )
}

export default MoviesCast