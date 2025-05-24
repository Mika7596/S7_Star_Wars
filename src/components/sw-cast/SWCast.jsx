import React, { useContext, useEffect } from 'react'
import { ActorsContext } from '../../contexts/actors-card.context'
import SWCard from '../sw-card/SWCard';
import { SWContext } from '../../contexts/sw.context';

function SWCast() {
    const {filmid, cast, actorsError} = useContext(ActorsContext);
    const {getSWMoviesById, selectedFilm} = useContext(SWContext)

    useEffect(() =>{
    getSWMoviesById(filmid);
    
    
    }, [])

    useEffect(() =>{
        console.log(selectedFilm);

    }, [getSWMoviesById])
    
    const castList = cast.map((actor, index) =>{
        let actorimg = actor.profile_path;
        

        return(
            
            <SWCard key={index} content={actor.name} date={actor.character} src={`https://image.tmdb.org/t/p/w185/${actorimg}`} button={false}></SWCard>
            
        )

    })


  return (
    <>
        <div style={{display:"flex", justifyContent:"center", backgroundColor:"black"}}>
        {selectedFilm && <SWCard key={filmid} content={selectedFilm.title} date={selectedFilm.release_date.slice(0, 4)} button={false} src={selectedFilm.poster_path ? `https://image.tmdb.org/t/p/w500/${selectedFilm.poster_path}` : "src/assets/star-wars-2-cropped.svg"}></SWCard>}
        </div>
        
        <div className='sw-container'>{cast ? castList : actorsError}</div>
    </>
  )
}

export default SWCast