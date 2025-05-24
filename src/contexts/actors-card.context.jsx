import { useContext, useState, createContext } from "react";
import axios from 'axios';
const ActorsContext = createContext();

function ActorsProvider (props){
    const [cast, setCast] = useState([]);
    const [actorsError, setActorsError] = useState(false)
    const [filmid, setfilmId] = useState(0)


    const fetchActors = async (id) =>{
        try{
            setfilmId(id)
            const KEY = import.meta.env.VITE_API_KEY;
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}`);
            const data = response.data.cast;
            setCast(data);
            setActorsError(false)
        } catch (e){
            setActorsError(true)
        }
    }

  
    return(
        <ActorsContext.Provider value={{fetchActors, cast, actorsError, filmid}}>
            {props.children}
        </ActorsContext.Provider>
    )
}

export {ActorsContext, ActorsProvider}