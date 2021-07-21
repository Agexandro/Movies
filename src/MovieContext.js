import {useState,createContext} from "react";
export const MovieContext = createContext();


export const MovieProvider = props => {

    const[movies, setMovies] = useState([
        {name:"Coraline", price:"$100",id:123},
        {name:"Love and Monsters", price:"$200",id:124},
        {name:"Batman", price:"$120",id:125}
    ])

    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}