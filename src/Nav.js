import { useContext } from "react";
import { MovieContext } from "./MovieContext";

function Nav() {

    const [movies, setMovies] = useContext(MovieContext);
    
    return (
        <h2>List of movies: {movies.length}</h2>
    );
}

export default Nav;