import { useContext, useState, createContext } from "react";
import axios from 'axios';
const ActorsContext = createContext();

function ActorsProvider (props){
    const [cast, setCast] = useState([]);
    const [actorsError, setActorsError] = useState(false)

    const fetchActors = async (id) =>{
        try{
            const KEY = import.meta.env.VITE_API_KEY;
            const response = await axios.get(`https://api.themoviedb.org/3/movie/11/credits?api_key=${KEY}`);
            const data = response.data.cast;
            console.log(data);
            setCast(data);
            setActorsError(false)
        } catch (e){
            setActorsError(true)
        }
    }

  
    return(
        <ActorsContext.Provider value={{fetchActors, cast, actorsError}}>
            {props.children}
        </ActorsContext.Provider>
    )
}

export {ActorsContext, ActorsProvider}