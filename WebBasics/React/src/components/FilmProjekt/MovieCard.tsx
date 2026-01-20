import React from 'react'

type Props = {
    id: string
    title: string;
    year: number;
    poster: string;
    
}

export default function MovieCard({id, title, year, poster}: Props) {
  return (
     <div className="border p-4 m-4 bg-blue-600 text-white hover:bg-red-700 rounded-lg"> 
        <div>{title}</div>
        <div>{year}</div>
        <img 
        src={poster} 
        alt={title} 
        className="w-full h-auto"/>
    </div>
  )
}