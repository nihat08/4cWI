import React from 'react'

type Props = {
    title: string;
    year: number;
    
}

export default function MovieCard({title, year}: Props) {
  return (
     <div className="border p-4 m-4 bg-blue-600 text-white hover:bg-red-700 rounded-lg"> 
        <div>{title}</div>
        <div>{year}</div>
    </div>
  )
}