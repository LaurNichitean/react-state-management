import React, {useContext} from "react";
import { MovieContext } from '../contexts/MovieContext';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div>
           <h3>Laur</h3>
            <p>List of movies:  {movies.length}</p>
        </div>
    );
};

export default Nav;