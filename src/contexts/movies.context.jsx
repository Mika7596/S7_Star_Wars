import { createContext, useCallback, useState, useEffect } from "react";
import axios from "axios";

const MoviesContext = createContext();

function MoviesProvider (props){
    const [allMovies, setAllMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false)
    const [movieError, setMovieError] = useState(false);
    const [selectedFilm, setSelectedFilm] = useState(null);
    

    const fetchMovies = useCallback(async (pageToLoad) =>{
        try{
            const KEY = import.meta.env.VITE_API_KEY;
            const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&sort_by=popularity.desc&page=${pageToLoad}`;
            const response = await axios.get(URL);
            return{
                allMovies: response.data.results,
                totalPages: response.data.total_pages,
                currentPage: response.data.page,
            }
        }catch (error){
            console.log(`Something went wrong: ${error}`);
            setMovieError(true)
        }
    }, [])

    const loadMoreMovies = useCallback(async () =>{
        if (loading || (currentPage > totalPages && totalPages > 0) || currentPage > 500) {
        console.log("No more pages to load or already loading.");
        return;
        }
        setLoading(true);
        setMovieError(false);

        try{
            const { allMovies: newMovies, totalPages: newTotalPages } = await fetchMovies(currentPage);
            setAllMovies(prevAllMovies => [...prevAllMovies, ...newMovies]);
            setTotalPages(newTotalPages);
            setCurrentPage(prevPage => prevPage + 1);
        } catch(error){
            setMovieError(true);
            console.error("Failed to load more movies:", e);
        }finally{
            setLoading(false);
        }


    }, [loading, currentPage, totalPages, fetchMovies])

    useEffect(() => {
        if (allMovies.length === 0 && !loading) {
      
        loadMoreMovies();
        }
    }, [loadMoreMovies, allMovies.length, loading]);







    //**************************************************** */
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
        <MoviesContext.Provider value = {{allMovies, movieError, selectedFilm, fetchMovies, getMovieById, currentPage, totalPages, loading, loadMoreMovies}}>
            {props.children}
        </MoviesContext.Provider>
    )
}

export {MoviesContext, MoviesProvider}