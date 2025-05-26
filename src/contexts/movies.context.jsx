import { createContext, useState } from "react";
import axios from "axios";

const MoviesContext = createContext();

function MoviesProvider (props){
    const [allMovies, setAllMovies] = useState([]);
    const [movieError, setMovieError] = useState(false);
    //Puede que la línea de abajo dé error
    const [selectedFilm, setSelectedFilm] = useState(null);

    const fetchMovies = async () => {
        try{
            const KEY = import.meta.env.VITE_API_KEY;
            const SERVER = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&sort_by=popularity.desc`
            const response = await axios.get(SERVER)
            const data = response.data;
            console.log(data);
            setAllMovies(data.results);
            console.log(allMovies)
            

        } catch (error) {
            console.log(`Something went wrong: ${error}`);
            
            setMovieError(true)
        }
    }

     const getMovieById = async (id) => {
        
        try{
            const KEY = import.meta.env.VITE_API_KEY;
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`)
            const data = response.data;
            
            setSelectedFilm(data);
        } catch (error){
            setMovieError(true)
        }
    }

    return (
        <MoviesContext.Provider value = {{allMovies, movieError, selectedFilm, fetchMovies, getMovieById}}>
            {props.children}
        </MoviesContext.Provider>
    )
}

export {MoviesContext, MoviesProvider}