import React, { useEffect } from 'react'
import MovieCard from './MovieCard';
import type { Movie } from '../../utils/movies';

type Props = {
    search: string;
}

export default function MovieList({search}: Props) {
    const[movies, setMovies] = React.useState([]);
    const[filteredMovies, setFilteredMovies] = React.useState([]);

    useEffect(() => {
        fetch("https://imdb.iamidiotareyoutoo.com/search?q=spiderman")
            .then(res => res.json())
            .then((json) => {
                const movieArray= json.description|| []; 
                setMovies(movieArray);   
                setFilteredMovies(movieArray);
            });
    }, []);

    useEffect(() => {
        const lowerSearch = search.toLowerCase();
        let result = movies.filter((movie:Movie) => 
            movie["#TITLE"].toLowerCase().includes(lowerSearch) ||
            movie["#YEAR"].toString().includes(lowerSearch));
        setFilteredMovies(result);
    }, [search]);


  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-4">
        
        {filteredMovies.map((movie: Movie) => (
            <MovieCard 
                id={movie["#IMDB_ID"]}
                title={movie["#TITLE"]}
                year={movie["#YEAR"]}
                poster={movie["#IMG_POSTER"]}
            />
        ))}
    </div>
  )
}