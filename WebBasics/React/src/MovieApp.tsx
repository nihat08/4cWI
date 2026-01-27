import React from 'react';
import MovieList from './components/FilmProjekt/MovieList';

type Props = {}

export default function MovieApp({}: Props) {
    const[searchVal, setSearchVal] = React.useState("");
  return (
    <div style={{
            backgroundImage: "url(https://wallpapercave.com/wp/wp4140976.jpg)",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed', // Bild bleibt beim Scrollen stehen
            minHeight: '100vh',
            width: '100%'
        }}>
        <h1 className=" text-white p-4 text-2xl font-bold">Spider-Man Filme</h1>
        <div className="text-white m-4">

            <input 
                className="p-2 border" 
                type="text"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder="search..."/>

        </div>
        <MovieList search={searchVal}></MovieList>
        
        </div>
  )
}