import Movie from "./Movie";
import {MovieContext} from "./MovieContext";
import {useContext} from "react";

function MovieList() {
    const [movies, setMovies] = useContext(MovieContext);
    
    return (
        <table>
            {
                movies.map(movie => (
                    <Movie key={movie.id} props={movie}/>
                ))
            }
        </table>
    );
}

export default MovieList;