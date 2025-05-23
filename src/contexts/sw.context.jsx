import axios from "axios";
import { createContext, useState } from "react";

const SWContext = createContext();

function SWProvider (props){
    const [swMovies, setSwMovies] = useState([]);
    const [swError, setSwError] = useState(false);
    const [selectedFilm, setSelectedFilm] = useState(null)

    const getSWMovies = async () =>{
        try{
            const SERVER = import.meta.env.VITE_SW_URL;
            const response = await axios.get(SERVER);
            const data = response.data.results;
            setSwMovies(data);
            setSwError(false)
        } catch (e) {
            setSwError(true)
        }
    }

    const getSWMoviesById = async (id) => {
        
        try{
            const KEY = import.meta.env.VITE_API_KEY;
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`)
            const data = response.data;
            
            setSelectedFilm(data);
        } catch (error){
            setSwError(true)
        }
    }
    return(
        <SWContext.Provider value={{swMovies, swError, getSWMovies, getSWMoviesById, selectedFilm}}>
            {props.children}
        </SWContext.Provider>
    )
}

export {SWContext, SWProvider}