import axios from "axios";
import { createContext, useState } from "react";

const SWContext = createContext();

function SWProvider (props){
    const [swMovies, setSwMovies] = useState([]);
    const [swError, setSwError] = useState(false);

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
    return(
        <SWContext.Provider value={{swMovies, swError, getSWMovies}}>
            {props.children}
        </SWContext.Provider>
    )
}

export {SWContext, SWProvider}