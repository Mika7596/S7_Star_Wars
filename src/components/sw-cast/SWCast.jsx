import React, { useContext, useEffect } from 'react'
import { ActorsContext } from '../../contexts/actors-card.context'
import SWCard from '../sw-card/SWCard';

function SWCast() {
    const {fetchActors, cast, actorsError} = useContext(ActorsContext);

    const castList = cast.map((actor, index) =>{
        let actorimg = actor.profile_path;

        return(
            <SWCard key={index} content={actor.name} date={actor.character} src={`https://image.tmdb.org/t/p/w185/${actorimg}`} button={false}></SWCard>
        )

    })


  return (
    <div>{cast ? castList : actorsError}</div>
  )
}

export default SWCast