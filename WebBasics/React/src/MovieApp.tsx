import React from 'react'
import MovieList from './components/FilmProjekt/MovieList'

type Props = {}

export default function MovieApp({}: Props) {
    const[searchVal, setSearchVal] = React.useState("");
  return (
    <div>
        <h1 className="text-black p-4 text-2xl font-bold">Movie List</h1>
        <div className="m-4">
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