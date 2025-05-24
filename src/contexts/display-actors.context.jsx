import { createContext, useState } from "react";

const DisplayCastContext = createContext();

function DisplayCastProvider (props) {
    const [actorsAvailable, setActorsAvailable] = useState(false);

    return (
        <DisplayCastContext.Provider value={{actorsAvailable, setActorsAvailable}}>
            {props.children}
        </DisplayCastContext.Provider>
    )
}

export {DisplayCastContext, DisplayCastProvider}